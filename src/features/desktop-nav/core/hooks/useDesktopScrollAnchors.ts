"use client";

import { useEffect } from "react";
import { useScrollContext } from "../context/ScrollContext";
import {
    addNewUrl,
    updateSectionClasses,
    scrollInView,
    currentSectionId
} from "../../../mobile-nav/core/utils/sections";

export const useDesktopScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();
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
