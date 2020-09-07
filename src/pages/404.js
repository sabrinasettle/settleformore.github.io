import React from "react"
import Layout from "../components/layout.js"
import SplatOne from "../components/images/splat-one.js"
import MarkerOne from "../components/images/marker-one.js"
import "../styles/404.scss"

export default function NotFound () {
    return (
        <Layout>

            <div className="not-found-grid">
                <h1 className="page-header" id="not-found-header">Oopsy daisy, this page doesnt exist!</h1>
                <div className="image-stack__item--top">
                    <MarkerOne />
                </div>
                <div className="image-stack__item--bottom">
                    <SplatOne />
                </div>
            </div>

        </Layout>
    )
}



