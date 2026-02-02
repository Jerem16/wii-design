import React, { memo, Suspense, lazy } from "react";

const LazyMyLogoW = lazy(() => import("../99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = lazy(() => import("../99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = lazy(() => import("../99-Svg_Icon/MyLogoTypo"));

type LogoContentProps = {
    idPrefix: string;
};

const LogoContent = ({ idPrefix }: LogoContentProps) => {
    return (
        <div className="mnav__logo">
            <img src="/img/logo1.svg" className="my-logo l1 mnav__logo" alt="Logo-menu" />

            <Suspense fallback={null}>
                <LazyMyLogoBG idPrefix={idPrefix} />
                <LazyMyLogoTypo idPrefix={idPrefix} />
                <LazyMyLogoW idPrefix={idPrefix} />
            </Suspense>
        </div>
    );
};

export default memo(LogoContent);
