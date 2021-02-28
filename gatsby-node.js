const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/post.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  return graphql(`
     {
        postsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {frontmatter: {published: {eq: true}}}
        ) {
          edges {
            node {
              frontmatter {
                path
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }

  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // let tags = [];
    result.data.postsRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          pathSlug: node.frontmatter.path,
        },
      })
      // tags = tags.concat(node.frontmatter.tags)
    })

    // tags = tags.uniq(tags);

    const tags = result.data.tagsGroup.group

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        }
      })
    })
  })

  // ATTEMPT
  // const result = await graphql(`
  //   {
  //     postsRemark: allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 2000
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             path
  //             tags
  //           }
  //         }
  //       }
  //     }
  //     tagsGroup: allMarkdownRemark(limit: 2000) {
  //       group(field: frontmatter___tags) {
  //         fieldValue
  //       }
  //     }
  //   }
  // `)
  // // handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  // // const blogPostTemplate = path.resolve("src/templates/blog.js")
  // // const tagTemplate = path.resolve(".src/templates/tags.js")
  // const posts = result.data.postsRemark.edges
  // const blogPostTemplate = path.resolve(`src/templates/post.js`)
  // // src/templates/post.js

  // // Create post detail pages
  // result.data.postsRemark.edges.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: require.resolve('./src/templates/post.js'),
  //   })
  // })
  // // Extract tag data from query
  // const tags = result.data.tagsGroup.group
  // // const tagTemplate = path.resolve(".src/templates/tags.js")

  // // Make tag pages
  // // tags.forEach(tag => {
  // //   createPage({
  // //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  // //     component: require.resolve(`./src/templates/tags.js`),
  // //     context: {
  // //       tag: tag.fieldValue,
  // //     },
  // //   })
  // // })
};