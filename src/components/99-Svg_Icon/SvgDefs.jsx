// components/SvgDefs.tsx
import React from "react";
import dynamic from "next/dynamic";
const SvgDefs = () => (
    <defs>
        <linearGradient id="C" x1="0" y1="470" x2="470" y2="0" href="#I">
            <stop offset="0" stopColor="#009640" />
            <stop offset="1" stopColor="#312783" />
        </linearGradient>
        <linearGradient id="D" x1="0" y1="0" x2="470" y2="470" href="#I">
            <stop offset="0" stopColor="#312783" />
            <stop offset="1" stopColor="#e30613" />
        </linearGradient>
        <linearGradient id="E" x1="470" y1="0" x2="0" y2="470" href="#I">
            <stop offset="0" stopColor="#e30613" />
            <stop offset="1" stopColor="#009640" />
        </linearGradient>
    </defs>
);

export default dynamic(() => Promise.resolve(React.memo(SvgDefs)));
