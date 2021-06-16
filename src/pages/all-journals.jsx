import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Header from "../componenents/header";
import Footer from "../componenents/footer";
import Body from "../componenents/containers/body";

export default function AllJournals({ data }) {
    return (
        <div>
            <Header />
            <Body>
                <div>
                    <h1>All Posts</h1>
                    <h2>
                        {data.allMarkdownRemark.totalCount}
                        {" "}
                        Posts
                    </h2>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link
                            to={node.fields.slug}
                        >
                            <div key={node.id}>
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
