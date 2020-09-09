import React from 'react'
import Circle from "../images/circle-image.js"
// import Stain from "../images/stain-image.js"
// import Drawing1 from "../images/drawing-image.js"
// import PaintStroke from "../images/paint_stroke.js"

const Main = () => {
    return (
        <div>
            <div id="grid-top-part">
              <div className="image-stack__item--top">
                <div id="des">
                    <h1> Hi, I'm Sabrina</h1>
                </div>
              </div>
              <div className="image-stack__item--bottom">
                  {/* <Circle /> */}
              </div>
                <h1 id="intro-sub-header"> and I'm a full stack developer with a passion for development, learning, and teaching.</h1>
            </div>
        </div>
    )
}

export default Main