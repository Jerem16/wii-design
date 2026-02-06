"use client";

import { useEffect } from "react";
import { resetActiveMenuClasses } from "../utils/updateMenuUtils";
import { handleScrollClick } from "../utils/fnScrollUtils";

export const useDesktopInitialScroll = (pathname: string | null) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            resetActiveMenuClasses();
            window.scrollTo({ top: 0 });
            const targetId = hash.substring(1);
            if (document.getElementById(targetId)) {
                handleScrollClick(targetId);
            }
            resetActiveMenuClasses();
            return;
        }

        const topElement = document.getElementById("top");
        window.scrollTo({ top: 0 });
        if (topElement) {
            resetActiveMenuClasses();
            handleScrollClick("top");
            window.history.replaceState(null, "", "#top");
        }
        resetActiveMenuClasses();
    }, [pathname]);
};
