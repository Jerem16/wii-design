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

const DESKTOP_NAV_DEBUG = false;
const logDesktopNav = (...args: unknown[]) => {
    if (DESKTOP_NAV_DEBUG) {
        // eslint-disable-next-line no-console
        console.log("[DesktopNav]", ...args);
    }
};

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
        logDesktopNav("useDesktopScrollAnchors.mount");
        return () => {
            logDesktopNav("useDesktopScrollAnchors.cleanup");
        };
    }, []);

    useEffect(() => {
        logDesktopNav("useDesktopScrollAnchors.measureSections", {
            count: sections.length,
            ids: sections.map(section => section.id),
        });
    }, [sections]);

    useEffect(() => {
        const normalizedId = activeId ? activeId.replace(/^#/, "") : "";
        logDesktopNav("useDesktopScrollAnchors.activeSection", {
            activeId,
            normalizedId,
            hash: window.location.hash,
        });
        setCurrentSectionId(normalizedId);
        if (normalizedId) {
            logDesktopNav("useDesktopScrollAnchors.syncHash", {
                previousHash: window.location.hash,
                nextHash: `#${normalizedId}`,
                skip: window.location.hash === `#${normalizedId}`,
            });
            addNewUrl(normalizedId);
        }
        updateSectionClasses(sections, setActiveSection);
    }, [activeId, sections, setActiveSection]);
};
