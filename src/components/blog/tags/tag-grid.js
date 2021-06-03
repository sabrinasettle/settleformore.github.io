import React from 'react'
import TagButton from './tag-button'

// https://stackoverflow.com/questions/48131100/react-render-array-of-components
const TagGrid = (props) => {
    // console.log("props", props.tags)
    const tags = props.tags;

    // create array of buttons with props
    let buttonArray = [];
    tags.forEach(tag => {
        // console.log(tag)
        buttonArray.push(<TagButton tag={tag} />)
    })

    return(
        <div id="tag-button-grid">
            {buttonArray.map((button, index) => (
                // <div className="grid-col">
                    <span key={index}>
                        {button}
                    </span>
                // </div>
            ))}
        </div>
    )
}

export default TagGrid;