"use client";

import { memo, type CSSProperties } from "react";
import { useIdPrefix } from "@/hooks/useIdPrefix";
import SvgDefBG from "./SvgDefBG";

type RectShapeProps = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rx?: number;
    ry?: number;
};

type ColorShiftOverlayProps = {
    className?: string;
    style?: CSSProperties;
    overlayClassName?: string;
    overlayStyle?: CSSProperties;
    idPrefix?: string;
    zIndex?: number | string;

    /**
     * rect = fond plein conteneur (recommandé pour Home/sidebar/cards)
     * diamond = losange historique
     * path = forme custom via pathD
     */
    shape?: "rect" | "diamond" | "path";

    /** Personnalisation pour shape="rect" (rectangle/carré/arrondi) */
    rectProps?: RectShapeProps;

    /** Personnalisation pour shape="path" */
    pathD?: string;

    /** Pour garder les mêmes comportements CSS que ton existant */
    shapeOpacity?: number;
    shapeClassName?: string;
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

const DEFAULT_VIEWBOX_SIZE = 470;

function ColorShiftOverlay({
    className,
    style,
    overlayClassName,
    overlayStyle,
    idPrefix,
    zIndex,

    shape = "rect",
    rectProps,
    pathD,

    shapeOpacity = 0.5,
    shapeClassName = "animated-z"
}: ColorShiftOverlayProps) {
    const generatedPrefix = useIdPrefix("color-shift-overlay");
    const rootPrefix = idPrefix ?? generatedPrefix;

    // Même convention que MyLogoBG
    const bgPrefix = `${rootPrefix}-bg`;
    const shapeId = `${bgPrefix}-Z`;

    const rectX = rectProps?.x ?? 0;
    const rectY = rectProps?.y ?? 0;
    const rectW = rectProps?.width ?? DEFAULT_VIEWBOX_SIZE;
    const rectH = rectProps?.height ?? DEFAULT_VIEWBOX_SIZE;
    const rectRx = rectProps?.rx;
    const rectRy = rectProps?.ry;

    const diamondD = "M235 470L0 235 235 0 470 235z";
    const customD = pathD ?? diamondD;

    return (
        <div
            aria-hidden="true"
            className={className}
            style={{ ...defaultWrapperStyle, zIndex, ...style }}
        >
            <svg
                className={overlayClassName}
                style={{ ...defaultSvgStyle, ...overlayStyle }}
                viewBox="0 0 470 470"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                {/* EXACT : defs MyLogoBG */}
                <SvgDefBG idPrefix={bgPrefix} />

                {/* Shape configurable, mais ID suffix -Z conservé */}
                {shape === "rect" ? (
                    <rect
                        id={shapeId}
                        x={rectX}
                        y={rectY}
                        width={rectW}
                        height={rectH}
                        rx={rectRx}
                        ry={rectRy}
                        opacity={shapeOpacity}
                        className={shapeClassName}
                    />
                ) : (
                    <path
                        id={shapeId}
                        d={shape === "diamond" ? diamondD : customD}
                        opacity={shapeOpacity}
                        className={shapeClassName}
                    />
                )}

                {/* EXACT : le <use> qui donne le rendu */}
                <use
                    href={`#${shapeId}`}
                    fill={`url(#${bgPrefix}-A)`}
                    style={{ mixBlendMode: "screen" }}
                    filter={`url(#${bgPrefix}-H)`}
                />
            </svg>
        </div>
    );
}

export default memo(ColorShiftOverlay);
