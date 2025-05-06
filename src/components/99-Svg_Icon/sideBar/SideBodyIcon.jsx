import { memo } from "react";
import SideIcon from "./SideIcon";
import SvgDefBG2 from "../SvgDefBG2";

const SideBodyIcon = ({ children }) => {
    return (
        <SideIcon className={"s-a"}>
            <SvgDefBG2 />
            {children}
        </SideIcon>
    );
};

export default memo(SideBodyIcon);
