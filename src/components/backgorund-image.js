// import React from "react"
// import { graphql } from "gatsby"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
// import Img from "gatsby-image"

// export default function BI({data}) {
//     return (
//           <Img fluid={data.file.childImageSharp.fluid}/>
//       )
// }


// export const query = graphql`
//   query circleImage {
//     file(relativePath: {eq: "circle2.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `


// const data = useStaticQuery(graphql`
//   query {
//     file(relativePath: { eq: "corgi.jpg" }) {
//       childImageSharp {
//         fluid {
//           base64
//           aspectRatio
//           src
//           srcSet
//           sizes
//         }
//       }
//     }
//   }
// `)