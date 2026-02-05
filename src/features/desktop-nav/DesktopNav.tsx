"use client";

import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/00-Header/Logo";
import { useNavigation } from "@/features/navigation/core/context/NavigationContext";
import { useScrollContext } from "@/features/navigation/core/context/ScrollContext";
import { useSmoothScroll } from "@/features/navigation/core/hooks/useSmoothScroll";
import { useScrollAnchors } from "@/features/navigation/core/hooks/useScrollAnchors";
import { getScrollOffset } from "@/features/navigation/core/utils/scrollSmooth";
import { useInitialScroll } from "@/features/navigation/core/utils/scrollUtils";
import { updateMenuClasses } from "@/utils/updateMenuUtils";
import { getDesktopMenuItems } from "./getDesktopMenuItems";
import { desktopSvgComponents } from "./desktopSvgComponents";
import { useDesktopResize } from "./useDesktopResize";

const DesktopNav = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute, openSubMenu, setOpenSubMenu } = useNavigation();
    const { activeSection } = useScrollContext();
    const navRef = useRef<HTMLElement | null>(null);
    const openSubMenuRef = useRef<string | null>(openSubMenu);

    useScrollAnchors([]);
    useInitialScroll(pathname);

    const resizeState = useDesktopResize();
    const handleNavigationClick = useSmoothScroll(currentRoute, updateRoute);

    useEffect(() => {
        openSubMenuRef.current = openSubMenu;
    }, [openSubMenu]);

    useEffect(() => {
        const offset = getScrollOffset({ headerSelector: ".nav-bar" });
        document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);

        return () => {
            document.documentElement.style.removeProperty("--scroll-offset");
        };
    }, []);

    const handleDocumentPointerDown = useCallback(
        (event: PointerEvent) => {
            if (!openSubMenuRef.current) return;
            const root = navRef.current;
            if (!root) return;
            const target = event.target;
            if (!(target instanceof Node)) return;
            if (!root.contains(target)) {
                setOpenSubMenu(null);
            }
        },
        [setOpenSubMenu]
    );

    const handleDocumentKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenSubMenu(null);
            }
        },
        [setOpenSubMenu]
    );

    useEffect(() => {
        document.addEventListener("pointerdown", handleDocumentPointerDown);
        document.addEventListener("keydown", handleDocumentKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handleDocumentPointerDown);
            document.removeEventListener("keydown", handleDocumentKeyDown);
        };
    }, [handleDocumentPointerDown, handleDocumentKeyDown]);

    const desktopMenuItems = useMemo(
        () =>
            updateMenuClasses(
                getDesktopMenuItems().mainLink,
                activeSection,
                currentRoute
            ).mainLink,
        [activeSection, currentRoute]
    );

    const navClassName = useMemo(() => {
        const classNames = ["nav-bar", "desktop-nav"];
        if (resizeState.tabletMain) classNames.push("tablet-main");
        if (resizeState.openMainButton) classNames.push("open-main-button");
        if (resizeState.openButton) classNames.push("open-button");
        if (resizeState.bigMenu) classNames.push("big-menu");
        return classNames.join(" ");
    }, [resizeState]);

    return (
        <header className={navClassName} ref={navRef}>
            <Logo />
            <div className="gr-nav" />
            <section className="link-group" aria-label="Navigation principale desktop">
                {desktopMenuItems.map((item) => {
                    const hasSubItems = !!item.subItems?.length;
                    const isOpen = openSubMenu === item.id;
                    const hasActiveSubItem =
                        item.subItems?.some((subItem) => subItem.class === "active") ?? false;
                    const SvgIcon = desktopSvgComponents[item.svg];
                    const basePath = `${item.path}${item.AnchorId ?? ""}`;
                    const parentClassName = [
                        "link-button",
                        item.class ?? "",
                        hasActiveSubItem ? "active" : "",
                        isOpen ? "open" : "",
                    ]
                        .filter(Boolean)
                        .join(" ");

                    return (
                        <div key={item.id} className={parentClassName}>
                            <a
                                className={`nav-link ${item.class ?? ""}`}
                                href={basePath}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleNavigationClick(basePath);
                                    if (hasSubItems) {
                                        setOpenSubMenu(isOpen ? null : item.id);
                                        return;
                                    }
                                    setOpenSubMenu(null);
                                }}
                                aria-haspopup={hasSubItems ? "menu" : undefined}
                                aria-expanded={hasSubItems ? isOpen : undefined}
                                aria-controls={hasSubItems ? `submenu-${item.id}` : undefined}
                            >
                                <span className="desktop-nav__icon">
                                    <SvgIcon />
                                </span>
                                <span>{item.title}</span>
                            </a>

                            {hasSubItems && (
                                <div
                                    id={`submenu-${item.id}`}
                                    className={`submenu ${isOpen ? "open" : ""}`}
                                    role="menu"
                                >
                                    {item.subItems?.map((subItem) => {
                                        const subPath = `${item.path}${subItem.AnchorId}`;
                                        return (
                                            <a
                                                key={subItem.id}
                                                href={subPath}
                                                role="menuitem"
                                                className={`submenu-link ${subItem.class ?? ""}`}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleNavigationClick(subPath);
                                                    setOpenSubMenu(null);
                                                }}
                                            >
                                                {subItem.title}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </header>
    );
};

export default memo(DesktopNav);
