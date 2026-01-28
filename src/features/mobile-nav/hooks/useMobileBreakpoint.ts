"use client";
import { useEffect, useState } from "react";

export const useMobileBreakpoint = (maxWidth = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

        const update = (event: MediaQueryList | MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        update(mediaQuery);

        if ("addEventListener" in mediaQuery) {
            mediaQuery.addEventListener("change", update);
            return () => mediaQuery.removeEventListener("change", update);
        }

        mediaQuery.addListener(update);
        return () => mediaQuery.removeListener(update);
    }, [maxWidth]);

    return isMobile;
};
