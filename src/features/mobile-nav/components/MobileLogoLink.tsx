import Link from "next/link";
import React from "react";
import type { MouseEventHandler } from "react";
const LazyMyLogoW = React.lazy(() => import("../../../components/99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = React.lazy(() => import("../../../components/99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = React.lazy(() => import("../../../components/99-Svg_Icon/MyLogoTypo"));
interface MobileLogoLinkProps {
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const MobileLogoLink = ({ onClick }: MobileLogoLinkProps) => {
    return (
        <Link
            href="/#top"
            title="Aller à la page d'accueil"
            aria-label="Retour en haut de page"
            onClick={onClick}
            className="logo mnav__logo"
        >
            <img src="/img/logo1.svg" alt="Logo-menu" className="my-logo l1" />
            <React.Suspense fallback={null}>
                <LazyMyLogoBG />
                <LazyMyLogoTypo />
                <LazyMyLogoW />
            </React.Suspense>
        </Link>
    );
};

export default MobileLogoLink;
