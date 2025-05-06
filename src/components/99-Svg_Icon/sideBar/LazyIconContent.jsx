"use client";

import dynamic from "next/dynamic";
import { runDelayWorker } from "@utils/functions/functions";
const DelayedContent = ({ children }) => <>{children}</>;
const LazyComponent = dynamic(
    () =>
        runDelayWorker(800).then(() => ({
            default: DelayedContent
        })),
    {
        loading: () => null,
        ssr: false
    }
);
const LazyIconContent = ({ children }) => {
    return (
        <LazyComponent>
            <g className="white-bg_icon">{children}</g>
        </LazyComponent>
    );
};

export default LazyIconContent;
