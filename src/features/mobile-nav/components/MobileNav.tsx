"use client";
import { memo } from "react";
import MobileHeader from "./MobileHeader";
import { NavigationProvider } from "@/features/navigation/core/context/NavigationContext";
import { ScrollProvider } from "@/features/navigation/core/context/ScrollContext";
import { useScrollAnchors } from "@/features/navigation/core/hooks/useScrollAnchors";
import { useMobileBreakpoint } from "../hooks/useMobileBreakpoint";

const MobileNavContent = () => {
    useScrollAnchors(true);
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
