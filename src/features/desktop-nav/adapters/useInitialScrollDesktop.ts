"use client";

import { useEffect } from "react";
import { scrollToHashWhenReady } from "@/features/desktop-nav/core/navigation/utils/fnScrollUtils";
import { resetDesktopMenuClasses } from "@/features/desktop-nav/adapters/resetDesktopMenuClasses";

export const useInitialScrollDesktop = (pathname: string | null) => {
    useEffect(() => {
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

        resetDesktopMenuClasses();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [pathname]);
};
