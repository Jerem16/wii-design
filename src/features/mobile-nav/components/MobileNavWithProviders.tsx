"use client";
import { memo } from "react";
import MobileNav from "./MobileNav";
import { NavigationProvider } from "@/features/mobile-nav/core/navigation/context/NavigationContext";
import ScrollProvider from "@/features/mobile-nav/core/navigation/context/ScrollContext";

const MobileNavWithProviders = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <MobileNav />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(MobileNavWithProviders);
