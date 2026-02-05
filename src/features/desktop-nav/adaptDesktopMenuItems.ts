import { menuItems } from "@/features/mobile-nav/data/menuItems";
import type { MenuItem } from "@/features/mobile-nav/types/menu";

export const adaptDesktopMenuItems = (
    source: ReadonlyArray<MenuItem>
): MenuItem[] => {
    return source.map((item) => ({
        ...item,
        subItems: item.subItems?.map((subItem) => ({ ...subItem })),
    }));
};

export const desktopMenuItems = adaptDesktopMenuItems(menuItems.mainLink);
