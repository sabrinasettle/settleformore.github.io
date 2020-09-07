import React from "react"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"

const SplatOne = () => (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "all/splat3.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}      
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="splat-one"/>}
    />
)

export default SplatOne