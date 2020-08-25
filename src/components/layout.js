import Header from "./header.js"
// import Footer from "./footer.js"

import React from 'react'
import {Link} from 'gatsby'
import { graphql } from "gatsby"
import Circle from "./circle-image.js"
import Stain from "./stain-image.js"
import Drawing1 from "./drawing-image.js"
import PaintStroke from "./image_coms/paint_stroke.js"



import Img from "gatsby-image" 


const Layout = () => {
// export default function Layout({data}) {
    // console.log(data)
    return (
        <div>
            <Header />
            <div id="top-part">
                <div id="top-image-circle">
                  <Circle />
                </div>
                <div id="des">
                    <h1>Hi, I'm Sabrina</h1>
                    {/* <Img fluid={data.image.childImageSharp.fluid}/> */}
                    <h1>Critical thinking full stack developer with a passion for development, learning, and teaching.</h1>
                </div>
            </div>
            <div id="about">
                  <h1>About</h1>
                  <div id="image-about">
                    <PaintStroke />
                  </div>
                  <div id="text">
                    <p>As a developer, I enjoy brainstorming elegant and creative solutions for complex modern problems, researching best practices, and devoting my time to the success of my projects.</p>
                    <p>As a person, I have thrown myself at solving problems. The problems have taken many forms while I was an art history student, programming teacher, and textile artist, but all taught me to be tenacious and open to new, previously unknown solutions and communicating openly.</p>
                    {/* <p>Hobbies include drawing, reading, knitting, being a goofball and cooking</p> */}
                    <span>
                        You can see some of my work
                        <a href="#work"> here </a>
                        and you can find my resume
                        <Link to="#resume"> here</Link>
                    </span>
                  </div>
            </div>
            <div id="side-image">
              <div id="image-side">

                {/* <Drawing1 /> */}
              </div>
            </div>
            {/* <div id="stain-image">
              <Stain />

            </div> */}
            <div class="image-stack">
              <div class="image-stack__item--top">
              </div>
              <div class="image-stack__item--bottom">
                <Stain />
              </div>
            </div>
            <div id="contact">
                <h2>Contact</h2>
                <p>This is the Contact section</p>
            </div>
            
            {/* <Footer /> */}
        </div>
    )

}

// export const query = graphql`
//   query {
//     image: file(relativePath: {eq: "circle2.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
export default Layout