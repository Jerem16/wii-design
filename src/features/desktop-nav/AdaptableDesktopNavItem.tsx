"use client";

import { memo, useMemo } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent } from "react";
import type { MenuItem } from "@/features/desktop-nav/data/interfaces/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import { useNavigation } from "@/features/desktop-nav/core/context/NavigationContext";
import AdaptableDesktopSubMenu from "./AdaptableDesktopSubMenu";
import { getShowClass, getShowGroupClass } from "./menuClassUtils";

interface AdaptableDesktopNavItemProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    isOpen: boolean;
    showNavLinks: boolean;
    handleMenuClick: (menuItemId: string) => void;
    onMenuToggle: (menuItemId: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    onMouseEnter: () => void;
    onFocus: () => void;
}

const AdaptableDesktopNavItem = ({
    menuItem,
    onNavigationClick,
    isOpen,
    showNavLinks,
    handleMenuClick,
    onMenuToggle,
    openButton,
    openMainButton,
    onMouseEnter,
    onFocus,
}: AdaptableDesktopNavItemProps) => {
    const SvgIcon = useMemo(
        () => svgComponents[menuItem.svg as keyof typeof svgComponents],
        [menuItem.svg]
    );
    const { openSubMenu, setOpenSubMenu } = useNavigation();
    const mainNav = !openMainButton && showNavLinks && !openButton;
    const hasSubMenu = Boolean(menuItem.subItems?.length);

    const handleInteraction = (
        event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
    ) => {
        event.preventDefault();
        onMenuToggle(menuItem.id);
    };

    const hoverInteraction = (
        event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        setOpenSubMenu(menuItem.id);
    };

    const renderLink = () => {
        const headLinkClassName = `head-link ${menuItem.class ?? ""}`;
        return (
            <a
                role={!showNavLinks ? "menuitem" : "link"}
                aria-label={`Page ${menuItem.title}`}
                className={headLinkClassName}
                href={menuItem.path}
                onClick={(event) => {
                    event.preventDefault();
                    if (hasSubMenu) {
                        if (
                            menuItem.class?.includes("active") &&
                            openSubMenu === menuItem.id
                        ) {
                            onNavigationClick(
                                menuItem.path + (menuItem.AnchorId ?? "")
                            );
                            return;
                        }
                        handleMenuClick(menuItem.id);
                        return;
                    }
                    onNavigationClick(
                        menuItem.path + (menuItem.AnchorId ?? "")
                    );
                    handleMenuClick(menuItem.id);
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        if (hasSubMenu) {
                            if (
                                menuItem.class?.includes("active") &&
                                openSubMenu === menuItem.id
                            ) {
                                onNavigationClick(
                                    menuItem.path + (menuItem.AnchorId ?? "")
                                );
                                return;
                            }
                            handleMenuClick(menuItem.id);
                            return;
                        }
                        onNavigationClick(
                            menuItem.path + (menuItem.AnchorId ?? "")
                        );
                        handleMenuClick(menuItem.id);
                    }
                }}
                tabIndex={0}
                onMouseEnter={hoverInteraction}
                onFocus={hoverInteraction}
            >
                {SvgIcon && <SvgIcon />}
                <span className={`nav-link ${getShowClass(showNavLinks)}`}>
                    {menuItem.title}
                </span>
            </a>
        );
    };

    const renderSubMenu = () => {
        if (!menuItem.subItems?.length) return null;

        return (
            <AdaptableDesktopSubMenu
                menuItem={menuItem}
                isOpen={isOpen}
                onSubItemClick={onNavigationClick}
            />
        );
    };

    const openGroup = openMainButton || mainNav || (openButton && showNavLinks);

    if (openGroup) {
        return (
            <div
                className={`group_link-submenu ${menuItem.id} ${!openMainButton ? "nav-padding" : ""}`}
            >
                {renderLink()}
                {renderSubMenu()}
            </div>
        );
    }

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menubar"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={handleInteraction}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    handleInteraction(event);
                }
            }}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            {renderLink()}
            {renderSubMenu()}
        </div>
    );
};

export default memo(AdaptableDesktopNavItem);
