// import React from "react"
// import { graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import { Link } from "gatsby"
// const shortcodes = { Link } // Provide common components here
// export default function PageTemplate({ data: { mdx } }) {
//   return (
//     <div>
//       <h1>{mdx.frontmatter.title}</h1>
//       <MDXProvider components={shortcodes}>
//         <MDXRenderer>{mdx.body}</MDXRenderer>
//       </MDXProvider>
//     </div>
//   )
// }


// export const pageQuery = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/Layout';
export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;
const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    </div>
  );
};
export default Post;