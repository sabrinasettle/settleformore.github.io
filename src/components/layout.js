import Header from "./header.js"
// import Footer from "./footer.js"

import React from 'react'
import {Link} from 'gatsby'
import { graphql } from "gatsby"
import Image from "./backgorund-image.js"
// import Img from "gatsby-image" 


const Layout = () => {
// export default function Layout({data}) {
    // console.log(data)
    return (
        
        <div>
            <Header />
            <div id="top-part">
                <div id="top-image">
                        <Image />

                 </div>

                <div id="des">
                    {/* <Img fluid={data.image.childImageSharp.fluid}/> */}
                    <h2>Critical thinking full stack developer with a passion for development, learning, and teaching.</h2>
                </div>
            </div>
            <div id="about">
                <h2>About</h2>
                <p>As a person, I have thrown myself at solving problems. The problems have taken many forms while I was an art history student, programming teacher, and textile artist, but all taught me to be tenacious and open to new, previously unknown solutions and communicating openly.</p>
                <p>As a developer, I enjoy brainstorming elegant and creative solutions for complex modern problems, researching best practices, and devoting my time to the success of my projects.</p>
                <span>
                    You can see some of my work
                    <a href="#work"> here </a>
                    and you can find my resume
                    <Link to="#resume"> here</Link>
                </span>
            </div>
            <div id="contact">
                <h2>Contact</h2>
                <p>This is the Contact section</p>
            </div>
            
            {/* <Footer /> */}
        </div>
    )

}

export const query = graphql`
  query {
    image: file(relativePath: {eq: "circle2.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default Layout