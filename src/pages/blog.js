import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from 'gatsby';
import TagSection from '../components/blog/tags/tag-section'
// import SEO from 'react-seo-component';

import "../styles/blog.scss"
import "../styles/index.scss"

export default function BlogIndex ({data}) {
  const nodes = data.allMdx.nodes
  console.log(nodes)

  const getAllTags = (nodes) => {
    let tagList = [];
    nodes.map(nodeData => {
      let articleTags = nodeData.frontmatter.tags
      articleTags.map(tags => {
        tagList.push(tags)
      })
    })
    console.log(tagList)
    let uniqTags = new Set(tagList)
    console.log(uniqTags)
    // let tags = [];
    // tagList.map(tags => {
    //   tags.push(tag)
    // })
    // console.log(tags)
  }

  getAllTags(nodes)
  return (
    <Layout>
      <h1 className="page-header">
      </h1>
      <h2 className="page-sub-header"> 
        I write about fullstack web development sprinkled with my favorite popular (even unpopular) cultural references
      </h2>
      <TagSection />
      <ul id="blog-posts">
        {data.allMdx.nodes.map(({ id, frontmatter, tags}) => {
          return (
            <li className="article-list" key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <ul className="tag-list">
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