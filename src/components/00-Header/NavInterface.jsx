"use client";

import React from "react";
import MobileNav from "../../features/mobile-nav/components/MobileNav";
import DesktopNavWithProviders from "../../features/desktop-nav/DesktopNavWithProviders";
import { useMobileBreakpoint } from "@hooks/useMobileBreakpoint";

const NavInterface = () => {
    const isMobile = useMobileBreakpoint(1024);

    if (isMobile) {
        return <MobileNav />;
    }

    return <DesktopNavWithProviders />;
};

export default NavInterface;
