import { Link } from 'gatsby';
import React from 'react';
import MainNav from './Nav'

const Main = () => {
    return (
        <div>
            <div id="grid-top-part">
              <div className="image-stack__item--top">
                <div id="des">
                    <h1> Hi, I'm Sabrina</h1>
                </div>
              </div>
                <h3 id="intro-sub-header"> and I am a Fullstack Engineer with an unconventional background. As a result, I enjoy being part of a variety of areas like UI design, creating graphics, animation, along with the more structured and logical database design, algorithm creation, and unraveling data from RESTful APIs.</h3>
            </div>
            <MainNav />
        </div>
    )
};

export default Main;