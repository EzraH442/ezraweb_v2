import React from "react";

import PropTypes from "prop-types";

import { Link } from "gatsby";

import { dropdownLink } from "./dropdown.module.css";

export default function DropdownLink({ address, text }) {
    return (
        <div>
            <Link to={`../../${address}`} className={dropdownLink}>{text}</Link>
        </div>
    );
}

DropdownLink.propTypes = {
    address: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
