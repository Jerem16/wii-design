import React from "react";
import SvgDefBG2 from "../SvgDefBG2";

const SideBodyIcon = ({ children }) => {
    return (
        <div className="side-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
            >
                <SvgDefBG2 />
                {children}
            </svg>
        </div>
    );
};

export default React.memo(SideBodyIcon);
