import { memo } from "react";
import SvgFilter from "./SvgFilter";
import StpOf7 from "./StpOf7";

/**
 * @typedef {object} SvgGradientWithFilterProps
 * @property {string} idPrefix
 * @property {string} resultId
 * @property {string | number} x1
 * @property {string | number} y1
 * @property {string | number} x2
 * @property {string | number} y2
 * @property {string=} hrefSuffix
 */

/**
 * À utiliser *dans un <defs>*.
 * Rend : <linearGradient> + <SvgFilter> avec le même resultId.
 *
 * @param {SvgGradientWithFilterProps} props
 */
const SvgGradientWithFilter = ({
    idPrefix,
    resultId,
    x1,
    y1,
    x2,
    y2,
    hrefSuffix = "I"
}) => (
    <>
        <linearGradient
            id={`${idPrefix}-${resultId}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            href={`#${idPrefix}-${hrefSuffix}`}
        >
            <StpOf7 />
        </linearGradient>

        <SvgFilter idPrefix={idPrefix} resultId={resultId} />
    </>
);

export default memo(SvgGradientWithFilter);
