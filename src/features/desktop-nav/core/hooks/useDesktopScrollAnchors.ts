"use client";

import { useEffect, useMemo } from "react";
import { useWorkerScrollSpy } from "@/core/scroll-spy/useWorkerScrollSpy";
import type { HashId } from "@/core/scroll-spy/types";
import { useScrollContext } from "../context/ScrollContext";
import {
    addNewUrl,
    updateSectionClasses,
    setCurrentSectionId,
} from "../utils/fnScrollUtils";

export const useDesktopScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();
    const sectionIds = useMemo<readonly HashId[]>(
        () =>
            sections.map(({ id }) => {
                const normalizedId = id.replace(/^#/, "");
                return `#${normalizedId}` as HashId;
            }),
        [sections]
    );
    const { activeId } = useWorkerScrollSpy({
        sectionIds,
        thresholdPx: 100,
        isEnabled: true,
    });

    useEffect(() => {
        const normalizedId = activeId ? activeId.replace(/^#/, "") : "";
        setCurrentSectionId(normalizedId);
        if (normalizedId) {
            addNewUrl(normalizedId);
        }
        updateSectionClasses(sections, setActiveSection);
    }, [activeId, sections, setActiveSection]);
};
