import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import NavLink from "./NavLink";
import navLinks from "../../assets/data/navLinks.json";

const Navbar = () => {
    return (
        <header className="nav-bar">
            <Logo />
            <div className="gr-nav"></div>
            <section className="link-group">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        label={link.label}
                        path={link.path}
                        title={link.title}
                    />
                ))}
            </section>{" "}
        </header>
    );
};
NavLink.propTypes = {
    label: PropTypes.string.isRequired, // The text to display for the link
    path: PropTypes.string.isRequired, // The path to navigate to when the link is clicked
    title: PropTypes.string, // The title attribute for the link
};

export default Navbar;
