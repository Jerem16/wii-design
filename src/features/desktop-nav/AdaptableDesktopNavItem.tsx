"use client";

import { memo, useMemo } from "react";
import type { MenuItem } from "@/features/mobile-nav/types/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import { useNavigation } from "@/features/navigation/core/context/NavigationContext";
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
    const SvgIcon = useMemo(() => svgComponents[menuItem.svg], [menuItem.svg]);
    const { setOpenSubMenu } = useNavigation();
    const mainNav = !openMainButton && showNavLinks && !openButton;

    const handleInteraction = (
        event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => {
        event.preventDefault();
        onMenuToggle(menuItem.id);
    };

    const hoverInteraction = (
        event: React.MouseEvent<HTMLAnchorElement> | React.FocusEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        setOpenSubMenu(menuItem.id);
    };

    const renderLink = () => (
        <a
            role={!showNavLinks ? "menuitem" : "link"}
            aria-label={`Page ${menuItem.title}`}
            className={`head-link ${menuItem.class ?? ""}`}
            href={menuItem.path}
            onClick={(event) => {
                event.preventDefault();
                onNavigationClick(menuItem.path + (menuItem.AnchorId ?? ""));
                handleMenuClick(menuItem.id);
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onNavigationClick(menuItem.path + (menuItem.AnchorId ?? ""));
                    handleMenuClick(menuItem.id);
                }
            }}
            tabIndex={0}
            onMouseEnter={hoverInteraction}
            onFocus={hoverInteraction}
        >
            {SvgIcon && <SvgIcon />}
            <span className={`nav-link ${getShowClass(showNavLinks)}`}>{menuItem.title}</span>
        </a>
    );

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
