import React from 'react'
import PaintStroke from "../images/paint_stroke.js"

const AboutPartOne = () => {
  return (
        <div id="about">
              <h1>About</h1>
              <div id="image-about">
                <PaintStroke />
              </div>
              <div className="text" id="layer">
                <p>As a developer, I enjoy brainstorming elegant and creative solutions for complex modern problems, researching best practices, and devoting my time to the success of my projects.</p>
                
                <p>As a person, I have thrown myself at solving problems. The problems have taken many forms while I was an art history student, programming teacher, and textile artist, but all taught me to be tenacious and open to new, previously unknown solutions, to lead others empathically, and communicating openly.</p>
              </div>
        </div>
    )
}

export default AboutPartOne