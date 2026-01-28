import React from "react";
import Link from "next/link";

const LazyMyLogoW = React.lazy(() => import("../99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = React.lazy(() => import("../99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = React.lazy(() => import("../99-Svg_Icon/MyLogoTypo"));

const Logo = ({
    href = "/",
    onClick,
    className = "",
    ariaLabel = "Aller à la page d'accueil",
    title = "Aller à la page d'accueil",
}) => {
    const logoClassName = ["logo", className].filter(Boolean).join(" ");

    return (
        <Link
            className={logoClassName}
            href={href}
            title={title}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            <img src="/img/logo1.svg" className="my-logo l1" alt="Logo-menu" />
            <React.Suspense fallback={null}>
                <LazyMyLogoBG />
                <LazyMyLogoTypo />
                <LazyMyLogoW />
            </React.Suspense>
        </Link>
    );
};

export default React.memo(Logo);
