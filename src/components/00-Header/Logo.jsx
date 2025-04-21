import React from "react";
import Link from "next/link";
import SportSeeLG from "../99-Svg_Icon/SportSeeLG";
import TypoSportSeeLG from "../99-Svg_Icon/TypoSportSeeLG";
import PropTypes from "prop-types";
import MyLogo from "../99-Svg_Icon/MyLogo";
// import dynamic from "next/dynamic";
const LazyMyLogoW = React.lazy(() => import("../99-Svg_Icon/MyLogoW"));
const LazyMyLogoBG = React.lazy(() => import("../99-Svg_Icon/MyLogoBG"));
const LazyMyLogoTypo = React.lazy(() => import("../99-Svg_Icon/MyLogoTypo"));
/**
 * Logo component that renders the SportSee logo with H1-title as a link to the home page.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display alongside the logo
 * @returns {JSX.Element} The rendered Logo component
 */
const Logo = ({ h1 = "SportSee" }) => {
    // Title prop with a default value
    return (
        <Link className="logo" href="/" title="Aller à la page d'accueil">
            <img src="/img/logo1.svg" className="my-logo l1" alt="Logo-menu" />
            <LazyMyLogoBG />
            <LazyMyLogoTypo />
            <LazyMyLogoW />

            {/* <span className="hover-line p1"></span>
            <span className="hover-line p2"></span>
            <span className="hover-line p3"></span> */}
            {/* <h1 className="nav-title">{h1}</h1> */}
        </Link>
    );
};

// Define PropTypes for the Logo component
Logo.propTypes = {
    h1: PropTypes.string // Title is optional
};

export default Logo;
