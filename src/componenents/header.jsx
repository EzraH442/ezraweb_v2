import React from 'react';

import { FaBars } from '@react-icons/all-files/fa/FaBars';

import NavbarLinks from './navigation/navbar-links';

import * as styles from './navigation/header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navCollapsed: false,
        };
    }

    handleToggleClick = () => {
        const { navCollapsed } = this.state;

        this.setState({ navCollapsed: !navCollapsed });
    }

    render() {
        const { navCollapsed } = this.state;

        return (
            <div className={styles.header}>
                <p className={styles.title}>ezra&quot;s website!</p>

                <NavbarLinks style={styles.nav} hidden={navCollapsed} />
                <FaBars
                    className={`${styles.navToggle} ${navCollapsed
                        ? styles.navToggleCollapsed
                        : styles.navToggleOpen}`}
                    onClick={this.handleToggleClick}
                />
            </div>
        );
    }
}

export default Header;
