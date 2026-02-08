import type { HashId, SectionMetrics } from "./types";

export const measureSections = (
    ids: readonly HashId[]
): readonly SectionMetrics[] => {
    if (typeof window === "undefined") return [];

    return ids.flatMap((hashId) => {
        const id = hashId.replace(/^#/, "");
        const element = document.getElementById(id);
        if (!element) return [];
        const rect = element.getBoundingClientRect();
        return [
            {
                id: hashId,
                top: rect.top + window.scrollY,
                height: rect.height,
            },
        ];
    });
};
