import React from "react";
import dynamic from "next/dynamic";
import SvgGradientWithFilter from "./SvgGradientWithFilter";

/**
 * @param {{ idPrefix: string }} props
 */
const SvgDefBG = ({ idPrefix }) => (
    <defs>
        <SvgGradientWithFilter
            idPrefix={idPrefix}
            resultId="A"
            x1="127"
            y1="127"
            x2="382"
            y2="382"
            // hrefSuffix="I" // optionnel car par défaut = "I"
        />
    </defs>
);

export default dynamic(() => Promise.resolve(React.memo(SvgDefBG)));
