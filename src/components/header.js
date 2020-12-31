import React from "react"
import './styles/header.scss'
import "./styles/navigation.scss"
import HeaderNav from "./navigation.js"
import {Link} from 'gatsby'

const Header = () => {
    return (
        <div className="container">
            <header>
                <Link to="/" id='home'>Sabrina Settle</Link>
                {/* <h1>Sabrina Settle</h1> */}
                <HeaderNav />
            </header>
        </div>
    )
}

export default Header