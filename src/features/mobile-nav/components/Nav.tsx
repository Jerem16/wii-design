import { memo } from "react";
import type { MenuItem } from "../data/menuItems";
import ButtonOpen from "./ButtonOpen";
import MenuOpen from "./MenuOpen";

interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
}

const Nav = ({ menuItems, onNavigationClick }: NavProps) => {
    return (
        <>
            <ButtonOpen />
            <MenuOpen menuItems={menuItems} onNavigationClick={onNavigationClick} />
        </>
    );
};

export default memo(Nav);
