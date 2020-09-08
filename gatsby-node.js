const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMarkdownRemark (
            sort: {fields: [frontmatter___date], order: DESC}, 
            filter: {frontmatter: {published: {eq: true}}}
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `);
    if (result.errors) {
      reporter.panic('failed to create posts ', result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.frontmatter.path,
        component: require.resolve('./src/templates/post.js'),
        context: {
          pathSlug: node.frontmatter.path,
        },
      });
    });
  };