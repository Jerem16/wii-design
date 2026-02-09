"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createScrollSpyWorker } from "./createScrollSpyWorker";
import { measureSections } from "./measureSections";
import { rafThrottle } from "./rafThrottle";
import { readOffsetPxFromCssVar } from "./readOffsetFromCss";
import {
    dbg,
    isScrollSpyDebugEnabled,
    shouldLogNow,
} from "./debug";
import { readScrollOffsetDiagnostics } from "./readCssPx";
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
    offsetCssVarName = "--scroll-offset",
    offsetFallbackPx = 0,
    offsetScopeSelector,
}: Params): { activeId?: HashId; refresh: () => void } => {
    const [activeId, setActiveId] = useState<HashId | undefined>(undefined);
    const sectionsRef = useRef<readonly SectionMetrics[]>([]);
    const offsetPxRef = useRef<number>(offsetFallbackPx);
    const computeRef = useRef<(() => void) | null>(null);
    const activeIdRef = useRef<HashId | undefined>(undefined);
    const protocolLoggedRef = useRef(false);
    const offsetLoggedRef = useRef(false);

    const refresh = useCallback(() => {
        if (typeof window === "undefined") return;
        if (!isEnabled) return;
        sectionsRef.current = measureSections(sectionIds);
        offsetPxRef.current = readOffsetPxFromCssVar({
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

        const debugEnabled = isScrollSpyDebugEnabled();

        sectionsRef.current = measureSections(sectionIds);
        offsetPxRef.current = readOffsetPxFromCssVar({
            cssVarName: offsetCssVarName,
            fallbackPx: offsetFallbackPx,
            scopeSelector: offsetScopeSelector,
        });

        if (debugEnabled) {
            dbg("offset:css-vars", {
                ...readScrollOffsetDiagnostics(),
                pathname: window.location.pathname,
                reason: "mount",
            });
        }
        if (debugEnabled && !offsetLoggedRef.current) {
            offsetLoggedRef.current = true;
            const scrollOffsetRaw = getComputedStyle(
                document.documentElement
            )
                .getPropertyValue("--scroll-offset")
                .trim();
            const scrollSpyOffsetRaw = getComputedStyle(
                document.documentElement
            )
                .getPropertyValue("--scroll-spy-offset")
                .trim();
            const scrollOffsetPx = parseFloat(scrollOffsetRaw);
            const scrollSpyOffsetPx = parseFloat(scrollSpyOffsetRaw);
            dbg("offset:mount", {
                scrollOffset: {
                    raw: scrollOffsetRaw,
                    px: Number.isNaN(scrollOffsetPx) ? null : scrollOffsetPx,
                },
                scrollSpyOffset: {
                    raw: scrollSpyOffsetRaw,
                    px: Number.isNaN(scrollSpyOffsetPx)
                        ? null
                        : scrollSpyOffsetPx,
                },
                offsetPxUsed: offsetPxRef.current,
            });
        }

        if (debugEnabled && !protocolLoggedRef.current) {
            protocolLoggedRef.current = true;
            dbg("worker:protocol", {
                inKeys: ["sections", "scrollY"],
                workerMessageKeys: ["sections", "scrollY", "positions"],
                outKeys: ["currentSectionId"],
            });
        }

        const handleActiveChange = (nextId?: HashId, source?: string) => {
            const previousActiveId = activeIdRef.current;
            activeIdRef.current = nextId;
            if (
                source === "worker" &&
                debugEnabled &&
                previousActiveId !== nextId &&
                shouldLogNow("worker:output", 200)
            ) {
                dbg("worker:output", {
                    source,
                    workerOut: {
                        keys: ["currentSectionId", "activeId"],
                        currentSectionId: nextId ?? null,
                        activeId: nextId ?? null,
                    },
                    normalizedActiveId: nextId ?? null,
                    previousActiveId: previousActiveId ?? null,
                });
            }
            setActiveId(nextId);
        };

        const worker = createScrollSpyWorker((nextId) =>
            handleActiveChange(nextId, "worker")
        );
        const workerBaseThresholdPx = 100;

        const runScroll = () => {
            const sections = sectionsRef.current;
            const rawScrollY = window.scrollY;
            const offsetPx = offsetPxRef.current;
            const effectiveScrollY = rawScrollY + offsetPx;
            const workerScrollY =
                effectiveScrollY + thresholdPx - workerBaseThresholdPx;

            if (debugEnabled && shouldLogNow("scroll:input", 300)) {
                const firstSection = sections[0];
                const lastSection = sections[sections.length - 1];
                const samples = [firstSection, lastSection]
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((section) => ({
                        id: section?.id,
                        top: section?.top,
                        height: section?.height,
                    }));
                dbg("scroll:input", {
                    rawScrollY,
                    offsetPx,
                    offsetPxUsed: offsetPx,
                    thresholdPx,
                    effectiveScrollY,
                    workerInputKeys: Object.keys({
                        sections,
                        scrollY: workerScrollY,
                    }),
                    sectionsCount: sections.length,
                    firstSectionTop: firstSection?.top ?? null,
                    lastSectionTop: lastSection?.top ?? null,
                    scrollInputSent: {
                        sectionsCount: sections.length,
                        samples,
                        scrollY: workerScrollY,
                    },
                });
            }
            if (worker) {
                worker.post({
                    sections,
                    scrollY: workerScrollY,
                });
            } else {
                handleActiveChange(
                    computeActiveId(sections, effectiveScrollY, thresholdPx),
                    "sync"
                );
            }
        };

        computeRef.current = runScroll;

        const handleResize = () => {
            sectionsRef.current = measureSections(sectionIds);
            offsetPxRef.current = readOffsetPxFromCssVar({
                cssVarName: offsetCssVarName,
                fallbackPx: offsetFallbackPx,
                scopeSelector: offsetScopeSelector,
            });
            if (debugEnabled && shouldLogNow("offset:css-vars", 500)) {
                dbg("offset:css-vars", {
                    ...readScrollOffsetDiagnostics(),
                    pathname: window.location.pathname,
                    reason: "resize",
                });
            }
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
