import React from "react"
import './styles/header.scss'
import "./styles/navigation.scss"
import HeaderNav from "./navigation.js"
import {Link} from 'gatsby'

const Header = () => {
    return (
        <div class="container">
            <header>
                <Link to="/">Sabrina Settle</Link>
                {/* <h1>Sabrina Settle</h1> */}
                <HeaderNav />
            </header>
        </div>
    )
}

export default Header