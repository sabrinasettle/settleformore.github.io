import React from "react"
import Header from "../components/header/header"
import { Link } from "gatsby"
import '../styles/main.scss'
import { MainPageImage } from "../components/main-page-photo"


export default function Index() {
    return (
        <body id="home-page">
            <div id="home-page">
                <Header />
                <div id="home-page-container">
                    <div id="home-page-photo-container">
                        <MainPageImage />
                    </div>
                    <div id="home-page-text-container">
                        <p>Sabrina Settle is a product designer, software engineer, multidisciplinary artist, and writer who is passionate about creating a plethora of visuals and digital experiences</p>
                        <span>Take a look at my work <Link to="/portfolio">here</Link></span>
                    </div>
                </div>
            </div>
        </body>
    )
}

