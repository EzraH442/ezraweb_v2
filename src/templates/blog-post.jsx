import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Header from "../componenents/header";
import Body from "../componenents/containers/body";
import Footer from "../componenents/footer";

export default function BlogPost({ data, pageContext }) {
    const { frontmatter, html } = data.markdownRemark;
    const { nextSlug, previousSlug } = pageContext;
    return (
        <div>
            <Header />
            <Body>
                <div>
                    <h1>{frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <p>{frontmatter.date}</p>

                    <Link to={nextSlug}>Next Post</Link>
                    <Link to={previousSlug}>Previous Post</Link>
                </div>
            </Body>
            <Footer />
        </div>

    );
}

BlogPost.propTypes = {
    pageContext: PropTypes.shape({
        nextSlug: PropTypes.string.isRequired,
        previousSlug: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }).isRequired,
            html: PropTypes.any.isRequired,
        }),
    }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
