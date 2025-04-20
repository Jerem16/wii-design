import React from "react";
import PropTypes from "prop-types";

/**
 * Copyright component that displays a copyright message.
 * @component
 * @param {Object} props - Component props
 * @param {number} props.year - The year to display
 * @param {string} props.string - The copyright text string
 * @returns {JSX.Element} The rendered Copyright component
 */
const Copyright = ({ year, string }) => {
    return (
        <footer className="copyright">
            <p className="vertical-text">
                {string}
                {year}
            </p>
        </footer>
    );
};

Copyright.propTypes = {
    year: PropTypes.number.isRequired,
    string: PropTypes.string.isRequired,
};

export default Copyright;
