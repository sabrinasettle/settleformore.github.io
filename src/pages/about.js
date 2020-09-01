import React from "react"
import Layout from "../components/layout"

export default function About() { 
    // slides down using the smooth scroll npm 
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }
    return (
        <Layout>
            
        </Layout>
    )
}
