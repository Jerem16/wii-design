import type { MenuItem, MenuLinks } from "@/features/desktop-nav/data/interfaces/menu";
import { updateMenuClasses } from "@/features/desktop-nav/core/utils/updateMenuUtils";

export interface DesktopMenuLinks {
    mainLink: MenuItem[];
    reservation: MenuItem[];
    search: MenuItem[];
    connection: MenuItem[];
}

export const mapMenuForDesktop = (items: MenuLinks): DesktopMenuLinks => {
    return {
        mainLink: items.mainLink,
        reservation: items.reservation ?? [],
        search: items.search ?? [],
        connection: items.connection ?? [],
    };
};

export const updateDesktopMenuClasses = (
    menuLinks: DesktopMenuLinks,
    activeSection = "",
    currentRoute = ""
): DesktopMenuLinks => {
    return updateMenuClasses(
        menuLinks.mainLink,
        menuLinks.reservation,
        menuLinks.search,
        menuLinks.connection,
        activeSection,
        currentRoute
    );
};
