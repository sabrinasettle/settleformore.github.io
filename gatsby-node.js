const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `Mdx`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value: `/blog${value}`,
//     });
//   }
// };

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMdx (
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {published: {eq: true}}}) {
          nodes {
            frontmatter {
              path
            }
          }
        }
      }
    `);
    if (result.errors) {
      reporter.panic('failed to create posts ', result.errors);
    }
    const pages = result.data.allMdx.nodes;
    pages.forEach((page) => {
      actions.createPage({
        path: page.frontmatter.path,
        component: require.resolve('./src/components/blog-post-layout.js'),
        context: {
          pathSlug: page.frontmatter.path,
        },
      });
    });
  };


// exports.onCreateNode = ({ node, getNode, actions }) => {
//     ...
//     if (node.internal.type === "Mdx") {
//       let slug = node.frontmatter.path || createFilePath({ node, getNode })
//       ...
//     }
//   }

// if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }


// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === `Mdx`) {
//       const slug = createFilePath({ node, getNode, basePath: `pages` })
//       createNodeField({
//         node,
//         name: `slug`,
//         value: slug,
//       })
//     }
//   }
// const path = require("path")
// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const result = await graphql(`
//       query {
//         allMdx(
//             sort: {fields: [frontmatter___date], order: DESC}, 
//             filter: {frontmatter: {published: {eq: true}}}) 
//             {
//             edges {
//                 node {
//                     id
//                     frontmatter {
//                         path
//                     }
//                 }
//             }
//           }
//         }
//     `);
//     if (result.errors) {
//         reporter.panicOnBuild(`Error while running GraphQL query.`)
//         return
//     }
//     result.allMarkdownRemark.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.path
//         actions.createPage({
//             path: path,
//             component: require.resolve(`./src/components/blog-post-layout.js`),
//             context: { path: path },
//         })
//     })
//   };