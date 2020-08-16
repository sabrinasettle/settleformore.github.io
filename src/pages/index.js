import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import "../styles/index.scss"

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Hello Gatsby!</h1>
        <h2>Critical thinking full stack developer with a passion for development, learning, and teaching.</h2>
        <p>As a person, I have thrown myself at solving problems. The problems have taken many forms while I was an art history student, programming teacher, and textile artist, but all taught me to be tenacious and open to new, previously unknown solutions and communicating openly.</p>
        <p>As a developer, I enjoy brainstorming elegant and creative solutions for complex modern problems, researching best practices, and devoting my time to the success of my projects.</p>
      <Link>About</Link>
      <Link>Contact</Link>
      <Link>Resume</Link>
      <Link to="/contact/">Contact</Link>
      <a href="https://github.com/settleformore" target="_blank" rel="noreferrer">My Github</a>
      <a href="https://github.com/settleformore" target="_blank" rel="noreferrer">My Twitter</a>

      <Footer />
    </div>
  )
}
