// components/SvgDefs.tsx
import React from "react";
import dynamic from "next/dynamic";
import SvgFilter from "./SvgFilter";
import StpOf7 from "./StpOf7";
/**
 * @param {{ idPrefix: string }} props
 */
const SvgDefBG = ({ idPrefix }) => (
    <defs>
        <linearGradient
            id={`${idPrefix}-A`}
            x1="127"
            y1="127"
            x2="382"
            y2="382"
        >
            <StpOf7 />
        </linearGradient>
        <SvgFilter idPrefix={idPrefix} resultId="A" />
    </defs>
);

export default dynamic(() => Promise.resolve(React.memo(SvgDefBG)));
