import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Header from "../componenents/header";
import Footer from "../componenents/footer";
import Body from "../componenents/containers/body";
import * as styles from "../styles/journals.module.css";

export default function AllJournals({ data }) {
    return (
        <div>
            <Header />
            <Body backgroundColor="#cfe8a3">
                <div className={styles.container}>
                    <h1 className={styles.title}>All Posts</h1>
                    <p className={styles.postCount}>
                        You can find all
                        {" "}
                        {data.allMarkdownRemark.totalCount}
                        {" "}
                        posts below:
                    </p>
                    <hr className={styles.line} />
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link
                            to={node.fields.slug}
                            key={node.id}
                            className={styles.link}
                        >
                            <div>
                                <h3>
                                    {node.frontmatter.title}
                                    {" - "}
                                    {node.frontmatter.date}
                                </h3>

                                <p>{node.frontmatter.headline}</p>
                            </div>
                        </Link>

                    ))}
                </div>
            </Body>
            <Footer />
        </div>
    );
}

AllJournals.propTypes = {
    data: PropTypes.shape(

    ).isRequired,
};

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            headline
          }
          fields {
              slug
          }
        }
      }
    }
  }
`;
