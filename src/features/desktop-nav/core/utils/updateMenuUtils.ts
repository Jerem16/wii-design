import { MenuItem, SubItem } from "../../data/interfaces/menu";
import { useEffect, useRef } from "react";
import { useNavigation } from "../context/NavigationContext";

const DESKTOP_NAV_DEBUG = true;

export const isMainItemActive = (
    itemPath: string,
    currentRoute: string
): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }

    return currentRoute.startsWith(itemPath);
};

/*-------------------------------------------------------*/

const updateSubItems = (
    subItems: SubItem[],
    activeSection: string
): SubItem[] => {
    const activeSubItem = subItems.find(
        sub => sub.AnchorId === `#${activeSection}`
    );
    return subItems.map(sub => ({
        ...sub,
        class: activeSubItem?.id === sub.id ? "active" : ""
    }));
};
export const updateMenuItems = (
    items: MenuItem[],
    activeSection: string,
    currentRoute: string
): MenuItem[] => {
    return items.map(item => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems
            ? updateSubItems(item.subItems, activeSection)
            : undefined
    }));
};

/*-------------------------------------------------------*/

export const updateMenuClasses = (
    mainLink?: MenuItem[],
    reservation?: MenuItem[],
    search?: MenuItem[],
    connection?: MenuItem[],
    activeSection = "",
    currentRoute = ""
) => {
    const updatedMainLink = updateMenuItems(
        mainLink || [],
        activeSection,
        currentRoute
    );
    const updatedReservation = updateMenuItems(
        reservation || [],
        activeSection,
        currentRoute
    );
    const updatedSearch = updateMenuItems(search || [], activeSection, currentRoute);
    const updatedConnection = updateMenuItems(
        connection || [],
        activeSection,
        currentRoute
    );

    if (DESKTOP_NAV_DEBUG) {
        const mainActiveItems = updatedMainLink.filter(
            item => item.class === "active"
        );
        console.log("[DESKTOP_NAV_DEBUG] updateMenuClasses:data", {
            variant: "desktop-nav",
            currentRoute,
            activeSection,
            mainActiveIds: mainActiveItems.map(item => item.id),
            mainActivePaths: mainActiveItems.map(item => item.path),
            mainActiveLabels: mainActiveItems.map(item => item.title),
        });
    }

    return {
        mainLink: updatedMainLink,
        reservation: updatedReservation,
        search: updatedSearch,
        connection: updatedConnection,
    };
};

/*-------------------------------------------------------*/

export const resetActiveMenuClasses = () => {
    const activeLinks = document.querySelectorAll(".nav-link.active");

    activeLinks.forEach(link => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    });

    const submenus = document.querySelectorAll(".submenu.open");

    submenus.forEach(submenu => {
        if (submenu instanceof HTMLElement) {
            submenu.style.display = "";
        }
    });
};

/*-------------------------------------------------------*/

const handleClickOutside = (
    e: MouseEvent,
    navRef: React.RefObject<HTMLElement | null>,
    setOpenSubMenu: React.Dispatch<React.SetStateAction<string | null>>
) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubMenu(null);
    }
};
const handleKeyDown = (
    e: KeyboardEvent,
    setOpenSubMenu: React.Dispatch<React.SetStateAction<string | null>>
) => {
    if (e.key === "Escape") {
        e.preventDefault();
        setOpenSubMenu(null);
    }
};
export const useMenuBehavior = () => {
    const navRef = useRef<HTMLElement | null>(null);
    const { openSubMenu, setOpenSubMenu } = useNavigation();
    const setOpenSubMenuBridge: React.Dispatch<React.SetStateAction<
        string | null
    >> = value => {
        if (typeof value === "function") {
            // Appelle la fonction avec la valeur courante
            setOpenSubMenu(
                (value as (prev: string | null) => string | null)(openSubMenu)
            );
        } else {
            setOpenSubMenu(value);
        }
    };
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) =>
            handleClickOutside(e, navRef, setOpenSubMenuBridge);
        const onKeyDown = (e: KeyboardEvent) =>
            handleKeyDown(e, setOpenSubMenuBridge);

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [openSubMenu, setOpenSubMenu, setOpenSubMenuBridge]);

    return { navRef, openSubMenu, setOpenSubMenu: setOpenSubMenuBridge };
};
