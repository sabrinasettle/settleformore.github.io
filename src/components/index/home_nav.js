import React from 'react'
import {Link} from 'gatsby'

const MainNav = () => {
    return(
        <nav id="home-page-nav">
            <ul>
                <li>
                    <Link to='/blog' className="bordered-link"> Access my blog here! </Link>
                </li>
                <li>
                    <Link to='/resources' className="bordered-link">Or take a look at some resources I have complied!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;