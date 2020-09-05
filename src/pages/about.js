import React from "react"
import Layout from "../components/layout.js"
import AboutPartOne from "../components/about/about-part-one.js"
import AboutPartTwo from "../components/about/about-part-two.js"

import Contact from "../components/about/contact.js"
import AboutNav from "../components/about/aboutnav.js"

import Stain from "../components/images/stain-image.js"
import Drawing1 from "../components/images/drawing-image.js"
// import PaintStroke from "../components/images/paint_stroke.js"

export default function About() { 
    
    return (
        <Layout>
            <AboutNav />
            <div id="about-grid">
                <AboutPartOne />
                <AboutPartTwo />
                <div className="image-stack">
                    <div className="image-stack__item--bottom">
                        <Stain />
                    </div>
                    <div className="image-stack__item--top">
                        <Drawing1 />

                    </div>
                </div>
                <Contact />
            </div>
            
        </Layout>
    )
}
