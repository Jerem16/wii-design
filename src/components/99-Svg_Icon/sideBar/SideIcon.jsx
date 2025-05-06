import React from "react";

const SideIcon = ({ className, children }) => {
    return (
        <div className={`side-icon ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                {children}
            </svg>
        </div>
    );
};

export default React.memo(SideIcon);
