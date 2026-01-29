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
        <Link href="/#top" aria-label="Retour en haut de page" onClick={onClick}>
            <img src="/img/logo1.svg" alt="Logo" className="my-logo l1" />
            <LazyMyLogoBG />
            <LazyMyLogoTypo />
            <LazyMyLogoW />
        </Link>
    );
};

export default MobileLogoLink;
