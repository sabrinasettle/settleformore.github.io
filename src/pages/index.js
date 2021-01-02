import React from "react"
import Layout from "../components/layout.js"
import Main from "../components/index/home.js"
import Portfolio from "../components/index/portfolio.js"
import "../styles/index.scss"

export default function Index() {
  return (
    <div>
      <Layout>
        <Main/>
        <Portfolio />
      </Layout>
    </div>
  )
}
