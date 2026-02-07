"use client";

import { memo, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import type { MenuItem } from "@/features/desktop-nav/data/interfaces/menu";
import { svgComponents } from "@/features/mobile-nav/components/svgComponents";
import useSearchHandler from "@/features/desktop-nav/hooks/useSearchHandler";
import { useSearch } from "@/features/desktop-nav/core/context/SearchContext";
import searchQuery from "@/features/desktop-nav/core/utils/searchMenu";
import { getShowClass, getShowGroupClass } from "./menuClassUtils";

interface AdaptableDesktopNavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    showNavLinks: boolean;
    onMenuToggle: (menuItemId: string) => void;
    onMouseEnter: () => void;
    onFocus: () => void;
}

interface LiveResult {
    path?: string;
    text: string;
    go?: string;
    slideRef?: number;
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
    const { menuData } = useSearch();
    const listboxId = "search-subresults";
    const {
        query,
        handleSearch,
        handleSubmit,
        isSubResultOpen,
    } = useSearchHandler(router);
    const SvgIcon = svgComponents[menuItem.svg as keyof typeof svgComponents];
    const [isInputFocused, setIsInputFocused] = useState(false);
    const blurTimeoutRef = useRef<number | null>(null);

    const liveResults = useMemo<LiveResult[]>(() => {
        const trimmedQuery = query.trim();
        if (!menuData || trimmedQuery.length === 0) {
            return [];
        }
        return searchQuery(menuData, trimmedQuery);
    }, [menuData, query]);

    const uniqueResults = useMemo(() => {
        return liveResults.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (current) =>
                        current.path === result.path &&
                        current.text.trim() === result.text.trim()
                )
        );
    }, [liveResults]);

    const displayedResults = uniqueResults.slice(0, 8);
    const shouldShowSubResults =
        showNavLinks &&
        query.trim().length > 0 &&
        isInputFocused &&
        (isSubResultOpen || displayedResults.length > 0);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onMenuToggle(menuItem.id);
        }
    };

    const clearBlurTimeout = () => {
        if (blurTimeoutRef.current) {
            window.clearTimeout(blurTimeoutRef.current);
            blurTimeoutRef.current = null;
        }
    };

    const handleInputFocus = () => {
        clearBlurTimeout();
        setIsInputFocused(true);
        onFocus();
    };

    const handleInputBlur = () => {
        clearBlurTimeout();
        blurTimeoutRef.current = window.setTimeout(() => {
            setIsInputFocused(false);
        }, 150);
    };

    const buildResultHref = (result: LiveResult) => {
        if (!result.path) return "";
        if (!result.go) return result.path;
        if (result.path.includes("#")) {
            const [basePath, hash] = result.path.split("#");
            const goValue = result.go.startsWith("?")
                ? result.go
                : `?${result.go}`;
            return `${basePath}${goValue}#${hash}`;
        }
        return `${result.path}${result.go}`;
    };

    const handleResultNavigation = (result: LiveResult) => {
        const href = buildResultHref(result);
        if (!href) return;
        setIsInputFocused(false);
        router.push(href);
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            event.preventDefault();
            setIsInputFocused(false);
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
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onKeyDown={handleInputKeyDown}
                            className={`nav-link ${getShowClass(showNavLinks)}`}
                            role="combobox"
                            aria-expanded={shouldShowSubResults}
                            aria-controls={listboxId}
                            aria-haspopup="listbox"
                        />
                        {shouldShowSubResults ? (
                            <div
                                className="submenu open"
                                role="listbox"
                                aria-label="Résultats de recherche"
                                id={listboxId}
                            >
                                <div className="submenu_group">
                                    {displayedResults.map((result) => (
                                        <button
                                            key={`${result.path}-${result.text}`}
                                            type="button"
                                            role="option"
                                            aria-selected={false}
                                            className="nav-link"
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                                handleResultNavigation(result);
                                            }}
                                            onClick={() =>
                                                handleResultNavigation(result)
                                            }
                                        >
                                            {result.text}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={false}
                                        className="nav-link"
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            handleSubmit();
                                        }}
                                        onClick={() => handleSubmit()}
                                    >
                                        Voir tous les résultats
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </>
                ) : (
                    SvgIcon ? <SvgIcon /> : null
                )}
            </form>
        </div>
    );
};

export default memo(AdaptableDesktopNavInput);
