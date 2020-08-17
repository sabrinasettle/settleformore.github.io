import React from "react"
import {Link} from 'gatsby'
import './header.scss'
import "./navigation.scss"
import HeaderNav from './navigation.js'

function isActive( {isCurrent} ) {
    return isCurrent ? {className: "active"} : null
}

const Header = () => {
    return (
            // <div>
                <header>
                    <h3>Sabrina Settle</h3>
                    <div id="nav">
                        <Link to="/#about" getProps={isActive}>About</Link>
                        <Link to="/#contact" getProps={isActive}>Contact</Link>
                        {/* <Link to="/#resume" getProps={isActive}>Resume</Link> */}
                    </div>
                </header>
            // </div>
    )
}

export default Header