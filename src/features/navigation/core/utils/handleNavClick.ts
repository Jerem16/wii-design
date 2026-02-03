import type { MouseEvent } from "react";
import { scrollToAnchor } from "../hooks/useSmoothScroll";

type HandleNavClickOptions = {
    enableAnchors?: boolean;
    smooth?: boolean;
    offsetPx?: number;
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
    options: HandleNavClickOptions = {}
): void => {
    if (typeof window === "undefined") {
        return;
    }

    const { enableAnchors = true, smooth = true, offsetPx } = options;
    if (!enableAnchors) {
        return;
    }

    const { pathname: targetPath, hash } = parseHref(href);
    if (!hash) {
        return;
    }

    const currentPath = window.location.pathname;
    if (currentPath !== targetPath) {
        return;
    }

    event.preventDefault();
    scrollToAnchor(hash, { smooth, offsetPx });
};
