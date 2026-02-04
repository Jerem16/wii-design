"use client";

import { useMemo, memo } from "react";
import type { MenuItem } from "../data/menuItems";
import { useNavigation } from "@utils/navigation/core/context/NavigationContext";
import { makePayloadClickHandler, makeActivationHandler } from "@utils/navigation/core/utils/handlers";

interface SubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const SubMenu = ({ menuItem, isOpen, onSubItemClick }: SubMenuProps) => {
    const { closeHamburgerMenu } = useNavigation();

    const handleSubItemClick = useMemo(
        () =>
            makePayloadClickHandler<string>(onSubItemClick, {
                close: closeHamburgerMenu,
                delay: 650,
            }),
        [onSubItemClick, closeHamburgerMenu]
    );

    const handleKeyDown = useMemo(
        () => makeActivationHandler<string>(onSubItemClick),
        [onSubItemClick]
    );

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div className={`mnav__submenu ${isOpen ? "open" : ""}`} id={`submenu-${menuItem.id}`}>
            <div className="mnav__submenu-group">
                {isOpen &&
                    menuItem.subItems.map((subItem) => {
                        const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                        return (
                            <a
                                key={subItem.id}
                                aria-label={`Section ${subItem.title}`}
                                href={fullPath}
                                className={`mnav__sublink ${subItem.class}`}
                                tabIndex={0}
                                onClick={(e) => handleSubItemClick(fullPath, e)}
                                onKeyDown={(e) => handleKeyDown(fullPath, e)}
                            >
                                {subItem.title}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default memo(SubMenu);
