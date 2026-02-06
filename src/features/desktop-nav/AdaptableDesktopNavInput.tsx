"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import type { MenuItem } from "@/features/desktop-nav/vendor/adaptable/assets/data/interfaces/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import useSearchHandler from "@/features/desktop-nav/vendor/adaptable/components/header/navInput/useSearchHandler";
import { getShowClass, getShowGroupClass } from "./menuClassUtils";

interface AdaptableDesktopNavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    showNavLinks: boolean;
    onMenuToggle: (menuItemId: string) => void;
    onMouseEnter: () => void;
    onFocus: () => void;
}

const AdaptableDesktopNavInput = ({
    menuItem,
    placeholder = "Rechercher...",
    showNavLinks,
    onMenuToggle,
    onMouseEnter,
    onFocus,
}: AdaptableDesktopNavInputProps) => {
    const router = useRouter();
    const {
        query,
        handleSearch,
        handleSubmit,
    } = useSearchHandler(router);
    const SvgIcon = svgComponents[menuItem.svg as keyof typeof svgComponents];

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
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
            >
                {showNavLinks ? (
                    <>
                        <button
                            type="submit"
                            className="nav-icon flx-c"
                            onClick={() => handleSubmit()}
                            aria-label="Valider la recherche"
                        >
                            {SvgIcon ? <SvgIcon /> : null}
                        </button>
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            placeholder={placeholder}
                            onChange={handleSearch}
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
