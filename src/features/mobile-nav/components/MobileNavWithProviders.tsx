"use client";
import { memo } from "react";
import MobileNav from "./MobileNav";
import { NavigationProvider } from "@utils/navigation/core/context/NavigationContext";
import ScrollProvider from "@utils/navigation/core/context/ScrollContext";

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
