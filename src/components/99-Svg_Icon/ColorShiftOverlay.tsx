"use client";

import { CSSProperties, memo } from "react";
import { useIdPrefix } from "@/hooks/useIdPrefix";

type ColorShiftOverlayProps = {
    className?: string;
    style?: CSSProperties;
    overlayClassName?: string;
    overlayStyle?: CSSProperties;
    idPrefix?: string;
    zIndex?: number | string;
};

const defaultWrapperStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none"
};

const defaultSvgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "block"
};

const blendRectStyle: CSSProperties = {
    mixBlendMode: "screen"
};

function ColorShiftOverlay({
    className,
    style,
    overlayClassName,
    overlayStyle,
    idPrefix,
    zIndex
}: ColorShiftOverlayProps) {
    const generatedPrefix = useIdPrefix("color-shift-overlay");
    const prefix = idPrefix ?? generatedPrefix;

    return (
        <div
            aria-hidden="true"
            className={className}
            style={{ ...defaultWrapperStyle, zIndex, ...style }}
        >
            <svg
                className={overlayClassName}
                style={{ ...defaultSvgStyle, ...overlayStyle }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                <defs>
                    <linearGradient id={`${prefix}-C`} x1="0" y1="100" x2="100" y2="0">
                        <stop offset="0%" stopColor="#009640" />
                        <stop offset="100%" stopColor="#312783" />
                    </linearGradient>
                    <linearGradient id={`${prefix}-D`} x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#312783" />
                        <stop offset="100%" stopColor="#e30613" />
                    </linearGradient>
                    <linearGradient id={`${prefix}-E`} x1="100" y1="0" x2="0" y2="100">
                        <stop offset="0%" stopColor="#e30613" />
                        <stop offset="100%" stopColor="#009640" />
                    </linearGradient>
                    <linearGradient id={`${prefix}-A`} x1="10" y1="10" x2="90" y2="90">
                        <stop offset="0%" stopColor="#ffed00" />
                        <stop offset="100%" stopColor="#7300ff" />
                    </linearGradient>
                    <linearGradient id={`${prefix}-AX`} x1="90" y1="10" x2="10" y2="90">
                        <stop offset="0%" stopColor="#00fff7" />
                        <stop offset="100%" stopColor="#e30613" />
                    </linearGradient>
                </defs>

                <rect x="0" y="0" width="100" height="100" fill={`url(#${prefix}-C)`} opacity="0.72" />
                <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill={`url(#${prefix}-D)`}
                    opacity="0.45"
                    style={blendRectStyle}
                />
                <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill={`url(#${prefix}-E)`}
                    opacity="0.4"
                    style={blendRectStyle}
                />
                <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill={`url(#${prefix}-A)`}
                    opacity="0.22"
                    style={blendRectStyle}
                />
                <rect
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    fill={`url(#${prefix}-AX)`}
                    opacity="0.18"
                    style={blendRectStyle}
                />
            </svg>
        </div>
    );
}

export default memo(ColorShiftOverlay);
