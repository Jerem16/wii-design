"use client";
import { useMemo, memo } from "react";
import dynamic from "next/dynamic";
import type { MenuItem } from "../data/menuItems";
import { useNavigation } from "../utils/context/NavigationContext";
import { svgComponents } from "./svgComponents";
import { makeClickHandler } from "../utils/handlers";

const LazySubMenu = dynamic<{
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}>(() => import("./SubMenu"), { ssr: false, loading: () => null });

interface NavLinkProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    isOpen: boolean;
    handleMenuClick: (menuItemId: string) => void;
}

const NavLink = ({
    menuItem,
    onNavigationClick,
    isOpen,
    handleMenuClick,
}: NavLinkProps) => {
    const { closeHamburgerMenu } = useNavigation();
    const SvgIcon = useMemo(() => svgComponents[menuItem.svg], [menuItem.svg]);

    const handleClick = useMemo(
        () =>
            makeClickHandler(() => {
                onNavigationClick(menuItem.path);
                const wasOpen = isOpen;
                handleMenuClick(menuItem.id);
                if (!menuItem.subItems?.length || wasOpen) {
                    closeHamburgerMenu(500);
                }
            }),
        [
            onNavigationClick,
            menuItem.path,
            menuItem.id,
            menuItem.subItems?.length,
            isOpen,
            handleMenuClick,
            closeHamburgerMenu,
        ]
    );

    const hasSub = !!menuItem.subItems && menuItem.subItems.length > 0;
    const href = menuItem.AnchorId ? `${menuItem.path}${menuItem.AnchorId}` : menuItem.path;

    return (
        <div className={`mnav__item ${menuItem.id}`}>
            <a
                aria-label={`Page ${menuItem.title}`}
                className={`mnav__link ${menuItem.class ?? ""}`}
                href={href}
                onClick={handleClick}
                tabIndex={0}
                aria-haspopup={hasSub ? "menu" : undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                aria-controls={hasSub ? `submenu-${menuItem.id}` : undefined}
            >
                {SvgIcon && (
                    <span className="mnav__icon">
                        <SvgIcon />
                    </span>
                )}
                <span className="mnav__link-text">{menuItem.title}</span>
                {hasSub && (
                    <span className={`mnav__submenu-arrow ${isOpen ? "open" : "closed"}`}>
                        {isOpen ? "▲" : "▼"}
                    </span>
                )}
            </a>

            {hasSub && isOpen && (
                <LazySubMenu menuItem={menuItem} isOpen={isOpen} onSubItemClick={onNavigationClick} />
            )}
        </div>
    );
};

export default memo(NavLink);
