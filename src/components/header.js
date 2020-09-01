import React from "react"
import './header.scss'
import "./navigation.scss"
import HeaderNav from "./navigation.js"

const Header = () => {
    return (
        <header>
            <h1>Sabrina Settle</h1>
            <HeaderNav />
        </header>
    )
}

export default Header