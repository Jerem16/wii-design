import React from "react";
import SideBodyLogo from "./SideBodyLogo";
/**
 * @param {{ idPrefix: string }} props
 */
const MyLogoBG = ({ idPrefix }) => {
    const bgPrefix = `${idPrefix}-bg`;
    return (
        <SideBodyLogo className={"logoBG"} idPrefix={bgPrefix} withBgDefs>
            <path
                id={`${bgPrefix}-Z`}
                opacity=".5"
                d="M235 470L0 235 235 0 470 235z"
                className="animated-z"
            />
            <use
                href={`#${bgPrefix}-Z`}
                fill={`url(#${bgPrefix}-A)`}
                style={{ mixBlendMode: "screen" }}
                filter={`url(#${bgPrefix}-H)`}
            />
        </SideBodyLogo>
    );
};
export default React.memo(MyLogoBG);
