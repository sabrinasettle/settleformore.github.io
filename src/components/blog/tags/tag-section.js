import React from 'react'
import TagGrid from './tag-grid'

const TagSection = (props) => {
    // console.log("props", props)
    const tags = props.tags

    const sendState = (filters) => {
        // console.log("I got state", filters)
        props.filter(filters);
    }
    
    return(
        <div id="tag-section">
            <h2>Tags</h2>
            <TagGrid tags={tags} response={sendState} />
        </div>
    )
}

export default TagSection;