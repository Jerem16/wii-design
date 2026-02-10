import React from "react";
import Sidebar from "./Sidebar";
import MobileNav from "../../features/mobile-nav/components/MobileNav";
import AdaptableDesktopNav from "../../features/desktop-nav/components/AdaptableDesktopNav";

const NavInterface = () => {
    return (
        <>
            <AdaptableDesktopNav />
            <Sidebar />
            <MobileNav />
        </>
    );
};

export default NavInterface;
