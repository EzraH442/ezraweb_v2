import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

import NavItem from "./nav-item";

import * as styles from "./navbar-links.module.css";
import { dropdownContainer, dropdownClosed } from "./dropdown.module.css";

export default function NavDropdown(props) {
    const [closed, setClosed] = useState(true);
    const { address, text, children } = props;

    return (
        <div onMouseEnter={() => { setClosed(false); }} onMouseLeave={() => { setClosed(true); }}>
            <NavItem>
                <Link to={`../../${address}`} className={styles.navLink}>
                    {text}
                </Link>
                <FaAngleDown
                    className={styles.navDropdownIcon}
                    onClick={() => { setClosed(!closed); }}
                />
            </NavItem>
            <div className={(closed ? dropdownClosed : dropdownContainer)}>
                {children}
            </div>
        </div>
    );
}

NavDropdown.propTypes = {
    address: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
