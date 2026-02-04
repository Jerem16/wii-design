"use client";
import { memo } from "react";
import MobileNav from "./MobileNav";
import { NavigationProvider } from "@context/NavigationContext";
import ScrollProvider from "@context/ScrollContext";

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
