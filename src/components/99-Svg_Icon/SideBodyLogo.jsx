import React from "react";
import dynamic from "next/dynamic";
import SvgDefBG from "./SvgDefBG";
/**
 * @param {{ children: React.ReactNode, className: string, idPrefix: string, withBgDefs?: boolean }} props
 */
const SideBodyLogo = ({ children, className, idPrefix, withBgDefs = false }) => {
    return (
        <div className={`my-logo ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                {withBgDefs ? <SvgDefBG idPrefix={idPrefix} /> : null}
                {children}
            </svg>
        </div>
    );
};

export default dynamic(() => Promise.resolve(React.memo(SideBodyLogo)));
