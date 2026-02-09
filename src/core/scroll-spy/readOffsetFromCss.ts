import type { CssVarName } from "./types";

const parsePositivePx = (value: string): number | null => {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const pxMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)px$/);
    if (pxMatch) {
        const numeric = Number(pxMatch[1]);
        return Number.isFinite(numeric) && numeric >= 0 ? numeric : null;
    }
    const numericMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)$/);
    if (numericMatch) {
        const numeric = Number(numericMatch[1]);
        return Number.isFinite(numeric) && numeric >= 0 ? numeric : null;
    }
    return null;
};

export const readOffsetPxFromCssVar = ({
    cssVarName,
    fallbackPx = 0,
    scopeSelector,
}: {
    cssVarName: CssVarName;
    fallbackPx?: number;
    scopeSelector?: string;
}): number => {
    if (typeof window === "undefined") return fallbackPx;

    const readFromElement = (element: Element | null): number | null => {
        if (!element) return null;
        const rawValue = getComputedStyle(element).getPropertyValue(cssVarName);
        return parsePositivePx(rawValue);
    };

    const scopedElement = scopeSelector
        ? document.querySelector(scopeSelector)
        : null;
    const scopedValue = readFromElement(scopedElement);
    if (scopedValue !== null) return scopedValue;
    if (cssVarName === "--scroll-spy-offset" && scopedElement) {
        const scopedFallback = parsePositivePx(
            getComputedStyle(scopedElement).getPropertyValue("--scroll-offset")
        );
        if (scopedFallback !== null) return scopedFallback;
    }

    const rootValue = readFromElement(document.documentElement);
    if (rootValue !== null) return rootValue;
    if (cssVarName === "--scroll-spy-offset") {
        const rootFallback = parsePositivePx(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--scroll-offset"
            )
        );
        if (rootFallback !== null) return rootFallback;
    }
    return fallbackPx;
};

export const readScrollOffsetPx = (): number =>
    readOffsetPxFromCssVar({
        cssVarName: "--scroll-offset",
        fallbackPx: 0,
    });
