import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNav from "../../features/mobile-nav/components/MobileNav";

const NavInterface = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <MobileNav />
        </>
    );
};

export default NavInterface;
