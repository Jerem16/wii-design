import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import RelaxIcon from "../99-Svg_Icon/RelaxIcon";
import NatationIcon from "../99-Svg_Icon/NatationIcon";
import CyclistIcon from "../99-Svg_Icon/CyclistIcon";
import MusculationIcon from "../99-Svg_Icon/MusculationIcon";
import sideIcons from "../../assets/data/sideIcons.json";

/**
 * SideInterface component that renders the side navigation with icons.
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.id] - The ID for the side interface (optional)
 * @param {string} [props.name] - The name of the side interface (optional)
 * @param {string} [props.title] - The title for the link (optional)
 * @param {string} [props.alt] - The alt text for the icons (optional)
 * @returns {JSX.Element} The rendered SideInterface component
 */
const SideInterface = ({ id, name, title, alt }) => {
    const iconComponents = {
        RelaxIcon: RelaxIcon,
        NatationIcon: NatationIcon,
        CyclistIcon: CyclistIcon,
        MusculationIcon: MusculationIcon
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
