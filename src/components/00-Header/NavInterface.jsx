import React from "react";
import Sidebar from "./Sidebar";
import MobileNav from "../../features/mobile-nav/components/MobileNav";
import DesktopNavWithProviders from "@/features/desktop-nav/DesktopNavWithProviders";

const NavInterface = () => {
    return (
        <>
            <DesktopNavWithProviders />
            <Sidebar />
            <MobileNav />
        </>
    );
};

export default NavInterface;
