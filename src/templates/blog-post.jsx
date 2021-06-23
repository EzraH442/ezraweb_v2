import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Header from "../componenents/header";
import Body from "../componenents/containers/body";
import Footer from "../componenents/footer";
import * as styles from "./blog-post.module.css";

export default function BlogPost({ data, pageContext }) {
    const { frontmatter, html } = data.markdownRemark;
    const { nextSlug, previousSlug } = pageContext;
    const image = getImage(frontmatter.featuredImage);
    return (
        <div>
            <Header />
            <Body backgroundColor="#cfe8a3">
                <div className={styles.container}>
                    <h1 className={styles.title}>{frontmatter.title}</h1>
                    <p className={styles.date}>{frontmatter.date}</p>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
                    <GatsbyImage image={image} alt="" className={styles.image} />
                    <Link to={nextSlug} className={styles.links}>
                        {"<<< "}
                        Next Post
                    </Link>
                    <Link to={previousSlug} className={styles.links}>
                        Previous Post
                        {" "}
                        {">>>"}
                    </Link>
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
                featuredImage: PropTypes.any.isRequired,
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
        featuredImage {
            childImageSharp {     
                gatsbyImageData(
                    width: 800
                    placeholder: BLURRED
                )
            }
        }
      }
    }
  }
`;
