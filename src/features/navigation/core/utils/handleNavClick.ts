import type { MouseEvent } from "react";
import { scrollToAnchor } from "../hooks/useSmoothScroll";

type HandleNavClickOptions = {
    enableAnchors?: boolean;
    smooth?: boolean;
    offsetPx?: number;
};

type HandleNavClickMeta = {
    label?: string;
    desktopAnchorMap?: Record<string, string>;
};

type ParsedHref = {
    pathname: string;
    hash: string | undefined;
};

const parseHref = (href: string): ParsedHref => {
    if (href.startsWith("#")) {
        return { pathname: window.location.pathname, hash: href.slice(1) };
    }

    try {
        const url = new URL(href, window.location.origin);
        const hash = url.hash ? url.hash.slice(1) : undefined;
        return { pathname: url.pathname, hash };
    } catch {
        return { pathname: href, hash: undefined };
    }
};

export const handleNavClick = (
    href: string,
    event: MouseEvent<HTMLElement>,
    options: HandleNavClickOptions = {},
    meta: HandleNavClickMeta = {}
): void => {
    if (typeof window === "undefined") {
        return;
    }

    const { enableAnchors = true, smooth = true, offsetPx } = options;
    if (!enableAnchors) {
        return;
    }

    const currentPath = window.location.pathname;
    const mappedAnchor =
        currentPath === "/" && meta.label && meta.desktopAnchorMap
            ? meta.desktopAnchorMap[meta.label]
            : undefined;

    if (mappedAnchor) {
        event.preventDefault();
        scrollToAnchor(mappedAnchor, { smooth, offsetPx });
        return;
    }

    const { pathname: targetPath, hash } = parseHref(href);
    if (!hash) {
        return;
    }

    if (currentPath !== targetPath) {
        return;
    }

    event.preventDefault();
    scrollToAnchor(hash, { smooth, offsetPx });
};
