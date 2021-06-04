import React from "react"
// import PropTypes from "prop-types"
// Utilities
// import kebabCase from "lodash/kebabCase"
// Components
// import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout.js"


// export default function TagIndex ({data}) {
//     return (
//         <Layout>
//             <h1 className="page-header">
//                 Tags
//             </h1>
//             <ul>
//                 {/* {data.allMarkdownRemark.nodes.map(({}))} */}
//             </ul>
//         </Layout>
//     )
// }

// // write query here
// export const PageQuery = graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//         allMarkdownRemark(limit: 2000) {
//             group(field: frontmatter___tags) {
//                 fieldValue
//                 totalCount
//             }
//         }
//     }
// `