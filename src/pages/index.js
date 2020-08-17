import React from "react"
// // import { Link } from "gatsby"
// import Footer from "../components/footer.js"
// import Header from "../components/header.js"
import Layout from "../components/layout.js"

import "../styles/index.scss"

export default function Home() {
  // slides down using the smooth scroll npm 
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div>
      <Layout/>
      
    </div>
  )
}
