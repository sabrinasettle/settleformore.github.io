import React from "react"
import { Link } from "gatsby"


const Header = () => {
    return (
        <header>
            <h1>Sabrina Settle</h1>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
            
            <p>I am a header</p>
        </header>
    )
}

export default Header