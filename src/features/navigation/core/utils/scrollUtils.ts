"use client";
import { useEffect } from "react";
import { scrollToAnchor } from "../hooks/useSmoothScroll";
import { getNavOffsetPx } from "./getNavOffsetPx";

export const useInitialScroll = (pathname: string | null) => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            const targetId = window.location.hash.substring(1);
            const scrollWithOffset = () => {
                scrollToAnchor(targetId, { smooth: true, offsetPx: getNavOffsetPx() });
            };
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(scrollWithOffset);
            });
        }
    }, [pathname]);
};
