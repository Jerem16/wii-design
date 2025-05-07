// components/SvgDefs.tsx
import { memo } from "react";

const SvgFilter = ({ id }) => (
    <>
        <filter id="H">
            <feGaussianBlur stdDeviation="3" result="A" />
            <feMerge>
                <feMergeNode in={id} />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <linearGradient id="I" gradientUnits="userSpaceOnUse" />
    </>
);

export default memo(SvgFilter);
