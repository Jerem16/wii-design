"use client";

import { memo } from "react";
import Link from "next/link";
import type { SubItem } from "@/features/mobile-nav/types/menu";

interface DesktopSubMenuProps {
    id: string;
    parentPath: string;
    subItems: SubItem[];
    isOpen: boolean;
    activeHash: string;
    onSubItemClick: () => void;
}

const getSubItemHref = (parentPath: string, subItem: SubItem): string => {
    const maybeSubItemWithPath = subItem as SubItem & { path?: string };
    const basePath = maybeSubItemWithPath.path ?? parentPath;
    const anchor = subItem.AnchorId ?? "";
    return `${basePath}${anchor}`;
};

const DesktopSubMenu = ({
    id,
    parentPath,
    subItems,
    isOpen,
    activeHash,
    onSubItemClick,
}: DesktopSubMenuProps) => {
    if (!subItems.length) return null;

    return (
        <div id={id} className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {subItems.map((subItem) => {
                    const isActive = activeHash === subItem.AnchorId;
                    return (
                        <Link
                            key={subItem.id}
                            href={getSubItemHref(parentPath, subItem)}
                            className={`nav-link ${isActive ? "active" : ""}`}
                            onClick={onSubItemClick}
                        >
                            {subItem.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default memo(DesktopSubMenu);
