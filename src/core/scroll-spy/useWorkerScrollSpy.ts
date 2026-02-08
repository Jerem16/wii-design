"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createScrollSpyWorker } from "./createScrollSpyWorker";
import { measureSections } from "./measureSections";
import { rafThrottle } from "./rafThrottle";
import { readOffsetPxFromCssVar } from "./readOffsetFromCss";
import type { CssVarName, HashId, SectionMetrics } from "./types";

type Params = {
    sectionIds: readonly HashId[];
    thresholdPx: number;
    isEnabled?: boolean;
    offsetCssVarName?: CssVarName;
    offsetFallbackPx?: number;
    offsetScopeSelector?: string;
};

const computeActiveId = (
    sections: readonly SectionMetrics[],
    scrollY: number,
    thresholdPx: number
): HashId | undefined => {
    let activeId: HashId | undefined;
    sections.forEach(({ id, top, height }) => {
        const isInView = scrollY >= top - thresholdPx && scrollY < top + height;
        if (isInView) {
            activeId = id;
        }
    });
    return activeId;
};

export const useWorkerScrollSpy = ({
    sectionIds,
    thresholdPx,
    isEnabled = true,
    offsetCssVarName = "--scroll-spy-offset",
    offsetFallbackPx = 0,
    offsetScopeSelector,
}: Params): { activeId?: HashId; refresh: () => void } => {
    const [activeId, setActiveId] = useState<HashId | undefined>(undefined);
    const sectionsRef = useRef<readonly SectionMetrics[]>([]);
    const offsetRef = useRef<number>(offsetFallbackPx);
    const computeRef = useRef<(() => void) | null>(null);

    const refresh = useCallback(() => {
        if (typeof window === "undefined") return;
        if (!isEnabled) return;
        sectionsRef.current = measureSections(sectionIds);
        offsetRef.current = readOffsetPxFromCssVar({
            cssVarName: offsetCssVarName,
            fallbackPx: offsetFallbackPx,
            scopeSelector: offsetScopeSelector,
        });
        computeRef.current?.();
    }, [
        isEnabled,
        offsetCssVarName,
        offsetFallbackPx,
        offsetScopeSelector,
        sectionIds,
    ]);

    useEffect(() => {
        if (!isEnabled) return;
        if (typeof window === "undefined") return;

        sectionsRef.current = measureSections(sectionIds);
        offsetRef.current = readOffsetPxFromCssVar({
            cssVarName: offsetCssVarName,
            fallbackPx: offsetFallbackPx,
            scopeSelector: offsetScopeSelector,
        });

        const worker = createScrollSpyWorker(setActiveId);
        const workerBaseThresholdPx = 100;

        const runScroll = () => {
            const sections = sectionsRef.current;
            const effectiveScrollY = window.scrollY + offsetRef.current;
            if (worker) {
                const workerScrollY =
                    effectiveScrollY + thresholdPx - workerBaseThresholdPx;
                worker.post({
                    sections,
                    scrollY: workerScrollY,
                });
            } else {
                setActiveId(computeActiveId(sections, effectiveScrollY, thresholdPx));
            }
        };

        computeRef.current = runScroll;

        const handleResize = () => {
            sectionsRef.current = measureSections(sectionIds);
            offsetRef.current = readOffsetPxFromCssVar({
                cssVarName: offsetCssVarName,
                fallbackPx: offsetFallbackPx,
                scopeSelector: offsetScopeSelector,
            });
            runScroll();
        };

        const throttledScroll = rafThrottle(runScroll);
        const controller = new AbortController();

        runScroll();
        window.addEventListener("scroll", throttledScroll, {
            passive: true,
            signal: controller.signal,
        });
        window.addEventListener("resize", handleResize, {
            passive: true,
            signal: controller.signal,
        });

        return () => {
            controller.abort();
            const throttledWithCancel = throttledScroll as typeof throttledScroll & {
                cancel?: () => void;
            };
            throttledWithCancel.cancel?.();
            computeRef.current = null;
            worker?.dispose();
        };
    }, [
        isEnabled,
        offsetCssVarName,
        offsetFallbackPx,
        offsetScopeSelector,
        sectionIds,
        thresholdPx,
    ]);

    return { activeId, refresh };
};
