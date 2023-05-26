import React from "react"
import Logo from "./logo"
import Nav from "./nav"
import '../../styles/header.scss'

export default function Header() {

    const getPageName = () => {
        let page = window.location.pathname

        if (page === '/') {
            return 'Home'
        } else if (page === '/about/') {
            return 'About'
        } else if (page === '/portfolio/') {
            return 'Portfolio'
        }

    }

    return (
        <header className="main-header">
            <div className="container">
                <Logo/>
                <Nav pageName={getPageName()} />
            </div>
        </header>
    )
}