import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

import NavItem from "./nav-item";

import * as styles from "./navbar-links.module.css";
import { dropdownContainer, dropdownClosed } from "./dropdown.module.css";

export default class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: true,
        };
    }

    handleMouseEnter = () => {
        this.setState({ closed: false });
    }

    handleMouseLeave = () => {
        this.setState({ closed: true });
    }

    handleClick = () => {
        const { closed } = this.state;
        this.setState({ closed: !closed });
    }

    render() {
        const { address, text, children } = this.props;
        const { closed } = this.state;

        return (
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <NavItem>
                    <Link to={`../../${address}`} className={styles.navLink}>
                        {text}
                    </Link>
                    <FaAngleDown className={styles.navDropdownIcon} onClick={this.handleClick} />
                </NavItem>
                <div className={(closed ? dropdownClosed : dropdownContainer)}>
                    {children}
                </div>
            </div>
        );
    }
}

NavDropdown.propTypes = {
    address: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
