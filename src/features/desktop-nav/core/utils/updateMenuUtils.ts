import { MenuItem, SubItem } from "../../data/interfaces/menu";
import type { HashId } from "@/core/scroll-spy/types";
import { useEffect, useRef } from "react";
import { useNavigation } from "../context/NavigationContext";

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

const normalizeHashId = (value: string): HashId | undefined => {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    const withHash = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
    if (withHash === "#") return undefined;
    return withHash as HashId;
};

const updateSubItems = (
    subItems: SubItem[],
    activeHash: HashId | undefined,
    shouldApplyActive: boolean
): SubItem[] => {
    return subItems.map((sub) => {
        const subHash = normalizeHashId(sub.AnchorId);
        const isActive =
            shouldApplyActive &&
            activeHash !== undefined &&
            subHash === activeHash;
        return {
            ...sub,
            class: isActive ? "active" : "",
        };
    });
};
export const updateMenuItems = (
    items: MenuItem[],
    activeSection: string,
    currentRoute: string
): MenuItem[] => {
    const activeHash = normalizeHashId(activeSection);
    return items.map((item) => {
        const isMainActive = isMainItemActive(item.path, currentRoute);
        return {
            ...item,
            class: isMainActive ? "active" : "",
            subItems: item.subItems
                ? updateSubItems(item.subItems, activeHash, isMainActive)
                : undefined,
        };
    });
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
    const updatedMenu = {
        mainLink: updateMenuItems(mainLink || [], activeSection, currentRoute),
        reservation: updateMenuItems(
            reservation || [],
            activeSection,
            currentRoute
        ),
        search: updateMenuItems(search || [], activeSection, currentRoute),
        connection: updateMenuItems(
            connection || [],
            activeSection,
            currentRoute
        )
    };

    return updatedMenu;
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
