"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createScrollSpyWorker } from "./createScrollSpyWorker";
import { measureSections } from "./measureSections";
import { rafThrottle } from "./rafThrottle";
import type { HashId, ScrollSpyWorkerIn, SectionMetrics } from "./types";

type RafThrottled<T extends (...args: never[]) => void> = T & {
    cancel?: () => void;
};

const getActiveSectionId = (
    sections: readonly SectionMetrics[],
    scrollY: number,
    thresholdPx: number
): HashId | undefined => {
    let activeId: HashId | undefined;
    sections.forEach((section) => {
        const isInView =
            scrollY >= section.top - thresholdPx &&
            scrollY < section.top + section.height;
        if (isInView) {
            activeId = section.id;
        }
    });
    return activeId;
};

export function useWorkerScrollSpy(params: {
    sectionIds: readonly HashId[];
    thresholdPx: number;
    isEnabled?: boolean;
}): { activeId?: HashId; refresh: () => void } {
    const { sectionIds, thresholdPx, isEnabled = true } = params;
    const [activeId, setActiveId] = useState<HashId | undefined>(undefined);
    const sectionsRef = useRef<readonly SectionMetrics[]>([]);
    const workerRef = useRef<ReturnType<typeof createScrollSpyWorker> | null>(null);

    const refresh = useCallback(() => {
        sectionsRef.current = measureSections(sectionIds);
    }, [sectionIds]);

    const postScroll = useCallback(
        (scrollY: number) => {
            const sections = sectionsRef.current;
            if (sections.length === 0) return;
            const worker = workerRef.current;
            const input: ScrollSpyWorkerIn = {
                sections,
                scrollY,
                thresholdPx,
            };
            if (worker) {
                worker.post(input);
                return;
            }

            const fallbackActive = getActiveSectionId(sections, scrollY, thresholdPx);
            setActiveId(fallbackActive);
        },
        [thresholdPx]
    );

    useEffect(() => {
        if (!isEnabled) return;
        refresh();
    }, [isEnabled, refresh]);

    useEffect(() => {
        if (!isEnabled) return;
        if (typeof window === "undefined") return;

        const worker = createScrollSpyWorker((id) => {
            setActiveId(id);
        });

        workerRef.current = worker;

        const handleScroll = rafThrottle(() => {
            postScroll(window.scrollY);
        });

        const handleResize = () => {
            refresh();
            postScroll(window.scrollY);
        };

        handleResize();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            (handleScroll as RafThrottled<() => void>).cancel?.();
            worker?.dispose();
            workerRef.current = null;
        };
    }, [isEnabled, postScroll, refresh]);

    return useMemo(
        () => ({
            activeId,
            refresh,
        }),
        [activeId, refresh]
    );
}
