
import React from 'react'
import {Link} from 'gatsby'

function isActive( {isCurrent} ) {
    return isCurrent ? {className: "active"} : null
}

const HeaderNav = () => {
    return (
        <nav className="site-nav">
            <ul className="site-nav-list">
                <li>
                    <Link to="/about" getProps={isActive}>About</Link>
                </li>
                <li>
                    <Link to="/blog" getProps={isActive}>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav