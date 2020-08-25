import React from "react"
// import { graphql } from "gatsby"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"


const Circle = () => (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "circle2.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="circle"/>}
    />
  )
  export default Circle

// export default function BI() {
//     const data = useStaticQuery(graphql`
//         query {
//             file(relativePath: { eq: "images/circles/circle1.jpg" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 5000){
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//         `)
//     console.log(data)
//     return (
//         // <h1> HI </h1>
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





{/* <StaticQuery 
    query={graphql`
    query {
      file(relativePath: { eq: "headers/default.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
    render={data => (
      <section id="header">
         <h2>LAURIE BARTH</h2>
         <Img fixed={data.file.childImageSharp.fixed} />
      </section>
    )}
  /> */}
