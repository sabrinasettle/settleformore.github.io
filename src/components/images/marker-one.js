import React from "react"
import { StaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image"

const MarkerOne = () => (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "all/arrow1.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}      
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} className="marker-one"/>}
    />
)

export default MarkerOne