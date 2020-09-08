import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from 'gatsby';

import "../styles/blog.scss"


// import SEO from 'react-seo-component';

import "../styles/index.scss"

export default function BlogIndex ({data}) {
  return (
    <Layout>
      <h1 className="page-header">
        Articles
      </h1>
      <h2 className="page-sub-header"> 
        I write about fullstack web development sprinkled with my favorite popular (even unpopular) cultural referneces
      </h2>
      <ul id="blog-posts">
        {data.allMdx.nodes.map(({ id, frontmatter }) => {
          return (
            <li className="article-list" key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

// export default BlogIndex


export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }      
      ) {
        nodes {
          id
          frontmatter {
            title
            path
          }
      }
    }
  }
`