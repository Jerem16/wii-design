"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/00-Header/Logo";
import { menuItems } from "@/features/mobile-nav/data/menuItems";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import DesktopSubMenu from "@/features/desktop-nav/DesktopSubMenu";
import { useDesktopSubMenuBehavior } from "@/features/desktop-nav/useDesktopSubMenuBehavior";
import type { MenuItem } from "@/features/mobile-nav/types/menu";

const isParentRouteActive = (pathname: string, item: MenuItem): boolean => {
    if (item.path === "/") {
        return pathname === "/";
    }
    return pathname.startsWith(item.path);
};

const DesktopNavbar = () => {
    const pathname = usePathname();
    const [activeHash, setActiveHash] = useState<string>("");
    const { navRef, openSubMenuId, toggleSubMenu, closeSubMenu } =
        useDesktopSubMenuBehavior();

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };

        updateHash();
        window.addEventListener("hashchange", updateHash);

        return () => {
            window.removeEventListener("hashchange", updateHash);
        };
    }, []);

    const mainLinks = useMemo(() => menuItems.mainLink, []);

    return (
        <header className="nav-bar nav-bar--desktop-submenu" ref={navRef}>
            <Logo />
            <div className="gr-nav" />
            <section className="link-group" aria-label="Navigation principale desktop">
                {mainLinks.map((item) => {
                    const SvgIcon = svgComponents[item.svg];
                    const hasSubItems = Boolean(item.subItems?.length);
                    const isOpen = openSubMenuId === item.id;
                    const isParentActive = isParentRouteActive(pathname, item);
                    const submenuId = `desktop-submenu-${item.id}`;

                    return (
                        <div key={item.id} className="link-button group_link-submenu">
                            {hasSubItems ? (
                                <>
                                    <button
                                        type="button"
                                        className={`head-link ${isParentActive ? "active" : ""}`}
                                        onClick={() => toggleSubMenu(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={submenuId}
                                    >
                                        {SvgIcon ? <SvgIcon /> : null}
                                        <span className="nav-link">{item.title}</span>
                                    </button>
                                    <DesktopSubMenu
                                        id={submenuId}
                                        parentPath={item.path}
                                        subItems={item.subItems ?? []}
                                        isOpen={isOpen}
                                        activeHash={activeHash}
                                        onSubItemClick={closeSubMenu}
                                    />
                                </>
                            ) : (
                                <Link
                                    href={item.path}
                                    className={`head-link ${isParentActive ? "active" : ""}`}
                                >
                                    {SvgIcon ? <SvgIcon /> : null}
                                    <span className="nav-link">{item.title}</span>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </section>
        </header>
    );
};

export default DesktopNavbar;
