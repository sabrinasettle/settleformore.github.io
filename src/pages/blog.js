import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from 'gatsby';

import SEO from 'react-seo-component';

import "../styles/index.scss"

export default function BlogIndex ({data}) {
  return (
    <Layout>
      <h1>Articles</h1>
      <h2> I write about web stuff while geeking out over data and databases  </h2>
      <ul>
        {data.allMdx.nodes.map(({ id, frontmatter }) => {
          return (
            <li key={id}>
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