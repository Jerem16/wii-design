"use client";

import { memo, useMemo, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import {
    NavigationProvider,
    useNavigation
} from "@/features/desktop-nav/core/navigation/context/NavigationContext";
import {
    ScrollProvider,
    useScrollContext
} from "@/features/desktop-nav/core/navigation/context/ScrollContext";
import {
    handleNavClick,
    handleScrollClick
} from "@/features/desktop-nav/core/navigation/utils/fnScrollUtils";
import {
    updateMenuClasses,
    useMenuBehavior
} from "@/features/desktop-nav/core/search/utils/updateMenuUtils";
import { SearchProvider } from "@/features/desktop-nav/core/search/context/SearchContext";
import useResize from "@/features/desktop-nav/core/navigation/hooks/useResize";
import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";
import { useInitialScrollDesktop } from "@/features/desktop-nav/adapters/useInitialScrollDesktop";
import AdaptableDesktopNavItem from "./AdaptableDesktopNavItem";
import AdaptableDesktopNavInput from "./AdaptableDesktopNavInput";
import Logo from "@/components/00-Header/Logo";
import DesktopScrollSectionsWrapper from "./DesktopScrollSectionsWrapper";
import ColorShiftOverlay from "@/components/99-Svg_Icon/ColorShiftOverlay";

const overlayHostStyle: CSSProperties = {
    position: "relative",
    isolation: "isolate"
};

const overlayContentStyle: CSSProperties = {
    position: "relative",
    zIndex: 1
};

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
                            style={overlayHostStyle}
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
                            <ColorShiftOverlay shape="rect" zIndex={0} />
                            <div style={overlayContentStyle}>
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
                            </div>
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

                        <nav
                            className="research"
                            role="menubar"
                            style={overlayHostStyle}
                        >
                            <ColorShiftOverlay shape="rect" zIndex={0} />
                            <div style={overlayContentStyle}>
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
                            </div>
                        </nav>

                        <nav className="connection" style={overlayHostStyle}>
                            <ColorShiftOverlay shape="rect" zIndex={0} />
                            <div style={overlayContentStyle}>
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
                            </div>
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
