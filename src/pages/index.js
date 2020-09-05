import React from "react"
import Layout from "../components/layout.js"
import Main from "../components/index/home.js"
import "../styles/index.scss"

export default function Index() {
  return (
    <div>
      <Layout>
        <Main/>
      </Layout>
    </div>
  )
}
