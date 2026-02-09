"use client";
import { useEffect } from "react";
import { scrollToHashWhenReady } from "./scrollSmooth";

export const useInitialScroll = (pathname: string | null) => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const runInitialHashScroll = () => {
            if (!window.location.hash) return;
            window.scrollTo({ top: 0 });
            scrollToHashWhenReady(window.location.hash);
        };

        const handleHashChange = () => {
            if (!window.location.hash) return;
            scrollToHashWhenReady(window.location.hash);
        };

        runInitialHashScroll();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [pathname]);
};
