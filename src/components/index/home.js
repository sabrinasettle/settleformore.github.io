import React from 'react'
import Circle from "../images/circle-image.js"
// import Stain from "../images/stain-image.js"
// import Drawing1 from "../images/drawing-image.js"
// import PaintStroke from "../images/paint_stroke.js"

const Main = () => {
    return (
        <div>
            {/* <div id="top-part">
                <div id="top-image-circle">
                  <Circle />
                </div>
                <div id="des">
                    <h1>Critical thinking full stack developer with a passion for development, learning, and teaching.</h1>
                </div>
            </div> */}

            <div id="grid-top-part">
              <div class="image-stack__item--top">
                <div id="des">
                    <h1>Critical thinking full stack developer with a passion for development, learning, and teaching.</h1>
                </div>
              </div>
              <div class="image-stack__item--bottom">
                  <Circle />
              </div>
            </div>
        </div>
    )
}

export default Main