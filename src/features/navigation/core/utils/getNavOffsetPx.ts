import { rafThrottle } from "./rafThrottle";

const NAV_OFFSET_VAR = "--nav-offset";

let cachedOffset = 0;
let initialized = false;
let probeElement: HTMLDivElement | null = null;

const ensureProbeElement = (): HTMLDivElement => {
    if (probeElement) {
        return probeElement;
    }

    if (!document.body) {
        const fallback = document.createElement("div");
        fallback.style.position = "fixed";
        fallback.style.top = `var(${NAV_OFFSET_VAR})`;
        fallback.style.left = "0";
        fallback.style.width = "0";
        fallback.style.height = "0";
        fallback.style.pointerEvents = "none";
        fallback.style.visibility = "hidden";
        probeElement = fallback;
        return fallback;
    }

    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.top = `var(${NAV_OFFSET_VAR})`;
    element.style.left = "0";
    element.style.width = "0";
    element.style.height = "0";
    element.style.pointerEvents = "none";
    element.style.visibility = "hidden";
    document.body.appendChild(element);
    probeElement = element;
    return element;
};

const readOffsetValue = (): string => {
    const root = document.documentElement;
    if (!root) {
        return "";
    }
    return getComputedStyle(root).getPropertyValue(NAV_OFFSET_VAR).trim();
};

const calculateOffset = (): number => {
    const value = readOffsetValue();
    if (!value) {
        return 0;
    }

    if (/^-?\d+(\.\d+)?px$/.test(value)) {
        const parsed = Number.parseFloat(value);
        return Number.isNaN(parsed) ? 0 : parsed;
    }

    const probe = ensureProbeElement();
    const measured = probe.getBoundingClientRect().top;
    return Math.max(0, measured);
};

const updateOffset = (): void => {
    cachedOffset = calculateOffset();
};

const initOffsetTracking = (): void => {
    if (initialized || typeof window === "undefined") {
        return;
    }
    initialized = true;
    updateOffset();

    const throttledResize = rafThrottle(() => {
        updateOffset();
    });

    window.addEventListener("resize", throttledResize, { passive: true });
    window.addEventListener("orientationchange", throttledResize, { passive: true });
};

export const getNavOffsetPx = (): number => {
    if (typeof window === "undefined") {
        return 0;
    }
    initOffsetTracking();
    return cachedOffset;
};
