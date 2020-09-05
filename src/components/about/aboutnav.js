import React from "react"
import {Link} from 'gatsby'

const AboutNav = () => {
    if (typeof window !== "undefined") {
        require("smooth-scroll")('a[href*="#"]')
    }
    return (
        <div id="about-nav-container">
            <ul id="about-nav">
                <Link to="#about">About</Link>
                <Link to="#contact">Contact</Link>
            </ul>
        </div>
    )
}

export default AboutNav