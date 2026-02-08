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
}: {
    cssVarName: CssVarName;
    fallbackPx?: number;
}): number => {
    if (typeof window === "undefined") return fallbackPx;

    const rawValue = getComputedStyle(document.documentElement).getPropertyValue(
        cssVarName
    );
    const parsed = parsePositivePx(rawValue);
    return parsed ?? fallbackPx;
};
