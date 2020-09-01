import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby';

// import SEO from 'react-seo-component';

import "../styles/index.scss"

function BlogIndex ({data}) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <ul>
        {posts.map(({ node }) => {
          const { title } = node.frontmatter
          return (
            <li key={node.id}>
              <Link to={node.fields.slug}>{title}</Link>
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
        filter: { frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
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