import type {
    MenuLinks,
    MenuItem,
    SubItem,
} from "@/features/desktop-nav/data/interfaces/menu";
import { menuItems } from "@/features/desktop-nav/data/menuItems";
import type {
    MenuItem as DesktopMenuItem,
    MenuLinks as DesktopMenuLinks,
    SubItem as DesktopSubItem,
} from "@/features/desktop-nav/data/interfaces/menu";

const mapSubItem = (subItem: DesktopSubItem): SubItem => {
    return {
        id: subItem.id,
        title: subItem.title,
        AnchorId: subItem.AnchorId,
        class: subItem.class ?? "",
    };
};

const mapMenuItem = (item: DesktopMenuItem): MenuItem => {
    return {
        id: item.id,
        title: item.title,
        class: item.class ?? "",
        path: item.path,
        svg: item.svg,
        AnchorId: item.AnchorId,
        subItems: item.subItems?.map(mapSubItem),
    };
};

const mapMenuLinks = (items: DesktopMenuLinks): MenuLinks => {
    return {
        mainLink: items.mainLink.map(mapMenuItem),
        reservation: items.reservation?.map(mapMenuItem) ?? [],
        search: items.search?.map(mapMenuItem) ?? [],
        connection: items.connection?.map(mapMenuItem) ?? [],
    };
};

export const adaptableMenuData = mapMenuLinks(menuItems);
