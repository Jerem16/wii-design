import { useMemo, memo } from "react";
import type { MenuItem } from "../data/menuItems";
import NavLink from "./NavLink";

interface MenuListProps {
    menuItems: MenuItem[];
    openSubMenu: string | null;
    onNavigationClick: (path: string) => void;
    handleMenuClick: (menuItemId: string) => void;
}

const MenuList = ({
    menuItems,
    openSubMenu,
    onNavigationClick,
    handleMenuClick,
}: MenuListProps) => {
    const renderedMenuItems = useMemo(
        () =>
            menuItems.map((menuItem) => (
                <NavLink
                    key={menuItem.id}
                    menuItem={menuItem}
                    onNavigationClick={onNavigationClick}
                    isOpen={openSubMenu === menuItem.id}
                    handleMenuClick={handleMenuClick}
                />
            )),
        [menuItems, openSubMenu, onNavigationClick, handleMenuClick]
    );

    return (
        <nav className="mnav__nav" id="main-nav">
            {renderedMenuItems}
        </nav>
    );
};

export default memo(MenuList);
