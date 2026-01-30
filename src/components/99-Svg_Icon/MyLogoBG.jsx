import React, { useId } from "react";
import LogoDefs from "./LogoDefs";
import SideBodyLogo from "./SideBodyLogo";
const MyLogoBG = () => {
    const baseId = useId().replace(/:/g, "");
    const prefix = `logo-${baseId}`;
    return (
        <SideBodyLogo className={"logoBG"}>
            <path
                id={`${prefix}-Z`}
                opacity=".5"
                d="M235 470L0 235 235 0 470 235z"
                className="animated-z"
            />
            <LogoDefs prefix={prefix} />
            <use
                href={`#${prefix}-Z`}
                fill={`url(#${prefix}-A)`}
                style={{ mixBlendMode: "screen" }}
                filter={`url(#${prefix}-H)`}
            />
        </SideBodyLogo>
    );
};
export default React.memo(MyLogoBG);
