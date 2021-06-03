import React from 'react'
import TagGrid from './tag-grid'

const TagSection = (props) => {
    console.log("props", props)
    const tags = props.tags
    
    return(
        <div id="tag-section">
            <h2>Tags</h2>
            <TagGrid tags={tags} />
        </div>
    )
}

export default TagSection;