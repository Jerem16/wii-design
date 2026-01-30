import React, { useId } from "react";
import Link from "next/link";
const LazyMyLogoW = React.lazy(() => import("../99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = React.lazy(() => import("../99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = React.lazy(() => import("../99-Svg_Icon/MyLogoTypo"));

const Logo = () => {
    const raw = useId();
    const idPrefix = `logo-${raw.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    // Title prop with a default value
    return (
        <Link
            className="logo"
            data-logo-id={idPrefix}
            href="/"
            title="Aller à la page d'accueil"
        >
            <img src="/img/logo1.svg" className="my-logo l1" alt="Logo-menu" />
            <LazyMyLogoBG idPrefix={idPrefix} />
            <LazyMyLogoTypo idPrefix={idPrefix} />
            <LazyMyLogoW idPrefix={idPrefix} />
        </Link>
    );
};

export default React.memo(Logo);
