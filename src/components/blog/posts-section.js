import React from 'react';
import { Link } from 'gatsby';
import { useEffect, useRef } from 'react';

const PostsSection = (props) => {
    const posts = props.posts
    const filters = props.filterTags;
    
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