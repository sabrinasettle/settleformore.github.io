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

import Layout from '../layout.js';
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { useSiteMetadata } from '../../hooks/useSiteMetadata.js';
import SEO from "../seo.js"
const shortcodes = { Link } // Provide common components here

export default function Post({ data: { mdx } }) {

  return (
      <Layout>
        <SEO />
        <div className="article-body">
          <Link to="/blog">Back</Link>
            <div className="post-header">
              <h1 className="post-title">{mdx.frontmatter.title}</h1>
              <p className="blog-meta-data">{mdx.frontmatter.date}</p>
            </div>
            <MDXProvider components={shortcodes}>
              <div className="post-body">
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </div>
            </MDXProvider>
        </div>
      </Layout>
  )
}