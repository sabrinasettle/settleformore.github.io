import React from "react"
import Layout from "../components/layout.js"
import Main from "../components/index/home.js"
import "../styles/index.scss"

export default function Index() {
  // slides down using the smooth scroll npm 
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div>
      <Layout>
        <Main/>
      </Layout>
    </div>
  )
}
