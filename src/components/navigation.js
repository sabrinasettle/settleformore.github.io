
import React from 'react'
import {Link} from 'gatsby'

function isActive( {isCurrent} ) {
    return isCurrent ? {className: "active"} : null
}

const HeaderNav = () => {
    return (
        <div id="nav">
            <Link to="/about" getProps={isActive}>About</Link>
            <Link to="/blog" getProps={isActive}>Blog</Link>
        </div>
    )
}

export default HeaderNav