import React from "react"
import Layout from "../components/layout.js"
import Image from "../components/about/Image.js"
import AboutMe from "../components/about/aboutMe.js"

// import Contact from "../components/about/contact.js"

import "../styles/about.scss"

export default function About() { 
    
    return (
        <Layout>
            <div id="about-grid">
                <div className="image-stack">
                    <div className="image-stack__item--top">
                        <Image fileName="NancyPortrait2018.jpg" style={{ maxWidth: 'calc(40vh - 1rem)' }} alt="" />
                    </div>
                    <div className="image-stack__item--bottom">
                        <Image fileName="sky-background.jpg" style={{ maxWidth: 'calc(50vh - 1rem)' }} alt="" />
                    </div>
                </div>
                <AboutMe />
                {/* <Contact /> */}
            </div>
            
        </Layout>
    )
}
