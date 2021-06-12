import React from "react";

import PropTypes from "prop-types";

import * as styles from "./navbar-links.module.css";

export default function NavItem({ children }) {
    return (
        <div className={styles.navItem}>{children}</div>
    );
}

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
};
