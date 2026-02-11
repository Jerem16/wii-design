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
    /** Classe sur le wrapper absolute (historique) */
    className?: string;

    /** Style sur le wrapper absolute (historique) */
    style?: CSSProperties;

    /** Classe sur le <svg> (historique) */
    overlayClassName?: string;

    /** Style sur le <svg> (historique) */
    overlayStyle?: CSSProperties;

    /** ✅ Nouvelle classe optionnelle dédiée au wrapper (radius, inset, etc.) */
    wrapperClassName?: string;

    /** ✅ Nouvelle classe optionnelle dédiée au svg (si besoin) */
    svgClassName?: string;

    /** ✅ Active le clipping (overflow hidden) pour que border-radius fonctionne */
    clip?: boolean;

    idPrefix?: string;
    zIndex?: number | string;

    shape?: "rect" | "diamond" | "path";
    rectProps?: RectShapeProps;
    pathD?: string;

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

    wrapperClassName,
    svgClassName,
    clip = false,

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

    const wrapperClasses = [className, wrapperClassName].filter(Boolean).join(" ");
    const svgClasses = [overlayClassName, svgClassName].filter(Boolean).join(" ");

    const clipStyle: CSSProperties = clip ? { overflow: "hidden" } : {};

    return (
        <div
            aria-hidden="true"
            className={wrapperClasses}
            style={{ ...defaultWrapperStyle, ...clipStyle, zIndex, ...style }}
        >
            <svg
                className={svgClasses || undefined}
                style={{ ...defaultSvgStyle, ...overlayStyle }}
                viewBox="0 0 470 470"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
            >
                <SvgDefBG idPrefix={bgPrefix} />

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
