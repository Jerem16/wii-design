"use client";
import { memo } from "react";
import MobileHeader from "./MobileHeader";
import { NavigationProvider } from "@utils/navigation/core/context/NavigationContext";
import ScrollProvider from "@utils/navigation/core/context/ScrollContext";
import { useScrollAnchors } from "@utils/navigation/core/hooks/useScrollAnchors";
import { useMobileBreakpoint } from "@hooks/useMobileBreakpoint";

const MobileNavContent = () => {
    useScrollAnchors([]);
    return (
        <div className="mnav">
            <MobileHeader />
        </div>
    );
};

const MobileNav = () => {
    const isMobile = useMobileBreakpoint(1024);

    if (!isMobile) return null;

    return (
        <NavigationProvider>
            <ScrollProvider>
                <MobileNavContent />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(MobileNav);
//mnav__bar
