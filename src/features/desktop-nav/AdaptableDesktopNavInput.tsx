"use client";

import { memo, useState } from "react";
import type { MenuItem } from "@/features/mobile-nav/types/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import { getShowClass, getShowGroupClass } from "./menuClassUtils";

interface AdaptableDesktopNavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    showNavLinks: boolean;
    onMenuToggle: (menuItemId: string) => void;
    onMouseEnter: () => void;
    onFocus: () => void;
    onNavigationClick: (path: string) => void;
}

const AdaptableDesktopNavInput = ({
    menuItem,
    placeholder = "Rechercher...",
    showNavLinks,
    onMenuToggle,
    onMouseEnter,
    onFocus,
    onNavigationClick,
}: AdaptableDesktopNavInputProps) => {
    const [query, setQuery] = useState("");
    const SvgIcon = svgComponents[menuItem.svg];

    const handleSubmit = (
        event?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
        event?.preventDefault();
        onNavigationClick(menuItem.path + (menuItem.AnchorId ?? ""));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onMenuToggle(menuItem.id);
        }
    };

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menuitem"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={() => onMenuToggle(menuItem.id)}
            onKeyDown={handleKeyDown}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            <form
                aria-label={`Page ${menuItem.title}`}
                className="head-link"
                onSubmit={handleSubmit}
            >
                {showNavLinks ? (
                    <>
                        <button
                            type="submit"
                            className="nav-icon flx-c"
                            onClick={handleSubmit}
                            aria-label="Valider la recherche"
                        >
                            {SvgIcon ? <SvgIcon /> : null}
                        </button>
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            placeholder={placeholder}
                            onChange={(event) => setQuery(event.target.value)}
                            onFocus={onFocus}
                            className={`nav-link ${getShowClass(showNavLinks)}`}
                        />
                    </>
                ) : (
                    SvgIcon ? <SvgIcon /> : null
                )}
            </form>
        </div>
    );
};

export default memo(AdaptableDesktopNavInput);
