"use client";

import { useEffect, useRef } from "react";
import { useScrollContext } from "../context/ScrollContext";
import { createScrollSpy, type SectionRef } from "../../../mobile-nav/core/utils/sections";

export const useDesktopScrollAnchors = (sections: SectionRef[]) => {
    const { setActiveSection } = useScrollContext();

    // 1 instance par hook => pas de collision desktop/mobile
    const spyRef = useRef(createScrollSpy({ offset: 100 }));

    // Éviter de recréer le listener à chaque changement de `sections`
    const sectionsRef = useRef<readonly SectionRef[]>(sections);

    useEffect(() => {
        sectionsRef.current = sections;
    }, [sections]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            spyRef.current.scrollInView(sectionsRef.current);
            spyRef.current.addNewUrl();
            spyRef.current.updateSectionClasses(
                sectionsRef.current,
                setActiveSection
            );
        };

        // Init (utile en arrivant sur une page déjà scrollée)
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setActiveSection]);
};
