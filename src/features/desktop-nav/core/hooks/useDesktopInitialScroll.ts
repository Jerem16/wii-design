"use client";

import { useEffect } from "react";
import { resetActiveMenuClasses } from "../utils/updateMenuUtils";
import { handleScrollClick } from "../utils/fnScrollUtils";

export const useDesktopInitialScroll = (pathname: string | null) => {
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
        resetActiveMenuClasses();
    }, [pathname]);
};
