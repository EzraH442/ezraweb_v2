const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages/posts" });
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            node {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
            }
          }
          totalCount
        }
      }
    `);
    const { edges, totalCount } = result.data.allMarkdownRemark;
    let i = 0;
    edges.forEach((obj) => {
        const nodeSlug = obj.node.fields.slug;
        const ctx = {
            nextSlug: i === totalCount - 1 ? nodeSlug : obj.next.fields.slug,
            slug: nodeSlug,
            previousSlug: i === 0 ? nodeSlug : obj.previous.fields.slug,
        };
        createPage({
            path: obj.node.fields.slug,
            component: path.resolve("./src/templates/blog-post.jsx"),
            context: ctx,
        });
        i++;
    });
};
