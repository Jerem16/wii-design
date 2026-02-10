"use client";

import { memo, useMemo } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent } from "react";
import type { MenuItem } from "@/features/desktop-nav/data/interfaces/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import { useNavigation } from "@/features/desktop-nav/core/context/NavigationContext";
import { isActivationKey } from "@/features/desktop-nav/core/utils/handlers";
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
        const targetHref = `${menuItem.path}${menuItem.AnchorId ?? ""}`;

        const shouldNavigateWhenSubMenuOpen = (
            anchorEl: HTMLAnchorElement
        ): boolean => {
            if (!hasSubMenu) return false;

            // Sous-menu ouvert via state
            if (openSubMenu === menuItem.id) return true;

            // Sous-menu ouvert via DOM (classe .open)
            const root = anchorEl.closest(".group_link-submenu");
            return Boolean(root?.querySelector(".submenu.open"));
        };

        const activateHeadLink = (anchorEl: HTMLAnchorElement) => {
            if (hasSubMenu) {
                // Sous-menu déjà ouvert => 2e clic / activation => navigate
                if (shouldNavigateWhenSubMenuOpen(anchorEl)) {
                    setOpenSubMenu(null);
                    onNavigationClick(targetHref);
                    return;
                }

                // 1er clic => ouvre/toggle sous-menu (comportement actuel)
                handleMenuClick(menuItem.id);
                return;
            }

            // Pas de sous-menu => navigate direct + comportement actuel (toggle/close)
            onNavigationClick(targetHref);
            handleMenuClick(menuItem.id);
        };

        const onHeadLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        const onHeadLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
            if (!isActivationKey(event.key)) return;
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        return (
            <a
                role={!showNavLinks ? "menuitem" : "link"}
                aria-label={`Page ${menuItem.title}`}
                className={headLinkClassName}
                href={menuItem.path}
                onClick={onHeadLinkClick}
                onKeyDown={onHeadLinkKeyDown}
                tabIndex={0}
                onMouseEnter={hoverInteraction}
                onFocus={hoverInteraction}
            >
                {SvgIcon ? <SvgIcon /> : null}
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
                className={`group_link-submenu ${menuItem.id} ${
                    !openMainButton ? "nav-padding" : ""
                }`}
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
                if (!isActivationKey(event.key)) return;
                handleInteraction(event);
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
