import React from "react";

/**
 * @param {{ idPrefix: string, value: string }} props
 */
const SvgUse = ({ idPrefix, value }) => (
    <g>
        <use
            href={`#${idPrefix}-${value}`}
            fill={`url(#${idPrefix}-C)`}
            x="3"
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${idPrefix}-${value}`}
            x="1.5"
            y="1.5"
            fill={`url(#${idPrefix}-D)`}
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${idPrefix}-${value}`}
            fill={`url(#${idPrefix}-E)`}
            style={{ mixBlendMode: "screen" }}
        />
    </g>
);

export default SvgUse;
