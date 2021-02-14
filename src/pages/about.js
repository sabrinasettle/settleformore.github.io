import React from "react"
import Layout from "../components/layout.js"
import Photos from "../components/about/photos.js"
import Image from "../components/about/Image.js"
// import AboutPartOne from "../components/about/about-part-one.js"
import AboutPartTwo from "../components/about/about-part-two.js"

import Contact from "../components/about/contact.js"
// import AboutNav from "../components/about/aboutnav.js"

// import Stain from "../components/images/stain-image.js"
// import Drawing1 from "../components/images/drawing-image.js"
// import PaintStroke from "../components/images/paint_stroke.js"
import "../styles/about.scss"

export default function About() { 
    
    return (
        <Layout>
            {/* <AboutNav /> */}
            <div id="about-grid">
                
                {/* <AboutPartOne /> */}
                <div className="image-stack">
                    <div className="image-stack__item--bottom">
                        <Image fileName="NancyPortrait2018.jpg" style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="image-stack__item--top">
                        {/* <AboutPartTwo /> */}
                        {/* <div className="circle"></div> */}
                        <Image fileName="NancyPortrait2018.jpg" style={{ width: '100%' }} alt="" />

                    </div>
                </div>
                <Contact />
            </div>
            
        </Layout>
    )
}
