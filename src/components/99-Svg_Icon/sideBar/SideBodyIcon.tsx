import { memo, Suspense } from "react";
import type { ReactNode } from "react";
import SideIcon from "./SideIcon";
import SvgDefBG2 from "../SvgDefBG2";
import { useIdPrefix } from "@hooks/useIdPrefix";

type SideBodyIconProps = {
    R: ReactNode,
    children?: ReactNode
};

const SideBodyIcon = ({ R, children }: SideBodyIconProps) => {
    const idPrefix = useIdPrefix("icon");

    return (
        <SideIcon className="s-a">
            <SvgDefBG2 idPrefix={idPrefix} />
            <g className="red-content_icon">{R}</g>
            <Suspense fallback={null}>{children}</Suspense>
        </SideIcon>
    );
};

export default memo(SideBodyIcon);
