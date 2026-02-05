"use client";

import { memo } from "react";
import { NavigationProvider } from "@/features/navigation/core/context/NavigationContext";
import ScrollProvider from "@/features/navigation/core/context/ScrollContext";
import Navbar from "@/components/00-Header/Navbar";

const DesktopNavWithProviders = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <Navbar />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(DesktopNavWithProviders);
