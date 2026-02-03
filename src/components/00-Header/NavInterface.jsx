import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNav from "../../features/mobile-nav/components/MobileNav";
import { NavigationProvider } from "@/features/navigation/core/context/NavigationContext";
import { ScrollProvider } from "@/features/navigation/core/context/ScrollContext";

const NavInterface = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <>
                    <Navbar />
                    <Sidebar />
                    <MobileNav />
                </>
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default NavInterface;
