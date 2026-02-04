import { useCallback } from "react";
import { handleScrollClick } from "../utils/scrollSmooth";
import { handleNavClick } from "../utils/nav";
import { getNavOffsetPx } from "../utils/getNavOffsetPx";

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

    const { smooth = true, offsetPx } = options;
    const resolvedOffset = typeof offsetPx === "number" ? offsetPx : getNavOffsetPx();
    const targetId = anchor.startsWith("#") ? anchor.slice(1) : anchor;
    const element = document.getElementById(targetId);
    if (!element) {
        return;
    }

    if (smooth) {
        handleScrollClick(targetId, resolvedOffset);
        return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - resolvedOffset;
    window.scrollTo({ top, behavior: "auto" });
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
