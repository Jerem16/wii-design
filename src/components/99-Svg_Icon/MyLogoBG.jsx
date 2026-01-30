import React from "react";
import SideBodyLogo from "./SideBodyLogo";
/**
 * @param {{ idPrefix: string }} props
 */
const MyLogoBG = ({ idPrefix }) => {
    return (
        <SideBodyLogo className={"logoBG"} idPrefix={idPrefix}>
            <path
                id={`${idPrefix}-Z`}
                opacity=".5"
                d="M235 470L0 235 235 0 470 235z"
                className="animated-z"
            />
            <use
                href={`#${idPrefix}-Z`}
                fill={`url(#${idPrefix}-A)`}
                style={{ mixBlendMode: "screen" }}
                filter={`url(#${idPrefix}-H)`}
            />
        </SideBodyLogo>
    );
};
export default React.memo(MyLogoBG);
