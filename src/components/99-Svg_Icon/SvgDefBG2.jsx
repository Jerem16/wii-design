import { memo } from "react";
import dynamic from "next/dynamic";
import SvgGradientWithFilter from "./SvgGradientWithFilter";

/**
 * @param {{ idPrefix: string }} props
 */
const SvgDefBG2 = ({ idPrefix }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
            <SvgGradientWithFilter
                idPrefix={idPrefix}
                resultId="AX"
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                // hrefSuffix="I" // optionnel car par défaut = "I"
            />
        </defs>

        <path
            id={`${idPrefix}-RX`}
            fill={`url(#${idPrefix}-AX)`}
            d="M57 0H7C3.7 0 0 3.7 0 7v50c0 3.3 3.7 7 7 7h50c3.3 0 7-3.7 7-7V7c0-3.3-3.7-7-7-7z"
        />
    </svg>
);

export default dynamic(() => Promise.resolve(memo(SvgDefBG2)));
