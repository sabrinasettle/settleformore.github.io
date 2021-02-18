import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from 'gatsby';
// import SEO from 'react-seo-component';

import "../styles/blog.scss"
import "../styles/index.scss"

export default function BlogIndex ({data}) {
  return (
    <Layout>
      <h1 className="page-header">
        Blog
      </h1>
      <h2 className="page-sub-header"> 
        I write about fullstack web development sprinkled with my favorite popular (even unpopular) cultural referneces
      </h2>
      <ul id="blog_tags">
        {data.allMdx.nodes.map(({ frontmatter, tags }) => {
          var tags1 = frontmatter.tags;
          console.log("tags1", tags1)
          
            {frontmatter.tags.sort().map(tag => {
              console.log("tag", tag)
              let key = Math.random(); 
              return <li className="tag" key={key}>{tag}</li>
            })}
          
        })}
      </ul>
      <ul id="blog-posts">
        {data.allMdx.nodes.map(({ id, frontmatter, tags}) => {
          return (
            <li className="article-list" key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <ul id="tag-list">
                {frontmatter.tags.sort().map(tag => {
                  return <li className="tag" key={tag + id}>{tag}</li>
                })}
              </ul>
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
            tags
          }
      }
    }
  }
`