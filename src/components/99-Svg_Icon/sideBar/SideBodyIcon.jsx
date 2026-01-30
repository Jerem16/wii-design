import { memo, Suspense, useId } from "react";
import SideIcon from "./SideIcon";
import SvgDefBG2 from "../SvgDefBG2";

/**
 * @param {{ R: React.ReactNode, children: React.ReactNode }} props
 */
const SideBodyIcon = ({ R: RComponent, children }) => {
    const raw = useId();
    const idPrefix = `icon-${raw.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return (
        <SideIcon className={"s-a"}>
            <SvgDefBG2 idPrefix={idPrefix} />
            <g className={"red-content_icon"}>{RComponent}</g>
            <Suspense fallback={null}>{children}</Suspense>
        </SideIcon>
    );
};

export default memo(SideBodyIcon);
