import { dbg, isScrollSpyDebugEnabled, shouldLogNow } from "./debug";
import type { CssVarName } from "./types";

const parsePositivePx = (value: string): number | null => {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const pxMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)px$/);
    if (pxMatch) {
        const numeric = Number(pxMatch[1]);
        return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
    }
    const numericMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)$/);
    if (numericMatch) {
        const numeric = Number(numericMatch[1]);
        return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
    }
    return null;
};

type OffsetCandidate = {
    valueRaw: string | null;
    valuePx: number | null;
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

    const readCandidate = (
        element: Element | null,
        varName: CssVarName
    ): OffsetCandidate => {
        if (!element) return { valueRaw: null, valuePx: null };
        const rawValue = getComputedStyle(element).getPropertyValue(varName);
        const trimmed = rawValue.trim();
        return {
            valueRaw: trimmed || null,
            valuePx: parsePositivePx(rawValue),
        };
    };

    const scopedElement = scopeSelector
        ? document.querySelector(scopeSelector)
        : null;
    const scopedPrimary = readCandidate(scopedElement, cssVarName);
    const scopedFallback =
        cssVarName === "--scroll-spy-offset"
            ? readCandidate(scopedElement, "--scroll-offset")
            : { valueRaw: null, valuePx: null };

    const rootElement = document.documentElement;
    const rootPrimary = readCandidate(rootElement, cssVarName);
    const rootFallback =
        cssVarName === "--scroll-spy-offset"
            ? readCandidate(rootElement, "--scroll-offset")
            : { valueRaw: null, valuePx: null };

    let sourceVarNameUsed: CssVarName | null = null;
    let valueRawUsed: string | null = null;
    let valuePxUsed: number | null = null;
    let reason = "fallbackPx";

    if (scopedPrimary.valuePx !== null) {
        sourceVarNameUsed = cssVarName;
        valueRawUsed = scopedPrimary.valueRaw;
        valuePxUsed = scopedPrimary.valuePx;
        reason = "scoped:valid";
    } else if (
        cssVarName === "--scroll-spy-offset" &&
        scopedFallback.valuePx !== null
    ) {
        sourceVarNameUsed = "--scroll-offset";
        valueRawUsed = scopedFallback.valueRaw;
        valuePxUsed = scopedFallback.valuePx;
        reason = "scoped:fallback-valid";
    } else if (rootPrimary.valuePx !== null) {
        sourceVarNameUsed = cssVarName;
        valueRawUsed = rootPrimary.valueRaw;
        valuePxUsed = rootPrimary.valuePx;
        reason = "root:valid";
    } else if (
        cssVarName === "--scroll-spy-offset" &&
        rootFallback.valuePx !== null
    ) {
        sourceVarNameUsed = "--scroll-offset";
        valueRawUsed = rootFallback.valueRaw;
        valuePxUsed = rootFallback.valuePx;
        reason = "root:fallback-valid";
    }

    if (isScrollSpyDebugEnabled() && shouldLogNow("offset:selection", 500)) {
        dbg("offset:selection", {
            cssVarNameRequested: cssVarName,
            scopeSelector: scopeSelector ?? null,
            sourceVarNameUsed,
            valueRawUsed,
            valuePxUsed,
            reason,
            candidates: {
                scoped: {
                    [cssVarName]: scopedPrimary,
                    "--scroll-offset": scopedFallback,
                },
                root: {
                    [cssVarName]: rootPrimary,
                    "--scroll-offset": rootFallback,
                },
            },
        });
    }

    return valuePxUsed ?? fallbackPx;
};

export const readScrollOffsetPx = (): number =>
    readOffsetPxFromCssVar({
        cssVarName: "--scroll-offset",
        fallbackPx: 0,
    });
