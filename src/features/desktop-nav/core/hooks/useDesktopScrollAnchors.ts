"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { useWorkerScrollSpy } from "@/core/scroll-spy/useWorkerScrollSpy";
import type { HashId } from "@/core/scroll-spy/types";
import {
    dbg,
    isScrollSpyDebugEnabled,
    shouldLogNow,
} from "@/core/scroll-spy/debug";
import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";
import { useScrollContext } from "../context/ScrollContext";
import {
    addNewUrl,
    updateSectionClasses,
    setCurrentSectionId,
} from "../utils/fnScrollUtils";

type MenuItemLink = {
    mainLink: {
        href: string;
        subItems?: readonly { href: string }[];
    };
};

const normalizePath = (href: string): string => href.split("#")[0] || "/";

const extractHashId = (href: string): HashId | null => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return null;
    const rawHash = href.slice(hashIndex);
    if (!rawHash || rawHash === "#") return null;
    return (rawHash.startsWith("#") ? rawHash : `#${rawHash}`) as HashId;
};

const collectUniqueHashes = (
    subItems: readonly { href: string }[] | undefined
): HashId[] => {
    const unique = new Set<HashId>();
    const result: HashId[] = [];
    subItems?.forEach((subItem) => {
        const hash = extractHashId(subItem.href);
        if (!hash || unique.has(hash)) return;
        unique.add(hash);
        result.push(hash);
    });
    return result;
};

const getHomeSectionIds = (
    menuItems: readonly MenuItemLink[]
): readonly HashId[] => {
    const homeItem = menuItems.find(
        (item) => normalizePath(item.mainLink.href) === "/"
    );
    return collectUniqueHashes(homeItem?.mainLink.subItems);
};

export const getSectionIdsForPath = ({
    pathname,
    menuItems,
}: {
    pathname: string;
    menuItems: readonly MenuItemLink[];
}): readonly HashId[] => {
    const normalizedPathname = normalizePath(pathname);
    const matchedItem = menuItems.find(
        (item) => normalizePath(item.mainLink.href) === normalizedPathname
    );
    const hashes = collectUniqueHashes(matchedItem?.mainLink.subItems);
    if (hashes.length > 0) return hashes;
    if (normalizedPathname === "/") return getHomeSectionIds(menuItems);
    return [];
};

export const useDesktopScrollAnchors = (sections: { id: string }[]) => {
    const { activeSection, setActiveSection } = useScrollContext();
    const pathname = usePathname() ?? "/";
    const activeSectionRef = useRef(activeSection);
    const previousActiveIdRef = useRef<HashId | undefined>(undefined);
    const menuItems = useMemo<readonly MenuItemLink[]>(
        () =>
            adaptableMenuData.mainLink.map((item) => ({
                mainLink: {
                    href: item.path,
                    subItems: item.subItems?.map((subItem) => ({
                        href: `${item.path}${subItem.AnchorId ?? ""}`,
                    })),
                },
            })),
        []
    );
    const sectionIds = useMemo<readonly HashId[]>(
        () => getSectionIdsForPath({ pathname, menuItems }),
        [menuItems, pathname]
    );
    const { activeId, refresh } = useWorkerScrollSpy({
        sectionIds,
        thresholdPx: 100,
        isEnabled: true,
        offsetCssVarName: "--scroll-offset",
        offsetScopeSelector: ".desktop-adaptable-nav",
    });

    useEffect(() => {
        refresh();
    }, [pathname, refresh, sectionIds]);

    useEffect(() => {
        activeSectionRef.current = activeSection;
    }, [activeSection]);

    useEffect(() => {
        const debugEnabled = isScrollSpyDebugEnabled();
        const previousActiveId = previousActiveIdRef.current;
        if (activeId === previousActiveId) return;
        previousActiveIdRef.current = activeId;

        const hashBefore =
            typeof window === "undefined" ? "" : window.location.hash;
        const pathnameCurrent =
            typeof window === "undefined" ? "" : window.location.pathname;
        if (debugEnabled) {
            dbg("menu:active-change", {
                activeId: activeId ?? null,
                previousActiveId: previousActiveId ?? null,
                activeSectionBefore: activeSectionRef.current,
                hashBefore,
                pathname: pathnameCurrent,
            });
        }

        const nextId = activeId ? activeId.replace(/^#/, "") : "";
        setCurrentSectionId(nextId);
        addNewUrl(nextId);
        updateSectionClasses(sections, setActiveSection);

        if (debugEnabled && typeof window !== "undefined") {
            const hashAfter = window.location.hash;
            if (shouldLogNow("menu:dom-proof", 500)) {
                const submenuLinks = Array.from(
                    document.querySelectorAll(
                        ".submenu_group .nav-link.active"
                    )
                ).slice(0, 2);
                const headLinks = Array.from(
                    document.querySelectorAll(".head-link.active")
                ).slice(0, 2);
                dbg("menu:dom-proof", {
                    activeSubmenuCount: document.querySelectorAll(
                        ".submenu_group .nav-link.active"
                    ).length,
                    activeHeadCount: document.querySelectorAll(
                        ".head-link.active"
                    ).length,
                    submenuSamples: submenuLinks.map((element) => ({
                        href: element.getAttribute("href"),
                        text: element.textContent?.trim() ?? "",
                    })),
                    headSamples: headLinks.map((element) => ({
                        href: element.getAttribute("href"),
                        text: element.textContent?.trim() ?? "",
                    })),
                });
            }
            window.setTimeout(() => {
                if (!isScrollSpyDebugEnabled()) return;
                dbg("menu:active-change:post", {
                    activeId: activeId ?? null,
                    activeSectionAfter: activeSectionRef.current,
                    hashAfter,
                    pathname: window.location.pathname,
                });
            }, 0);
        }
    }, [activeId, sections, setActiveSection]);
};
