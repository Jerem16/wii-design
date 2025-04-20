import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/**
 * NavInterface component that combines the Navbar and Sidebar components.
 * @component
 * @returns {JSX.Element} The rendered NavInterface component
 */
const NavInterface = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
        </>
    );
};

// There is no PropTypes here.

export default NavInterface;
