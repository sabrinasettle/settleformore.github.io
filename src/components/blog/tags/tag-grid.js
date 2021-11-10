import React from 'react'
import TagButton from './tag-button'

// https://stackoverflow.com/questions/48131100/react-render-array-of-components
const TagGrid = (props) => {
    const tags = props.tags;
    const [state, setState] = React.useState({
        chosenTags: [],
    })

    // create array of buttons with props
    const createButtonArray = () => {
        let buttonArray = [];

        tags.forEach(tag => {
            if (state.chosenTags.includes(tag)) {
                buttonArray.push(<TagButton id={tag} tag={tag} class={"tag-button-selected"}/>)
            } else {
                buttonArray.push(<TagButton id={tag} tag={tag} selected={false} class={"tag-button"}/>)
            }
        })

        if (state.chosenTags.length !== 0 ){
            buttonArray.push(<TagButton id="clear" tag="clear" class={"tag-button"} />)
        }

        return buttonArray;
    }

    const clearTagFilters = () => {
        setState({...state, chosenTags: []})
        props.response([]);
    }

    const addTagFilters = (tags) => {
        setState({...state, chosenTags: tags})
        props.response(state.chosenTags)
    }

    const addFiltersToState = (e) => {
        // console.log("test", e.target.textContent);
        const text = e.target.textContent;
        const tags = state.chosenTags;
        if (text === "clear") {
            clearTagFilters();
        } else {
            // check to remove
            if (tags.includes(text)) {
                let i = tags.indexOf(text)
                console.log(tags)
                tags.splice(i, 1);
                if (tags.length === 0) {
                    clearTagFilters();
                } else {
                    addTagFilters(tags);
                }
            } else {
                // adds
                tags.push(text)
                addTagFilters(tags);
            }
        }
    }

    const buttonArray = createButtonArray();
    return(
        <div id="tag-button-grid">
            {buttonArray.map((button, index) => (
                <span key={index} onClick={addFiltersToState}>
                    {button}
                </span>
            ))}
        </div>
    )
}

export default TagGrid;