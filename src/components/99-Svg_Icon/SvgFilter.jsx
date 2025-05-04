// components/SvgDefs.tsx
import React from "react";

const SvgFilter = () => (
    <>
        <filter id="H">
            <feGaussianBlur stdDeviation="3" result="A" />
            <feMerge>
                <feMergeNode in="A" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <linearGradient id="I" gradientUnits="userSpaceOnUse" />
    </>
);

export default SvgFilter;
