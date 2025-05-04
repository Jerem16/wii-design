// components/SvgDefs.tsx
import React from "react";
import dynamic from "next/dynamic";
const SvgDefBG = () => (
    <defs>
        <linearGradient id="A" x1="127" y1="127" x2="382" y2="382" href="#I">
            <stop offset="0" stopColor="#ffed00" />
            <stop offset="1" stopColor="#009fe3" />
        </linearGradient>
        <filter id="H">
            <feGaussianBlur stdDeviation="3" result="A" />
            <feMerge>
                <feMergeNode in="A" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <linearGradient id="I" gradientUnits="userSpaceOnUse" />
    </defs>
);

export default dynamic(() => Promise.resolve(React.memo(SvgDefBG)));
