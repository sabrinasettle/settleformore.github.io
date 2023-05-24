import React from "react"
import Logo from "./logo"
import Nav from "./nav"

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
        <div>
            <div>
                <Logo/>
                <Nav pageName={getPageName()} />
            </div>
        </div>
    )
}