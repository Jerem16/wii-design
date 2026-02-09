export const readCssPx = (varName: string, el?: HTMLElement): number | null => {
    if (typeof window === "undefined") return null;
    const target = el ?? document.documentElement;
    const rawValue = getComputedStyle(target).getPropertyValue(varName).trim();
    if (!rawValue) return null;
    const numeric = parseFloat(rawValue);
    return Number.isNaN(numeric) ? null : numeric;
};

type CssVarDiagnostic = {
    valueRaw: string | null;
    valuePx: number | null;
};

type ScrollOffsetDiagnostics = {
    sourceVarName: string | null;
    valueRaw: string | null;
    valuePx: number | null;
    candidates: Record<string, CssVarDiagnostic>;
};

const isValidOffsetPx = (value: number | null): value is number =>
    value !== null && Number.isFinite(value) && value > 0;

const readCssVarRaw = (varName: string, el: HTMLElement): string | null => {
    const rawValue = getComputedStyle(el).getPropertyValue(varName).trim();
    return rawValue ? rawValue : null;
};

const readCssVarDiagnostic = (
    varName: string,
    el: HTMLElement
): CssVarDiagnostic => {
    const valueRaw = readCssVarRaw(varName, el);
    const valuePx = valueRaw ? readCssPx(varName, el) : null;
    return { valueRaw, valuePx };
};

export const readScrollOffsetDiagnostics = (): ScrollOffsetDiagnostics => {
    if (typeof window === "undefined") {
        return {
            sourceVarName: null,
            valueRaw: null,
            valuePx: null,
            candidates: {
                "--scroll-offset": { valueRaw: null, valuePx: null },
                "--scroll-spy-offset": { valueRaw: null, valuePx: null },
            },
        };
    }

    const target = document.documentElement;
    const candidates: Record<string, CssVarDiagnostic> = {
        "--scroll-offset": readCssVarDiagnostic("--scroll-offset", target),
        "--scroll-spy-offset": readCssVarDiagnostic(
            "--scroll-spy-offset",
            target
        ),
    };

    const preferred = isValidOffsetPx(candidates["--scroll-spy-offset"].valuePx)
        ? "--scroll-spy-offset"
        : isValidOffsetPx(candidates["--scroll-offset"].valuePx)
          ? "--scroll-offset"
          : null;

    return {
        sourceVarName: preferred,
        valueRaw: preferred ? candidates[preferred].valueRaw : null,
        valuePx: preferred ? candidates[preferred].valuePx : null,
        candidates,
    };
};
