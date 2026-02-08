"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useWorkerScrollSpy } from "@/core/scroll-spy/useWorkerScrollSpy";
import type { HashId } from "@/core/scroll-spy/types";
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
    const { setActiveSection } = useScrollContext();
    const pathname = usePathname() ?? "/";
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
        offsetCssVarName: "--scroll-spy-offset",
        offsetScopeSelector: ".desktop-adaptable-nav",
    });

    useEffect(() => {
        refresh();
    }, [pathname, refresh, sectionIds]);

    useEffect(() => {
        const nextId = activeId ? activeId.replace(/^#/, "") : "";
        setCurrentSectionId(nextId);
        addNewUrl(nextId);
        updateSectionClasses(sections, setActiveSection);
    }, [activeId, sections, setActiveSection]);
};
