import { memo, Suspense } from "react";
import SideIcon from "./SideIcon";
import SvgDefBG2 from "../SvgDefBG2";

const SideBodyIcon = ({ R: RComponent, children }) => {
    return (
        <SideIcon className={"s-a"}>
            <SvgDefBG2 />
            <g className={"red-content_icon"}>{RComponent}</g>
            <Suspense fallback={null}>{children}</Suspense>
        </SideIcon>
    );
};

export default memo(SideBodyIcon);
