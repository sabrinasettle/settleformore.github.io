import React from "react"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"


const Drawing1 = () => (
    <StaticQuery
      query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "i14.png" }) {
                childImageSharp {
              fluid(maxWidth: 300, rotate: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="drawing1"/>}
    />
)
export default Drawing1