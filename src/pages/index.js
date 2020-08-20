import React from "react"
// // import { Link } from "gatsby"
// import Footer from "../components/footer.js"
// import Header from "../components/header.js"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/index.scss"

export default function Home({data}) {
  // slides down using the smooth scroll npm 
  
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div>
      <Img fluid={data.file.childImageSharp.fluid}/>
      <Layout/>
      
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "circle2.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`