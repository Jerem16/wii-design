"use client";

import { memo } from "react";
import { NavigationProvider } from "@/features/navigation/core/context/NavigationContext";
import ScrollProvider from "@/features/navigation/core/context/ScrollContext";
import DesktopNav from "./DesktopNav";

const DesktopNavWithProviders = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <DesktopNav />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default memo(DesktopNavWithProviders);
