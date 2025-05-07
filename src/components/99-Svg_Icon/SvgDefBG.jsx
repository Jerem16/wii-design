// components/SvgDefs.tsx
import React from "react";
import dynamic from "next/dynamic";
import SvgFilter from "./SvgFilter";
import StpOf7 from "./StpOf7";
const SvgDefBG = () => (
    <defs>
        <linearGradient id="A" x1="127" y1="127" x2="382" y2="382" href="#I">
            <StpOf7 />
        </linearGradient>
        <SvgFilter id={"A"} />
    </defs>
);

export default dynamic(() => Promise.resolve(React.memo(SvgDefBG)));
