"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const wait = ms => new Promise(res => setTimeout(res, ms));
const DelayedContent = ({ children }) => <>{children}</>;
const LazyComponent = dynamic(
    () =>
        wait(800).then(() => ({
            default: DelayedContent
        })),
    {
        loading: () => null,
        ssr: false
    }
);
const LazyIconContent = ({ children, fallback = null }) => {
    return (
        <Suspense fallback={fallback}>
            <LazyComponent>
                <g className="red-content_icon">{children}</g>
            </LazyComponent>
        </Suspense>
    );
};

export default LazyIconContent;
