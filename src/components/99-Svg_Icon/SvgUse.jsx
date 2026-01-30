import React from "react";

const SvgUse = ({ value, prefix }) => (
    <g>
        <use
            href={`#${prefix}-${value}`}
            fill={`url(#${prefix}-C)`}
            x="3"
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${prefix}-${value}`}
            x="1.5"
            y="1.5"
            fill={`url(#${prefix}-D)`}
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${prefix}-${value}`}
            fill={`url(#${prefix}-E)`}
            style={{ mixBlendMode: "screen" }}
        />
    </g>
);

export default SvgUse;
