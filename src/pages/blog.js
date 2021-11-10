import React, {useState, useEffect} from "react"
import Layout from "../components/layout.js"
import { graphql } from 'gatsby';
import TagSection from '../components/blog/tags/tag-section'
// import SEO from 'react-seo-component';

import "../styles/blog.scss"
import "../styles/index.scss"
import PostsSection from "../components/blog/posts-section.js";

export default function BlogIndex ({ data }) {
  const nodes = data.allMdx.nodes
  
  const [state, setState] = useState({
    posts: nodes,
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

  useEffect(() => {
    let list;
    if (state.filters.length !== 0) {
      list = filterPosts();
      // console.log("blog post list", list, list.length);
    } else {
      list = nodes;
      // console.log("blog post list", list, list.length);
    }
    setState({...state, posts: list})
  }, [state.filters])

  const setFilters = (filters) => {
    // console.log("setting filters", filters, filters.length);
    setState({...state, filters: filters});
  }

  // tweak the filtering so that if webdevelopment is chosen that can be filtered by algo
  const filterPosts = () => {
    let filteredPosts = [];
    let list = nodes;
    list.map(node => {
      let postTags = node.frontmatter.tags;
      if (postTags.some(r => state.filters.includes(r))) {
          filteredPosts.push(node)
      }
    })
    return filteredPosts;
  }

  return (
    <Layout>
      <h1 className="page-header">
      </h1>
      <h2 className="page-sub-header"> 
        I write about fullstack web development sprinkled with my favorite popular (even unpopular) cultural references
      </h2>
      <TagSection tags={tags} setFilters={setFilters} />
      <PostsSection posts={state.posts} filterTags={state.filters} />
    </Layout>
  )
}

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