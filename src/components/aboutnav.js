import React from "react"
import {Link} from 'gatsby'


const AboutNav = () => {
    return (
        <div id="about-nav">
            <h1>Nav</h1>
            <Link to="/#about" getProps={isActive}>About</Link>
            <Link to="/#contact" getProps={isActive}>Contact</Link>
        </div>
    )
}

export default AboutNav