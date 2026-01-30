// components/SvgFilter.jsx
import { memo } from "react";

/**
 * @param {{ idPrefix: string, resultId: string }} props
 */
const SvgFilter = ({ idPrefix, resultId }) => {
    const blurId = `${idPrefix}-${resultId}`;
    return (
        <filter id={`${idPrefix}-H`}>
            <feGaussianBlur stdDeviation="3" result={blurId} />
            <feMerge>
                <feMergeNode in={blurId} />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    );
};

export default memo(SvgFilter);
