import React from "react"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"


const PaintStroke = () => (
    <StaticQuery
      query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "i7.png" }) {
                childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="paint-stroke"/>}
    />
)
export default PaintStroke