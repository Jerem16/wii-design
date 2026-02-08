import type { HashId, SectionMetrics } from "./types";

export function measureSections(ids: readonly HashId[]): readonly SectionMetrics[] {
    if (typeof window === "undefined") return [];

    return ids
        .map((hashId) => {
            const id = hashId.replace(/^#/, "");
            const element = document.getElementById(id);
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            return {
                id: hashId,
                top: rect.top + window.scrollY,
                height: rect.height,
            };
        })
        .filter((section): section is SectionMetrics => section !== null);
}
