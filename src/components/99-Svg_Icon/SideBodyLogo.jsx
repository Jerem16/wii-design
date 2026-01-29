import React from "react";
import dynamic from "next/dynamic";
const SideBodyLogo = ({ children, className }) => {
    return (
        <div className={`my-logo ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                {children}
            </svg>
        </div>
    );
};

export default dynamic(() => Promise.resolve(React.memo(SideBodyLogo)));
