import React, {useState} from "react"
import {Link} from "gatsby"
import '../../styles/main.scss'

export default function Nav({ pageName }) {
    // show page that the user is on, removing that option from the list
    // open the nav with a background gradient
    // on hover change the color of the circle

    // need to make it acessible by keyboard

    // const [pageTitle, setPageTitle] = useState(pageName)
    const [isVisible, setIsVisible] = useState(false)

    const pages = [
        {name: 'About', link: '/about'}, 
        {name: 'Home', link: '/'}, 
        {name: 'Portfolio', link: '/portfolio'}
    ]

    function RenderList() {
        return (
            <ul className="dropdown-menu" id="dropdown-menu" aria-label="Dropdown of Links">
                {pages.map(function(page){
                    if (page.name !== pageName)
                        return <li><Link to={page.link}>{page.name}</Link></li>;
                })}
            </ul>
        )
    }

    function openDropdown() {
        setIsVisible(!isVisible)
    }

    // aria-expanded="false"
    // implement a time delay from when the mouse leaves the menu area to when the menu closes. 

    // gradient-background-dropdown-menu for the gradient
    let id = isVisible ? "gradient-background-dropdown-menu" : "";

    return (
        <div className="menu-container" id={id}>
            <button id="dropdown-toggle" aria-label="Click for dropdown of Links" onClick={openDropdown}>
                <div id='circle-icon' aria-label="Circle that turns green on hover as part of a button"/>
                <div className="page-title" aria-label="text indicting location">{pageName}</div>
            </button>
            { isVisible ? 
            <nav className="dropdown-menu-nav">
                <RenderList />
            </nav> :
            null
            }
        </div>
    )
}