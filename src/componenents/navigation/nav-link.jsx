import React from "react";

import PropTypes from "prop-types";

import { Link } from "gatsby";

import NavItem from "./nav-item";

import { navLink } from "./navbar-links.module.css";

export default function NavLink({ address, text }) {
    return (
        <NavItem>
            <Link to={`../../${address}`} className={navLink}>{text}</Link>
        </NavItem>
    );
}

NavLink.propTypes = {
    address: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
