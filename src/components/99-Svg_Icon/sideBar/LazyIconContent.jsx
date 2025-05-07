"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { runDelayWorker } from "@utils/functions/functions";
import { useLazyIconData } from "@hooks/useLazyIconData";

const DelayedContent = ({ children }) => <>{children}</>;

const LazyComponent = dynamic(() =>
    runDelayWorker(800).then(() => ({
        default: DelayedContent
    }))
);

const LazyIconContent = ({ id }) => {
    const data = useLazyIconData();

    if (!data) return null;

    const item = data.find(entry => entry.id === id);
    if (!item) return null;

    return (
        <LazyComponent>
            <g className={"white-bg_icon"}>
                {item.paths.map((d, i) => (
                    <path key={i + "lazyIcons"} d={d} />
                ))}
            </g>
        </LazyComponent>
    );
};

export default memo(LazyIconContent);
