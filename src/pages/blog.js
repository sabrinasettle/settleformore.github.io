import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby';

import SEO from 'react-seo-component';

import "../styles/index.scss"

function BlogIndex ({data}) {
  // const { edges: posts } = data.allMdx
  return (
    <Layout>
      <ul>
      {data.allMdx.nodes.map(({ id, frontmatter, fields }) => {
        // {data.allMdx.nodes(({ node, frontmatter }) => {
          // const { title } = frontmatter.title
          // const { path } = frontmatter.path
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

export default BlogIndex




//     <>
//       <Layout>
//         {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
//           <>
//             <h1>{frontmatter.title}</h1>
//             <p>{frontmatter.date}</p>
//             <p>{excerpt}</p>
//           </>
//         ))}
//       </Layout>
//     </>
//   );
// };

// export const query = graphql`
//   query SITE_INDEX_QUERY {
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       nodes {
//         id
//         excerpt(pruneLength: 250)
//         frontmatter {
//           title
//           date
//         }
//       }
//     }
//   }
// `;

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


// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       nodes {
//         id
//         excerpt(pruneLength: 250)
//         frontmatter {
//           title
//           date
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }
// `;