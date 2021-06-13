import React from 'react'
import TagButton from './tag-button'

// https://stackoverflow.com/questions/48131100/react-render-array-of-components
const TagGrid = (props) => {
    // console.log("props", props.tags)
    console.log(props)
    const tags = props.tags;
    const [state, setState] = React.useState({
        chosenTags: [],
    })

    // create array of buttons with props
    const createButtonArray = () => {
        let buttonArray = [];

        tags.forEach(tag => {
            if (state.chosenTags.includes(tag)) {
                buttonArray.push(<TagButton id={tag} tag={tag} chosen={true} active={true}/>)
            } else {
                buttonArray.push(<TagButton id={tag} tag={tag} chosen={false} active={false}/>)
            }
        })

        if (state.chosenTags.length !== 0 ){
            buttonArray.push(<TagButton id="clear" tag="clear" />)
        }

        return buttonArray;
    }


    const addToState = (e) => {
        // console.log(e.target.textContent)
        const text = e.target.textContent;
        const tags = state.chosenTags;
        if (text !== "clear") {
            if (tags.includes(text)) {
                let i = tags.indexOf(text)
                console.log(i)
                tags.splice(i, 1);
                console.log(tags)
                setState({...state, chosenTags: tags})
                props.response(state.chosenTags)
            } else {
                tags.push(text)
                setState({...state, chosenTags: tags})
                props.response(state.chosenTags)
            }
        }
        else {
            setState({...state, chosenTags: []})
        }
    }

    const buttonArray = createButtonArray();
    return(
        <div id="tag-button-grid">
            {buttonArray.map((button, index) => (
                <span key={index} onClick={addToState}>
                    {button}
                </span>
            ))}
        </div>
    )
}

export default TagGrid;