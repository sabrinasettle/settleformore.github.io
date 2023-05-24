import React, {useState} from "react"
import {Link} from "gatsby"
import '../../styles/main.scss'

export default function Nav({ pageName }) {
    // show page that the user is on, removing that option from the list
    // open the nav with a background gradient

    // const [pageTitle, setPageTitle] = useState(pageName)
    const [isVisible, setIsVisible] = useState(false)

    const pages = [
        {name: 'About', link: '/about'}, 
        {name: 'Home', link: '/'}, 
        {name: 'Portfolio', link: '/portfolio'}
    ]

    function RenderList() {
        return (
            <ul>
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

    return (
        <div id="gradient-background-dropdown-menu">
            <div id="page-title-dropdown" onClick={openDropdown}>
                <div id='circle-icon'/>
                <div className="page-title">{pageName}</div>
            </div>
            <div className="dropdown-menu-nav-links">
                <div id="gradient-menu-background"></div>
                <RenderList />
            </div>
        </div>
    )
}