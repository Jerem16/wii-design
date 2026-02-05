import React from "react";
import DesktopNavbar from "@/features/desktop-nav/DesktopNavbar";
import Sidebar from "./Sidebar";
import MobileNav from "../../features/mobile-nav/components/MobileNav";

const NavInterface = () => {
    return (
        <>
            <DesktopNavbar />
            <Sidebar />
            <MobileNav />
        </>
    );
};

export default NavInterface;
