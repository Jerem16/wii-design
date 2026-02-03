"use client";
import { memo } from "react";
import MobileNav from "./MobileNav";
import { NavigationProvider } from "@/features/navigation/core/context/NavigationContext";
import ScrollProvider  from "@utils/context/ScrollContext";

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
