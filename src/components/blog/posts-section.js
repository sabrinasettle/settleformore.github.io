import React from 'react';
import { Link } from 'gatsby';
import { useEffect, useRef } from 'react';

const PostsSection = (props) => {
    const nodes = props.nodes
    const filters = props.filterTags;
    console.log("posts section props", filters)

    // const [posts, setPosts] = React.useState(nodes)
    const [state, setState] = React.useState({
        posts: nodes,
        filters: filters,
    })

    const getFilteredPosts = () => {
        // the posts have the tags in the frontmatter.tags so I could alter a state array to 
        let filteredPosts = [];
        let newlist = nodes;
        if (filters.length !== 0) {
            newlist.map(node => {
                let postTags = node.frontmatter.tags;
                if (postTags.some(r => filters.includes(r))) {
                    // console.log(nodes.indexOf(node))
                    filteredPosts.push(node)
                }
            })
            // setState({...state, posts: filteredPosts});
        } else {
            filteredPosts = newlist;
            // setState({...state, posts: newlist});
        }
        return filteredPosts;
    }
    

    // let list = getFilteredPosts();
    const ref = useRef();
    useEffect(() => {
        ref.current = state.filters.length
    }, [state.filters])

    let prevLen = ref.current;
    console.log(prevLen)
    
    
    console.log("state", state.posts)
    return (
        <ul id="blog-posts">
        {state.posts.map(({ id, frontmatter}) => {
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