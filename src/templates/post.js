//https://www.gatsbyjs.com/docs/building-with-components/#page-template-components

import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
// const shortcodes = { Link } // Provide common components here

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  // const {
  //     title,
  //     authorName,
  //     siteUrl,
  //   } = useSiteMetadata();
  return (
    <Layout>
        <SEO />
        <div className="article-body">
            <Link className="back-link" to="/blog">Go Back</Link>
            <div className="post-header">
              <h1 className="post-title">{post.frontmatter.title}</h1>            
            </div>
            <div className="post-sub-header">
                <p className="blog-meta-data">{post.frontmatter.date}</p>   
            </div>
            <ul className="tag-list">
              {post.frontmatter.tags.sort().map(tag => {
                return <li className="tag" key={tag}>{tag}</li>
              })}
            </ul> 
            <div className="post-body">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        tags
      }
    }
  }
`