"use client";

import { memo, useMemo } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import type { MenuItem } from "@/features/desktop-nav/data/interfaces/menu";
import { useNavigation } from "@/features/desktop-nav/core/context/NavigationContext";
import { makeInteractionHandlers } from "@/features/desktop-nav/core/utils/handlers";

interface DesktopSubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const AdaptableDesktopSubMenu = ({
    menuItem,
    isOpen,
    onSubItemClick,
}: DesktopSubMenuProps) => {
    const { setOpenSubMenu } = useNavigation();

    const interactionHandlers = useMemo(
        () =>
            makeInteractionHandlers<string>((path) => {
                onSubItemClick(path);
                setOpenSubMenu(null);
            }),
        [onSubItemClick, setOpenSubMenu]
    );

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

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
                            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onClick(fullPath, event)
                            }
                            onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onKeyDown(fullPath, event)
                            }
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
