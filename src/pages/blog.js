import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from 'gatsby';
import TagSection from '../components/blog/tags/tag-section'
// import SEO from 'react-seo-component';

import "../styles/blog.scss"
import "../styles/index.scss"
import { useState } from "react";
import PostsSection from "../components/blog/posts-section.js";

export default function BlogIndex ({data}) {
  const nodes = data.allMdx.nodes
  
  console.log(nodes)

  const [state, setState] = useState({
    filteredPosts: [],
    filters: [],
  })

  const getAllTags = (nodes) => {
    let tagList = [];
    nodes.map(nodeData => {
      let articleTags = nodeData.frontmatter.tags
      return articleTags.map(tags => (
        tagList.push(tags)
      ))
    })
    let uniqTags = new Set(tagList)
    return uniqTags;
  }

  const tags = getAllTags(nodes);
  // console.log("tags", tags)

  // create function in parent to handle state
  const filterPosts = (filters) => {
    setState({...state, filters: filters})
  }

  return (
    <Layout>
      <h1 className="page-header">
      </h1>
      <h2 className="page-sub-header"> 
        I write about fullstack web development sprinkled with my favorite popular (even unpopular) cultural references
      </h2>
      <TagSection tags={tags} filter={filterPosts} />
      <PostsSection nodes={nodes} filterTags={state.filters} />
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

// query MyQuery {
//   allMdx {
//     group(field: frontmatter___tags) {
//       tag: fieldValue
//       totalCount
//     }
//   }
// }


/// query from 
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