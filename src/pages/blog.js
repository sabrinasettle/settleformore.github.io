import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby';

// import SEO from 'react-seo-component';

import "../styles/index.scss"

export default function Blog ({data}) {
  // const { edges: posts } = data.allMdx
    return (
      <Layout>
          <h1>Blog</h1>
          <ul>
          {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
            <>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </>
          ))}
            {/* {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>{post.excerpt}</p>
              </li>
            ))} */}
          </ul>
      </Layout>
    );
} 



// import React from "react"
// import { Link, graphql } from "gatsby"
// const BlogIndex = ({ data }) => {
//   const { edges: posts } = data.allMdx
//   return (
//     <div>
//       <h1>Awesome MDX Blog</h1>
//       <ul>
//         {posts.map(({ node: post }) => (
//           <li key={post.id}>
//             <Link to={post.fields.slug}>
//               <h2>{post.frontmatter.title}</h2>
//             </Link>
//             <p>{post.excerpt}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export const pageQuery = graphql`
//   query blogIndex {
//     allMdx {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
// export default BlogIndex

// import { graphql } from 'gatsby';
// import React from 'react';
// import { Layout } from '../components/Layout';

// export default ({ data }) => {
//   return (
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;