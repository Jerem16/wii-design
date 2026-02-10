import React from "react";
import SearchPageContent from "./SearchPageContent"; // Déplacez votre composant logique dans un fichier séparé.
import { Metadata } from "next";
import { SearchProvider } from "@/features/desktop-nav/core/search/context/SearchContext";
export const metadata: Metadata = {
    title: "Recherche",
};
export default function Page() {
    return (
        <SearchProvider>
            <SearchPageContent />
        </SearchProvider>
    );
}
