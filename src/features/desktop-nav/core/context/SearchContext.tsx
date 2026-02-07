"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
} from "react";
import { initializeMenuWithContent } from "../utils/initializeMenu";
import { MenuLinks } from "../../data/interfaces/menu";

interface Result {
    path: string;
    text: string;
    go: string;
    slideRef: number;
}

interface SearchContextType {
    results: Result[];
    setResults: (results: Result[]) => void;
    menuData: MenuLinks | null;
    query: string;
    setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [results, setResults] = useState<Result[]>([]);
    const [menuData, setMenuData] = useState<MenuLinks | null>(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const data = initializeMenuWithContent();
        setMenuData(data);
    }, []);

    const contextValue: SearchContextType = useMemo(
        () => ({ results, setResults, menuData, query, setQuery }),
        [results, setResults, menuData, query]
    );

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
