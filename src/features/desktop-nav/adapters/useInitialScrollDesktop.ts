"use client";

import { useEffect } from "react";
import { handleScrollClick } from "@/features/desktop-nav/core/utils/fnScrollUtils";
import { resetDesktopMenuClasses } from "@/features/desktop-nav/adapters/resetDesktopMenuClasses";

const DESKTOP_NAV_DEBUG = false;
const logDesktopNav = (...args: unknown[]) => {
    if (DESKTOP_NAV_DEBUG) {
        // eslint-disable-next-line no-console
        console.log("[DesktopNav]", ...args);
    }
};

export const useInitialScrollDesktop = (pathname: string | null) => {
    useEffect(() => {
        logDesktopNav("useInitialScrollDesktop.run", {
            pathname,
            hash: window.location.hash,
        });
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
        logDesktopNav("useInitialScrollDesktop.resetDesktopMenuClasses");
        resetDesktopMenuClasses();
    }, [pathname]);
};
