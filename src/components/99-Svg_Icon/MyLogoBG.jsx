import React from "react";
import dynamic from "next/dynamic";
import SvgDefBG from "./SvgDefBG";
const MyLogoBG = () => {
    return (
        <div className="my-logo logoBG">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                <SvgDefBG />
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
            </svg>
        </div>
    );
};
export default dynamic(() => Promise.resolve(React.memo(MyLogoBG)));
