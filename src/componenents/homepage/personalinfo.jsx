import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as styles from "./personalinfo.module.css";

import { columns } from "./triple-column.module.css";

import PostPreview from "./post-preview";

export default function PersonalInfo() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                headline
                featuredImage {
                  childImageSharp {     
                    gatsbyImageData(
                      width: 800
                      placeholder: BLURRED
                    )
                  } 
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>About Me</h2>

            <p className={styles.description}>
                I&apos;m an IBDP student at Western Canada High School.
                I am usually pretty busy. You can read about my life here.
            </p>

            <hr />

            <div className={columns}>
                {data.allMarkdownRemark.edges.slice(0, 2).map(({ node }) => (
                    <PostPreview
                        title={node.frontmatter.title}
                        key={node.id}
                        date={node.frontmatter.date}
                        headline={node.frontmatter.headline}
                        link={node.fields.slug}
                        image={node.frontmatter.featuredImage
                            ? getImage(node.frontmatter.featuredImage)
                            : null}
                    />
                ))}
            </div>
        </div>
    );
}
