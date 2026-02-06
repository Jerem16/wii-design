"use client";

import { memo, useMemo, useState } from "react";
import Link from "next/link";
import { menuItems } from "@/features/desktop-nav/data/menuItems";
import {
    useNavigation,
    NavigationProvider
} from "@/features/navigation/core/context/NavigationContext";
import ScrollProvider, {
    useScrollContext
} from "@/features/navigation/core/context/ScrollContext";
import { useScrollAnchors } from "@/features/navigation/core/hooks/useScrollAnchors";
import {
    mapMenuForDesktop,
    updateDesktopMenuClasses,
    handleDesktopNavClick
} from "./adaptableMenuUtils";
import { useResize } from "./hooks/useResize";
import { useAdaptableMenu } from "./useAdaptableMenu";
import AdaptableDesktopNavItem from "./AdaptableDesktopNavItem";
import AdaptableDesktopNavInput from "./AdaptableDesktopNavInput";
import Logo from "@/components/00-Header/Logo";

const DesktopNavContent = () => {
    const {
        currentRoute,
        updateRoute,
        openSubMenu,
        setOpenSubMenu
    } = useNavigation();
    const { activeSection } = useScrollContext();
    const { navRef } = useAdaptableMenu();

    const [tabletMain, setTabletMain] = useState(false);
    const [openMainButton, setOpenMainButton] = useState(false);
    const [openButton, setOpenButton] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    useScrollAnchors([]);
    useResize({
        setTabletMain,
        setOpenMainButton,
        setOpenButton,
        setBigMenu,
        setIsDesktop
    });

    const desktopSource = useMemo(() => mapMenuForDesktop(menuItems), []);
    const updatedMenuItems = useMemo(
        () =>
            updateDesktopMenuClasses(
                desktopSource,
                activeSection,
                currentRoute
            ),
        [activeSection, currentRoute, desktopSource]
    );

    if (!isDesktop) return null;

    const showLink = (menuId: string) => {
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    };

    const handleMouseOrFocus = (menuId: string) => {
        showLink(menuId);
        if (!bigMenu) {
            setOpenMainButton(false);
        }
    };

    const handleMainMouseOrFocus = (menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    };

    const handleNavigationClick = (path: string) => {
        handleDesktopNavClick(path, currentRoute, updateRoute);
    };

    const shouldShowNavLinks = (menuId: string): boolean =>
        openButton || openMenu === menuId;

    const handleInteraction = (menuId: string): void => {
        if (!(openMainButton && openButton)) {
            handleMouseOrFocus(menuId);
        }
    };

    return (
        <header className="nav-bar" role="banner">
            <Logo />
            <div className="desktop-adaptable-nav">
                <div className="header">
                    <div className="head-flex">
                        <nav
                            ref={navRef}
                            className="main-nav"
                            onMouseEnter={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                            onFocus={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                        >
                            {updatedMenuItems.mainLink.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={openMainButton}
                                    openButton={openButton}
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={
                                        openMainButton ||
                                        openButton ||
                                        openMenu === menuItem.id
                                    }
                                    onMouseEnter={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>

                        {openButton ? null : <div className="head-space"></div>}

                        <nav>
                            {updatedMenuItems.reservation.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>

                        <nav className="research" role="menubar">
                            {updatedMenuItems.search.map(menuItem => (
                                <AdaptableDesktopNavInput
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                    onNavigationClick={handleNavigationClick}
                                />
                            ))}
                        </nav>

                        <nav className="connection">
                            {updatedMenuItems.connection.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

const AdaptableDesktopNav = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <DesktopNavContent />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(AdaptableDesktopNav);
