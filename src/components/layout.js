import React from 'react'
import SEO from "./seo.js"
import Header from "./header.js"
import Footer from "./footer.js"

const Layout = ({ children }) => {
    return (
        <div className="full-page">
            <SEO />
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout