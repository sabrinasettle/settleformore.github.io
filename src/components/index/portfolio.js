import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

const List = ({data}) => {
    const array = data.allMarkdownRemark.edges
    return (<div className="work-section">
      <h1 className='section-header'>Work</h1>
      <div className='portfolio-grid'>


          {array.map(({ node }) => {
            const frontmatter = node.frontmatter
            const development = node.frontmatter.development
            const projectLink = node.frontmatter.link
            return (
              <div className="portfolio-item" key={node.id}>
                <h2 className="project-title">{frontmatter.title}</h2>
                <h3 className="project-subtitle">{frontmatter.subtitle}</h3>
                <ul>
                  <p>Development:</p>
                  {development.map((phrase, index) => {
                    return (
                      <li className="dev-list" key={index}>
                        <p>{phrase}</p>
                      </li>
                    )
                  })}
                </ul>
                <div id="project-link">
                  {projectLink === "n/a" ? <p>Link unavailable</p> : <a href={projectLink}> View here </a>}
                </div>
              </div>
            )
          })}
      </div>
      {/* <ul> */}
      {/* </ul> */}
    </div>
    )
}

const Portfolio = (props) => {
    return (
        <StaticQuery
          query={graphql`
              query {
              allMarkdownRemark(
                filter: {frontmatter: {type: {eq: "work"}}}
              ) {
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        subtitle
                        development
                        link
                        description
                      }
                    }
                  }
                }
            }
          `}
          render={data => <List data={data} {...props} />}
        />
    )
};

export default Portfolio;