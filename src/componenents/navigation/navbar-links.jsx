import React from "react";
import PropTypes from "prop-types";
import NavDropdown from "./nav-dropdown";
import NavLink from "./nav-link";
import * as styles from "./header.module.css";
import DropdownLink from "./dropdown-link";

export default function NavbarLinks({ hidden }) {
    return (
        <nav className={hidden ? styles.navbarHidden : styles.navbar}>
            <NavLink address="" text="Home" />
            <NavLink address="about" text="About" />
            <NavDropdown address="all-journals" text="Journals">
                <DropdownLink address="getLatestPostFunction" text="Latest Post" />
                <DropdownLink address="tester" text="Other Dropdown link" />
            </NavDropdown>
            <NavLink address="contact" text="Contact" />
        </nav>
    );
}

NavbarLinks.propTypes = {
    hidden: PropTypes.bool,
};

NavbarLinks.defaultProps = {
    hidden: false,
};
