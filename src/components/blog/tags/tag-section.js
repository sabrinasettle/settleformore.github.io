import React from 'react'
import TagGrid from './tag-grid'

const TagSection = (props) => {
    const tags = props.tags

    // const sendState = (filters) => {
    //     props.setFilters(filters);
    // }
    
    return(
        <div id="tag-section">
            <h2>Tags</h2>
            <TagGrid tags={tags} response={props.setFilters} />
        </div>
    )
}

export default TagSection;