import React from 'react'
import { Link } from 'gatsby';

// inherit props
const TagButton = (props) => {
    const tag = props.tag;
    // console.log("tag", tag)

    // // add query to end of the url
    // if(typeof window !== "undefined"){
    //     let url = window.location.href
    //     console.log(url)
    // }

    // create the state holding a query list
    // if [] === all
    // if [hacks] === only hacks
    // const getIndices = (arr) => {
    //     // console.log("tag", tag)
    //     let len = arr.length;
    //     let indices = []
    //     for (let i = 0; i < len; i++) {
    //         if (arr[i].includes(tag)) {
    //             indices.push(i)
    //             console.log(i)
    //         }
    //     }
    //     console.log(indices)
    //     return indices
    // }

    // const updateUrl = () => {
    //     // console.log("clicked", tag);
    //     let blogPosts = document.getElementById("blog-posts");
    //     // console.log(blogPosts)
    //     let articleList = blogPosts.getElementsByClassName("article-list");
    //     // console.log(articleList)
    //     let len = articleList.length

    //     let tagList = [];
    //     for (let i = 0; i < len; i++) {
    //         let ul = articleList.item(i).getElementsByClassName("tag-list")
    //         // tagList.push(articleList.item(i).getElementsByClassName("tag-list"))
    //         // console.log(ul.item(0))
    //         // just get tags????
    //         let post = ul.item(0)
    //         tagList.push(post.getElementsByClassName("tag"))
    //         // console.log("lis", tags)
            
            
    //         // let str = JSON.stringify(ul.item(0).outerHTML)
    //         // console.log(str);
    //         // tagList.push(str);
    //     }

    //     let tagArr = [];
    //     for (let i = 0; i < len; i++) {
    //         let j = 0;
    //         let l = tagList[i].length
    //         let liElems = []
    //         for (j; j < l; j++) {
    //             let item = tagList[i].item(j)
    //             // console.log(item)
    //             liElems.push(item.textContent)
    //         }
    //         tagArr.push(liElems)
    //     }
    //     console.log(tagArr)
    //     let filteredArr = getIndices(tagArr);
    //     console.log(filteredArr)

        
        //find the index where the string includes the tag being search


        // console.log(tagList)
        
        // let strs = tagList.filter(word => word.includes("hacks"))

        // console.log(strs)
        // let res = tagList.indexOf(strs)
        // console.log(res)




        // let listArr = Array.from(atricleList)

        
        // listArr.forEach(function(el) {
        //     console.log(el);
        //   })
        // let tagList = document.getElementsByClassName('tag-list')
        // console.log(tagList)
        // let tags = tagList.getElementsByClassName("tag")
        // console.log(tags)
        // update the window.location with a query
    // }


    return(
        <div className="button-container">
            <div className="tag-button" >{tag}</div>
        </div>
    )
}

export default TagButton;