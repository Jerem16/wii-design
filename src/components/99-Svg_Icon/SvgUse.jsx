import React from "react";

const SvgUse = ({ value }) => (
    <g>
        <use
            href={`#${value}`}
            fill="url(#C)"
            x="3"
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${value}`}
            x="1.5"
            y="1.5"
            fill="url(#D)"
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${value}`}
            fill="url(#E)"
            style={{ mixBlendMode: "screen" }}
        />
    </g>
);

export default SvgUse;
