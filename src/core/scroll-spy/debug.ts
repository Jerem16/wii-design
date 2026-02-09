export type DebugPayload = Record<string, unknown>;

const logTimestamps = new Map<string, number>();

export const isDebug = (): boolean => {
    if (typeof window === "undefined") return false;
    try {
        return window.localStorage.getItem("DEBUG_SCROLL_SPY") === "1";
    } catch {
        return false;
    }
};

export const isScrollSpyDebugEnabled = isDebug;

export const dbg = (event: string, data?: DebugPayload): void => {
    if (!isDebug()) return;
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
