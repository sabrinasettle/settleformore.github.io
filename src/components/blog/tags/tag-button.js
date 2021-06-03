import { Link } from 'gatsby';
import React from 'react'

// inherit props
const TagButton = (props) => {
    const tag = props.tag;
    console.log("tag", tag)
    return(
        <div className="button-container">
            <div className="tag-button">{tag}</div>
        </div>
        
    )
}

export default TagButton;