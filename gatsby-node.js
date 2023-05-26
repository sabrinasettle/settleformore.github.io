const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
    const createPage = actions.createPage
    const caseStudyTemplate = path.resolve(`src/templates/case-study.js`) 
    const result = await graphql(`
        {
            allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            limit: 1000
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
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: caseStudyTemplate,
          context: {} // additional data can be passed via context
        })
    })
}