"use client";

import { useEffect, useRef } from "react";
import { useScrollContext } from "../context/ScrollContext";
import { rafThrottle } from "../utils/rafThrottle";
import { createScrollSpy, type SectionRef } from "../utils/sections";

import type {
    ScrollWorkerData,
    ScrollWorkerResponse,
    SectionPosition,
} from "../../../../workers/scrollWorker";

export const useScrollAnchors = (_sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();

    const spyRef = useRef(createScrollSpy({ offset: 100 }));
    const sectionsRef = useRef<SectionRef[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const worker = new Worker(
            new URL("../../../../workers/scrollWorker.js", import.meta.url)
        );

        const handleScroll = () => {
            const nodes = Array.from(
                document.querySelectorAll<HTMLElement>("section[id]")
            );

            const currentSections: SectionRef[] = nodes.map((el) => ({
                id: el.id,
            }));

            sectionsRef.current = currentSections;

            const positions = currentSections.reduce<Record<string, SectionPosition>>(
                (acc, { id }) => {
                    const section = document.getElementById(id);
                    if (section) {
                        acc[id] = {
                            top: section.offsetTop,
                            height: section.offsetHeight,
                        };
                    }
                    return acc;
                },
                {}
            );

            const data: ScrollWorkerData = {
                sections: currentSections,
                scrollY: window.scrollY,
                positions,
            };

            worker.postMessage(data);
        };

        worker.onmessage = (event: MessageEvent<ScrollWorkerResponse>) => {
            const { currentSectionId } = event.data;

            // Synchroniser l'ID calculé par le worker dans le spy (pas de recalcul main-thread)
            spyRef.current.setCurrentSectionId(currentSectionId ?? null);

            // Appliquer URL + classes
            spyRef.current.addNewUrl();
            spyRef.current.updateSectionClasses(
                sectionsRef.current,
                setActiveSection
            );
        };

        const controller = new AbortController();
        const throttledScroll = rafThrottle(handleScroll);

        handleScroll();

        window.addEventListener("scroll", throttledScroll, {
            passive: true,
            signal: controller.signal,
        });

        return () => {
            controller.abort();
            throttledScroll.cancel();
            worker.terminate();
        };
    }, [setActiveSection]);
};
