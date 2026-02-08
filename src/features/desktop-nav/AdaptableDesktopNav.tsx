"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
    NavigationProvider,
    useNavigation
} from "@/features/desktop-nav/core/context/NavigationContext";
import {
    ScrollProvider,
    useScrollContext
} from "@/features/desktop-nav/core/context/ScrollContext";
import {
    handleNavClick,
    handleScrollClick
} from "@/features/desktop-nav/core/utils/fnScrollUtils";
import {
    updateMenuClasses,
    useMenuBehavior
} from "@/features/desktop-nav/core/utils/updateMenuUtils";
import { SearchProvider } from "@/features/desktop-nav/core/context/SearchContext";
import useResize from "@/features/desktop-nav/hooks/useResize";
import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";
import { useInitialScrollDesktop } from "@/features/desktop-nav/adapters/useInitialScrollDesktop";
import AdaptableDesktopNavItem from "./AdaptableDesktopNavItem";
import AdaptableDesktopNavInput from "./AdaptableDesktopNavInput";
import Logo from "@/components/00-Header/Logo";
import DesktopScrollSectionsWrapper from "./DesktopScrollSectionsWrapper";

const DesktopNavContent = () => {
    const {
        currentRoute,
        updateRoute,
        openSubMenu,
        setOpenSubMenu
    } = useNavigation();
    const { activeSection } = useScrollContext();
    const { navRef } = useMenuBehavior();
    const pathname = usePathname();
    const DESKTOP_NAV_DEBUG = true;

    const [tabletMain, setTabletMain] = useState(false);
    const [openMainButton, setOpenMainButton] = useState(false);
    const [openButton, setOpenButton] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    useResize(setTabletMain, setOpenMainButton, setOpenButton, setBigMenu);
    useInitialScrollDesktop(pathname);

    const updatedMenuItems = useMemo(
        () =>
            updateMenuClasses(
                adaptableMenuData.mainLink,
                adaptableMenuData.reservation,
                adaptableMenuData.search,
                adaptableMenuData.connection,
                activeSection,
                currentRoute
            ),
        [activeSection, currentRoute]
    );

    if (DESKTOP_NAV_DEBUG) {
        console.log("[DESKTOP_NAV_DEBUG] render-main-map-source", {
            variant: "desktop-nav",
            mapSource: "updatedMenuItems.mainLink",
            isUpdatedMenuSameRefAsInitial:
                updatedMenuItems.mainLink === adaptableMenuData.mainLink,
            updatedMenuLength: updatedMenuItems.mainLink.length,
            initialMenuLength: adaptableMenuData.mainLink.length
        });
    }

    if (DESKTOP_NAV_DEBUG) {
        const mainActiveItems = updatedMenuItems.mainLink.filter(
            item => item.class === "active"
        );
        const activeMainItem = mainActiveItems[0];
        console.log("[DESKTOP_NAV_DEBUG] updateMenuClasses", {
            variant: "desktop-nav",
            currentRoute,
            activeSection,
            pathname,
            mainActiveCount: mainActiveItems.length,
            mainActiveIds: mainActiveItems.map(item => item.id),
            renderSource: "updatedMenuItems.mainLink",
            renderedItemsCount: updatedMenuItems.mainLink.length,
            activeMainItemId: activeMainItem?.id ?? null,
            activeMainItemPath: activeMainItem?.path ?? null,
            activeMainItemLabel: activeMainItem?.title ?? null,
            activeMainItemClass: activeMainItem?.class ?? null,
            activeMainItemClassNameProp:
                (activeMainItem as { className?: string } | undefined)
                    ?.className ?? null,
            activeMainLinkClassName: `head-link ${activeMainItem?.class ?? ""}`
        });
    }

    useEffect(() => {
        if (!DESKTOP_NAV_DEBUG) return;
        const activeMainLinks = document.querySelectorAll(
            ".desktop-adaptable-nav .head-link.active"
        );
        const allMainLinks = document.querySelectorAll(
            ".desktop-adaptable-nav .head-link"
        );
        console.log("[DESKTOP_NAV_DEBUG] dom-main-active", {
            variant: "desktop-nav",
            currentRoute,
            domActiveMainCount: activeMainLinks.length,
            domAllMainLinksCount: allMainLinks.length,
            domActiveMainLinks: Array.from(activeMainLinks).map(link => ({
                href: link instanceof HTMLAnchorElement ? link.href : null,
                text: link.textContent?.trim() ?? ""
            }))
        });
    }, [currentRoute]);

    if (!tabletMain) return null;

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
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
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
                <SearchProvider>
                    <DesktopScrollSectionsWrapper />
                    <DesktopNavContent />
                </SearchProvider>
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(AdaptableDesktopNav);
