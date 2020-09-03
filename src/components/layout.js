import React from 'react'
import { Helmet } from "react-helmet"
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Header from "./header.js"
import Footer from "./footer.js"


// import {Link} from 'gatsby'
// import { graphql } from "gatsby"
// import Circle from "./image_components/circle-image.js"
// import Stain from "./image_components/stain-image.js"
// import Drawing1 from "./image_components/drawing-image.js"
// import PaintStroke from "./image_components/paint_stroke.js"

const Layout = ({ children }) => {
    const {title} = useSiteMetadata();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                    <title>{title}</title>
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
            </Helmet>
            <Header />
            <div class="center">
                {children}
            </div>
            <Footer />
        </div>
    )

}

export default Layout