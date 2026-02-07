import { useState, useCallback } from "react";
import { useSearch } from "../core/context/SearchContext";
import searchQuery from "../core/utils/searchMenu";
import { filterSuggestions, SearchItem } from "../core/utils/searchUtils";
import { useRouter } from "next/navigation";
import { useURLParams } from "../core/utils/useURLParams";

const useSearchHandler = (router: ReturnType<typeof useRouter>) => {
    const { menuData, setResults, query, setQuery } = useSearch();
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubResultOpen, setSubResultOpen] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [noResultsFound, setNoResultsFound] = useState(false);

    const { setParam, deleteParam } = useURLParams();

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery);

            if (newQuery.length < 3) {
                setSuggestions([]);
                setSubResultOpen(false);
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, newQuery);
                const uniqueSuggestions = filterSuggestions(
                    filteredMenu,
                    newQuery
                );
                setSuggestions(uniqueSuggestions);
                setSubResultOpen(uniqueSuggestions.length > 0);
            }
        },
        [menuData, setQuery]
    );

    const handleSubmit = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        e?:
            | React.FormEvent<HTMLFormElement>
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        const trimmedQuery = query.trim();
        if (trimmedQuery.length < 1) return;

        setIsSubmitted(true);

        if (menuData) {
            const resultsForQuery = searchQuery(menuData, trimmedQuery);
            setResults(resultsForQuery);

            if (resultsForQuery.length === 0) {
                router.push(
                    `/search?badKeyWord=${encodeURIComponent(trimmedQuery)}`
                );
            } else {
                router.push(
                    `/search?query=${encodeURIComponent(trimmedQuery)}`
                );
            }
        }

        setSubResultOpen(false);
    };

    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setIsSubmitted(true);
            setNoResultsFound(resultsForSuggestion.length === 0);

            if (resultsForSuggestion.length === 0) {
                setParam("badKeyWord", suggestion);
            } else {
                setParam("query", suggestion);
                router.push(`/search?query=${encodeURIComponent(suggestion)}`);
            }
        }
    };

    const handleReset = useCallback(() => {
        setQuery("");
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setIsSubmitted(false);
        deleteParam("query");
        deleteParam("badKeyWord");
    }, [setQuery, setResults, deleteParam]);

    return {
        query,
        suggestions,
        isSubmitted,
        isSubResultOpen,
        handleSearch,
        handleSubmit,
        handleReset,
        handleSuggestionClick,
    };
};

export default useSearchHandler;
