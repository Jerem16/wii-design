import React from "react";
import Link from "next/link";

const LazyMyLogoW = React.lazy(() => import("../99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = React.lazy(() => import("../99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = React.lazy(() => import("../99-Svg_Icon/MyLogoTypo"));

const Logo = () => {
    // Title prop with a default value
    return (
        <Link className="logo" href="/" title="Aller à la page d'accueil">
            <img src="/img/logo1.svg" className="my-logo l1" alt="Logo-menu" />
            <LazyMyLogoBG />
            <LazyMyLogoTypo />
            <LazyMyLogoW />

        </Link>
    );
};

export default React.memo(Logo);
