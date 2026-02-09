export type DebugPayload = Record<string, unknown>;

const logTimestamps = new Map<string, number>();

export const isScrollSpyDebugEnabled = (): boolean => {
    if (typeof window === "undefined") return false;
    try {
        if (window.localStorage.getItem("DEBUG_SCROLL_SPY") === "1") {
            return true;
        }
    } catch {
        return false;
    }
    const search = window.location?.search ?? "";
    return new URLSearchParams(search).get("debugScrollSpy") === "1";
};

export const dbg = (event: string, data?: DebugPayload): void => {
    if (!isScrollSpyDebugEnabled()) return;
    console.log("[SCROLL_SPY_DEBUG]", event, data ?? {});
};

export const shouldLogNow = (key: string, ms: number): boolean => {
    if (typeof window === "undefined") return false;
    const now = Date.now();
    const last = logTimestamps.get(key);
    if (last !== undefined && now - last < ms) return false;
    logTimestamps.set(key, now);
    return true;
};
