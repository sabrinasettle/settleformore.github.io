import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function MainPageImage() {
    return <StaticImage 
        className="corsica-image-main-page"
        src="../images/corsicaCliffs2015.jpg" 
        alt="Over look a ship in the distance between cliffs" 
        placeholder="blurred"
    />
}