"use client";

import { memo } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import type { MenuItem } from "@/features/mobile-nav/types/menu";
import { useNavigation } from "@/features/navigation/core/context/NavigationContext";

interface DesktopSubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const AdaptableDesktopSubMenu = ({ menuItem, isOpen, onSubItemClick }: DesktopSubMenuProps) => {
    const { setOpenSubMenu } = useNavigation();

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    const handleSubItemClick = (
        path: string,
        event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        onSubItemClick(path);
        setOpenSubMenu(null);
    };

    const handleKeyDown = (path: string, event: KeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSubItemClick(path);
            setOpenSubMenu(null);
        }
    };

    return (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {menuItem.subItems.map((subItem) => {
                    const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                    return (
                        <a
                            key={subItem.id}
                            aria-label={`Section ${subItem.title}`}
                            href={fullPath}
                            className={`nav-link ${subItem.class}`}
                            tabIndex={0}
                            onClick={(event) => handleSubItemClick(fullPath, event)}
                            onKeyDown={(event) => handleKeyDown(fullPath, event)}
                        >
                            {subItem.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default memo(AdaptableDesktopSubMenu);
