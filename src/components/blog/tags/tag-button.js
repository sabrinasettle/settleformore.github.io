import React from 'react'

// inherit props
const TagButton = (props) => {
    const tag = props.tag;
    const selected = props.selected;
    
    return(
        <div className="button-container">
            <div className={props.class} >{tag}</div>
        </div>
    )
}

export default TagButton;