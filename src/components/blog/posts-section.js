import React from 'react';
import { Link } from 'gatsby';
import { useEffect, useRef } from 'react';

const PostsSection = (props) => {
    const posts = props.posts
    const filters = props.filterTags;
    console.log("posts section props - posts", props.posts, props.posts.length)
    console.log("posts section props - filters", props.filterTags, props.filterTags.length)

    // const [posts, setPosts] = React.useState(nodes)
    // const [state, setState] = React.useState({
    //     posts: nodes,
    //     filters: filters,
    // })

    // on clear list doesnt update to its previous state
    // const getFilteredPosts = () => {
        // // the posts have the tags in the frontmatter.tags so I could alter a state array to 
        // let filteredPosts = [];
        // let list = nodes;
        // // if (filters.length > 0) {
        //     list.map(node => {
        //       console.log("post", node);
        //       let postTags = node.frontmatter.tags;
        //       if (postTags.some(r => filters.includes(r))) {
        //           // console.log(nodes.indexOf(node))
        //           filteredPosts.push(node)
        //       }
        //     })
        //     console.log("new list", filteredPosts, filteredPosts.length)
        //     // setState({...state, posts: filteredPosts});
        // // } else {
        //     // filteredPosts = newlist;
        //     // console.log("unaltered list", filteredPosts, filteredPosts.length)
        //     // setState({...state, posts: newlist});
        // // }
        // return filteredPosts;
    // }
    

    // graphql in: matches any element in given array

    // let list = getFilteredPosts();
    // const ref = useRef();
    // useEffect(() => {
    //     ref.current = state.filters.length
    //     if (ref.current > 0) {
    //       let newList = getFilteredPosts();
    //       setState({...state, posts: newList});
    //     } else if (ref.current === 0) {

    //     }

    //     console.log("useEffect", state.posts, state.posts.length);
    //     //filter the array in useEffect?
    // }, [state.filters])

    // let prevLen = ref.current;
    // console.log(prevLen) //???
    
    
    // console.log("state", state.posts, state.posts.length)
    return (
        <ul id="blog-posts">
        {props.posts.map(({ id, frontmatter}) => {
          return (
            <li className="article-list" key={id}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <ul className="tag-list">
                {frontmatter.tags.sort().map(tag => {
                  return <li className="tag" key={tag + id}>{tag}</li>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    )

}

export default PostsSection;