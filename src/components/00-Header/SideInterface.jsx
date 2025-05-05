import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import sideIcons from "../../assets/data/sideIcons.json";
import Design from "../99-Svg_Icon/sideBar/Design";
import Development from "../99-Svg_Icon/sideBar/Development";
import DevOps from "../99-Svg_Icon/sideBar/DevOps";
import PerfSeo from "../99-Svg_Icon/sideBar/PerfSeo";
import StrategicFramework from "../99-Svg_Icon/sideBar/StrategicFramework";
import SupportFollow from "../99-Svg_Icon/sideBar/SupportFollow";

const SideInterface = ({ id, name, title, alt }) => {
    const iconComponents = {
        StrategicFramework: StrategicFramework,
        Design: Design,
        Development: Development,
        DevOps: DevOps,
        PerfSeo: PerfSeo,

        SupportFollow: SupportFollow
    };

    return (
        <div className="side-nav">
            {sideIcons.map(icon => {
                const IconComponent = iconComponents[icon.name];
                return (
                    <Link key={icon.id} title={icon.title} href="">
                        <IconComponent alt={icon.alt} />
                    </Link>
                );
            })}
        </div>
    );
};

SideInterface.propTypes = {
    id: PropTypes.string, // Optional ID for the side interface
    name: PropTypes.string, // Optional name for the side interface
    title: PropTypes.string, // Optional title for the link
    alt: PropTypes.string // Optional alt text for the icons
};

export default SideInterface;
