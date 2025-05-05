import React from "react";
import SideBodyLogo from "./SideBodyLogo";
const MyLogoBG = () => {
    return (
        <SideBodyLogo className={"logoBG"}>
            <path
                id="Z"
                opacity=".5"
                d="M235 470L0 235 235 0 470 235z"
                className="animated-z"
            />
            <use
                href="#Z"
                fill="url(#A)"
                style={{ mixBlendMode: "screen" }}
                filter="url(#H)"
            />
        </SideBodyLogo>
    );
};
export default React.memo(MyLogoBG);
