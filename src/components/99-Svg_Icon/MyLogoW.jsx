import React from "react";
import SideBodyLogo from "./SideBodyLogo";
import SvgDefs from "./SvgDefs";
import SvgUse from "./SvgUse";
/**
 * @param {{ idPrefix: string }} props
 */
const MyLogoW = ({ idPrefix }) => {
    const wPrefix = `${idPrefix}-w`;
    return (
        <SideBodyLogo className={"logoW"} idPrefix={wPrefix}>
            <SvgDefs idPrefix={wPrefix} />
            <path
                id={`${wPrefix}-W`}
                className="animated-w"
                d="M397.2-.7l-62.8 206-50-170.4C278 13.8 258.8-.7 236.8-.7h-1.7-1.7c-22 0-41.3 14.5-47.5 35.6l-50 170.4L73-.7H.2l90.1 294.6c6.1 19.8 24.2 33.2 45.1 33.2 22.5 0 42.4-14.9 48.8-36.5l50.9-173.8L286 290.6c6.5 21.6 26.3 36.5 48.8 36.5 20.9 0 39-13.4 45.1-33.2L470-.7h-72.8z"
            />

            <g>
                <SvgUse idPrefix={wPrefix} value="W" />
            </g>
        </SideBodyLogo>
    );
};
export default React.memo(MyLogoW);
