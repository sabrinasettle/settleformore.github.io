
import React from 'react'
import {Link} from 'gatsby'
import "./navigation.scss"
// const activeStyle = {
//     color: 'red',
// }

function isActive( {isCurrent} ) {
    return isCurrent ? {className: "active"} : null
}


const HeaderNav = () => {
    return (
        <div id="nav">
            <Link to="/#about" getProps={isActive}>About</Link>
            <Link to="/#contact" getProps={isActive}>Contact</Link>
            <Link to="/#resume" getProps={isActive}>Resume</Link>
        </div>
        // <Link to="/con">Con</Link>
        // <nav>
        //     <ul>
        //     {/* <Link to="#faq">FAQ</Link> */}
        //         <a href="#">About</a>
        //         <a href="#">Contact</a>
        //         <a href="#">Resume</a>
        //         <a href="https://github.com/settleformore" target="_blank" rel="noreferrer">Github</a>
        //         <a href="https://twitter.com/stdvbb" target="_blank" rel="noreferrer">Twitter</a>
        //     </ul>
        // </nav>

    )
}

// class Navbar extends React.Component{
//     render() {
//         return (
//             <div>
//               <ul id="nav">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">FAQ</a></li>
//                 <li><a href="#">Contact</a></li>
//               </ul>
//             </div>
//         );
//     }
// }

export default HeaderNav