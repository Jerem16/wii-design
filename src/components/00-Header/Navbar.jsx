"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { desktopMenuItems } from "@/features/desktop-nav/adaptDesktopMenuItems";
import { useNavigation } from "@/features/navigation/core/context/NavigationContext";
import { useScrollContext } from "@/features/navigation/core/context/ScrollContext";
import { useDesktopSmoothScroll } from "@/features/desktop-nav/useDesktopSmoothScroll";
import { useScrollAnchors } from "@/features/navigation/core/hooks/useScrollAnchors";
import { useInitialScroll } from "@/features/navigation/core/utils/scrollUtils";
import { updateMenuClasses } from "@/utils/updateMenuUtils";

const Navbar = () => {
    const navRef = useRef(null);
    const { activeSection } = useScrollContext();
    const { currentRoute, updateRoute, openSubMenu, setOpenSubMenu } = useNavigation();

    useInitialScroll(currentRoute);
    useScrollAnchors([]);

    const handleNavigationClick = useDesktopSmoothScroll(currentRoute, updateRoute);

    const updatedMenuItems = useMemo(
        () => updateMenuClasses(desktopMenuItems, activeSection, currentRoute).mainLink,
        [activeSection, currentRoute]
    );

    const closeSubmenu = useCallback(() => {
        setOpenSubMenu(null);
    }, [setOpenSubMenu]);

    useEffect(() => {
        const navNode = navRef.current;

        const onMouseDown = (event) => {
            if (navNode && !navNode.contains(event.target)) {
                closeSubmenu();
            }
        };

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                closeSubmenu();
            }
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [closeSubmenu]);

    const handleMenuToggle = useCallback(
        (menuId) => {
            setOpenSubMenu(openSubMenu === menuId ? null : menuId);
        },
        [openSubMenu, setOpenSubMenu]
    );

    const handleSubmenuClose = useCallback(() => {
        setOpenSubMenu(null);
    }, [setOpenSubMenu]);

    return (
        <header className="nav-bar" ref={navRef}>
            <Logo />
            <div className="gr-nav"></div>
            <section className="link-group">
                {updatedMenuItems.map((link) => (
                    <NavLink
                        key={link.id}
                        menuItem={link}
                        isOpen={openSubMenu === link.id}
                        onNavigationClick={handleNavigationClick}
                        onMenuToggle={handleMenuToggle}
                        onSubmenuClose={handleSubmenuClose}
                    />
                ))}
            </section>
        </header>
    );
};

export default Navbar;
