"use client";

import { useEffect } from "react";
import { handleScrollClick } from "@/features/desktop-nav/core/utils/fnScrollUtils";
import { resetDesktopMenuClasses } from "@/features/desktop-nav/adapters/resetDesktopMenuClasses";

export const useInitialScrollDesktop = (pathname: string | null) => {
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
        resetDesktopMenuClasses();
    }, [pathname]);
};
