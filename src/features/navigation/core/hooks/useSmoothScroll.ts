import { useCallback } from "react";
import { handleScrollClick } from "../utils/scrollSmooth";
import { handleNavClick } from "../utils/nav";

type ScrollToAnchorOptions = {
    smooth?: boolean;
    offsetPx?: number;
};

export const scrollToAnchor = (
    anchor: string,
    options: ScrollToAnchorOptions = {}
): void => {
    if (typeof window === "undefined") {
        return;
    }

    const { smooth = true, offsetPx = 0 } = options;
    const targetId = anchor.startsWith("#") ? anchor.slice(1) : anchor;
    const element = document.getElementById(targetId);
    if (!element) {
        return;
    }

    if (offsetPx !== 0) {
        const top = element.getBoundingClientRect().top + window.scrollY - offsetPx;
        window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
        return;
    }

    if (smooth) {
        handleScrollClick(targetId);
        return;
    }

    element.scrollIntoView({ behavior: "auto" });
};

export const useSmoothScroll = (
    currentRoute: string | undefined,
    updateRoute: (route: string) => void
) => {
    return useCallback(
        (path: string) => {
            handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
        },
        [currentRoute, updateRoute]
    );
};
