import React from 'react';
// import Circle from "../images/circle-image.js"
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
                <h1 id="intro-sub-header"> and I am a Fullstack Engineer with an unconventional background. As a result, I enjoy being part of a variety of areas like UI design, creating graphics, animation, along with the more structured and logical database design, algorithm creation, and unraveling data from RESTful APIs. .</h1>
            </div>

        </div>
    )
};

export default Main;