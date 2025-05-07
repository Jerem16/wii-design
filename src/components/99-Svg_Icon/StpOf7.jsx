// components/SvgDefs.tsx
import React from "react";
import dynamic from "next/dynamic";
const StpOf7 = () => (
    <>
        <stop offset="0" stopColor="#ffed00" />
        <stop offset="1" stopColor="#009fe3" />
    </>
);

export default dynamic(() => Promise.resolve(React.memo(StpOf7)));
