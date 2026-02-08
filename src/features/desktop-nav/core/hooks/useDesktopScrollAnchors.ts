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
        () => sections.map(({ id }) => `#${id}` as HashId),
        [sections]
    );
    const { activeId } = useWorkerScrollSpy({
        sectionIds,
        thresholdPx: 100,
        isEnabled: true,
        offsetCssVarName: "--scroll-spy-offset",
    });

    useEffect(() => {
        const nextId = activeId ? activeId.replace(/^#/, "") : "";
        setCurrentSectionId(nextId);
        addNewUrl(nextId);
        updateSectionClasses(sections, setActiveSection);
    }, [activeId, sections, setActiveSection]);
};
