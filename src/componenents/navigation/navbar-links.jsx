import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import NavDropdown from "./nav-dropdown";
import NavLink from "./nav-link";
import * as styles from "./header.module.css";
import DropdownLink from "./dropdown-link";


export default function NavbarLinks({ hidden }) {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    return (
        <nav className={hidden ? styles.navbarHidden : styles.navbar}>
            <NavLink address="" text="Home" />
            <NavLink address="about" text="About" />
            <NavDropdown address="all-journals" text="Journals">
                <DropdownLink address={`${data.allMarkdownRemark.edges[0].node.fields.slug}`} text="Latest Post" />
                <DropdownLink address="../../all-journals" text="All Posts" />
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
