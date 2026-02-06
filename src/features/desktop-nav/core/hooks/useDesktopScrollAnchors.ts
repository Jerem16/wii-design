"use client";

import { useEffect } from "react";
import { useDesktopScrollContext } from "../context/DesktopScrollContext";
import {
    addNewUrl,
    updateSectionClasses,
    scrollInView,
    currentSectionId,
} from "../utils/fnScrollUtils";

export const useDesktopScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useDesktopScrollContext();
    useEffect(() => {
        const handleScroll = () => {
            scrollInView(sections);
            addNewUrl(currentSectionId);
            updateSectionClasses(sections, setActiveSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections, setActiveSection]);
};
