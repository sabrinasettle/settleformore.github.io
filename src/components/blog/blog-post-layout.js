// warning The GraphQL query in the non-page component "/Users/sabrina/Desktop/settleformore.github.io/src/components/blog/blog-post-layout.js" will not be run.
// Exported queries are only executed for Page components. It's possible you're
// trying to create pages in your gatsby-node.js and that's failing for some
// reason.

// If the failing component(s) is a regular component and not intended to be a page
// component, you generally want to use a <StaticQuery> (https://gatsbyjs.org/docs/static-query)
// instead of exporting a page query.

// If you're more experienced with GraphQL, you can also export GraphQL
// fragments from components and compose the fragments in the Page component
// query and pass data down into the child component — https://graphql.org/learn/queries/#fragments


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

// import { graphql } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import React from 'react';
import Layout from '../layout.js';

// export const query = graphql`
//   query($pathSlug: String!) {
//     mdx(frontmatter: { path: { eq: $pathSlug } }) {
//       frontmatter {
//         title
//         path
//         date
//       }
//       body
//     }
//   }
// `;



// // const Post = ({ data }) => {
//   // const { frontmatter, post}
// // }
// const Post = ({ data: { mdx: post } }) => {
//   const { title } = post.frontmatter;
//   const { body } = post;
//   return (
//     <div>
//       <Layout>
//         <h1>{title}</h1>
//         <MDXRenderer>{body}</MDXRenderer>
//       </Layout>
//     </div>
//   );
// };
// export default Post;



import React from "react"
import { graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { useSiteMetadata } from '../../hooks/useSiteMetadata.js';
import SEO from "../seo.js"
const shortcodes = { Link } // Provide common components here

export default function Post({ data: { mdx } }) {

  // const {
    // title,
    // authorName,
    // siteUrl,
  // } = useSiteMetadata();
  // title={title}
  // description={excerpt}
  // image={
  //   cover === null
  //     ? `${siteUrl}${image}`
  //     : `${siteUrl}${cover.publicURL}`
  // }
  // pathname={`${siteUrl}${fields.slug}`}
  // siteLanguage={siteLanguage}
  // siteLocale={siteLocale}
  // twitterUsername={twitterUsername}
  // author={authorName}
  // article={true}
  // publishedDate={date}
  // modifiedDate={new Date(Date.now()).toISOString()}

  return (
      <Layout>
        <SEO />
        <div className="article-body">
          <Link to="/blog">Back</Link>
          {/* <div className="post"> */}
            <div className="post-header">
              <h1 className="post-title">{mdx.frontmatter.title}</h1>
              <p className="blog-meta-data">{mdx.frontmatter.date}</p>
            </div>
            <MDXProvider components={shortcodes}>
              <div className="post-body">
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </div>
            </MDXProvider>
          {/* </div> */}
        </div>
      </Layout>
  )
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      id
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`

// export const query = graphql`
//   query($pathSlug: String!) {
//     mdx(frontmatter: { path: { eq: $pathSlug } }) {
//       frontmatter {
//         title
//         path
//         date
//       }
//       body
//     }
//   }
// `;