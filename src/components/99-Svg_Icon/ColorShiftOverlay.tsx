"use client";

import { memo, type CSSProperties } from "react";
import { useIdPrefix } from "@/hooks/useIdPrefix";
import SvgGradientWithFilter from "./SvgGradientWithFilter";

type ColorShiftOverlayProps = {
    className?: string;
    style?: CSSProperties;
    overlayClassName?: string;
    overlayStyle?: CSSProperties;
    idPrefix?: string;
    zIndex?: number | string;

    shape?: "rect" | "roundedRect" | "circle" | "path";
    rx?: number;
    ry?: number;
    pathD?: string;
    opacity?: number;
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

const DEFAULT_VIEWBOX_SIZE = 100;

const renderShape = ({
    id,
    shape,
    rx,
    ry,
    pathD
}: {
    id: string;
    shape: NonNullable<ColorShiftOverlayProps["shape"]>;
    rx?: number;
    ry?: number;
    pathD?: string;
}) => {
    if (shape === "circle") {
        return <circle id={id} cx="50" cy="50" r="50" />;
    }

    if (shape === "roundedRect") {
        return (
            <rect
                id={id}
                x="0"
                y="0"
                width={DEFAULT_VIEWBOX_SIZE}
                height={DEFAULT_VIEWBOX_SIZE}
                rx={rx}
                ry={ry}
            />
        );
    }

    if (shape === "path" && pathD) {
        return <path id={id} d={pathD} />;
    }

    return (
        <rect
            id={id}
            x="0"
            y="0"
            width={DEFAULT_VIEWBOX_SIZE}
            height={DEFAULT_VIEWBOX_SIZE}
        />
    );
};

function ColorShiftOverlay({
    className,
    style,
    overlayClassName,
    overlayStyle,
    idPrefix,
    zIndex,

    shape = "rect",
    rx,
    ry,
    pathD,
    opacity = 0.5
}: ColorShiftOverlayProps) {
    const generatedPrefix = useIdPrefix("color-shift-overlay");
    const prefix = idPrefix ?? generatedPrefix;
    const shapeId = `${prefix}-S`;

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
                    <SvgGradientWithFilter
                        idPrefix={prefix}
                        resultId="A"
                        x1="27"
                        y1="27"
                        x2="81"
                        y2="81"
                    />
                </defs>

                {renderShape({ id: shapeId, shape, rx, ry, pathD })}

                <use
                    href={`#${shapeId}`}
                    fill={`url(#${prefix}-A)`}
                    opacity={opacity}
                    style={{ mixBlendMode: "screen" }}
                    filter={`url(#${prefix}-H)`}
                />
            </svg>
        </div>
    );
}

export default memo(ColorShiftOverlay);
