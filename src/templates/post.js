//https://www.gatsbyjs.com/docs/building-with-components/#page-template-components

import React from "react"
import { graphql } from "gatsby"
// function BlogPostTemplate(props) {
//   const post = props.data.markdownRemark
//   return (
//     <div>
//       <h1>{post.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: post.html }} />
//     </div>
//   )
// }
// export default BlogPostTemplate
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `