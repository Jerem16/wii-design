import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Logo from "../svg_Icon/Logo";
import { useScrollContext } from "../../utils/context/ScrollContext";
import { useNavigation } from "../../utils/context/NavigationContext";
import { MenuItem, menuItems } from "../../assets/data/menuItems";
import { updateMenuClasses } from "../../utils/updateMenuUtils";
import { handleScrollClick, handleNavClick } from "../../utils/fnScrollUtils";
import { useInitialScroll } from "../../utils/scrollUtils";
import useResize from "./utils/useResize";

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    tabletMain: boolean;
    bigMenu: boolean;
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();
    const DESKTOP_NAV_DEBUG = true;

    useInitialScroll(pathname);

    const [tabletMain, setTabletMain] = useState(false);
    const [openMainButton, setOpenMainButton] = useState(false);
    const [openButton, setOpenButton] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);

    useResize(setTabletMain, setOpenMainButton, setOpenButton, setBigMenu);

    // Wrapper pour adapter `handleNavClick`
    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const updatedMenuItems = updateMenuClasses(
        menuItems.mainLink,
        menuItems.reservation,
        menuItems.search,
        menuItems.connection,
        activeSection,
        currentRoute
    );

    if (DESKTOP_NAV_DEBUG) {
        const mainActiveItems = updatedMenuItems.mainLink.filter(
            item => item.class === "active"
        );
        const activeMainItem = mainActiveItems[0];
        console.log("[DESKTOP_NAV_DEBUG] updateMenuClasses", {
            variant: "adaptable",
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
            activeMainLinkClassName: `head-link ${activeMainItem?.class ?? ""}`,
        });
    }

    useEffect(() => {
        if (!DESKTOP_NAV_DEBUG) return;
        const activeMainLinks = document.querySelectorAll(
            ".header .head-link.active"
        );
        const allMainLinks = document.querySelectorAll(".header .head-link");
        console.log("[DESKTOP_NAV_DEBUG] dom-main-active", {
            variant: "adaptable",
            currentRoute,
            domActiveMainCount: activeMainLinks.length,
            domAllMainLinksCount: allMainLinks.length,
            domActiveMainLinks: Array.from(activeMainLinks).map(link => ({
                href: link instanceof HTMLAnchorElement ? link.href : null,
                text: link.textContent?.trim() ?? ""
            }))
        });
    }, [currentRoute]);

    return (
        <div className="header">
            <Link
                href="/#slider"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
                className="logo-link"
            >
                <Logo />
            </Link>
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
                tabletMain={tabletMain} // Gestion de la vue tablette
                openMainButton={openMainButton} // Gestion de la vue Desktop
                setOpenMainButton={setOpenMainButton}
                openButton={openButton}
                bigMenu={bigMenu} // Gestion de la vue Desktop large
            />
        </div>
    );
};

export default Header;
