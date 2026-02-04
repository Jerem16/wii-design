"use client";
import { useEffect, useState } from "react";

export const useMobileBreakpoint = (maxWidth = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);

        const onChange = (ev: MediaQueryListEvent) => setIsMobile(ev.matches);

        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [maxWidth]);

    return isMobile;
};
