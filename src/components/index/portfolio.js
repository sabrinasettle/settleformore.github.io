import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

const List = ({data}) => {
    // const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
    // console.log(frontmatter.title)
    console.log("data", data)
    const array = data.allMarkdownRemark.edges
    console.log("array", array)
    return (<div>
      <h1>Work</h1>
      <ul>
        {array.map(({ node }) => {
          console.log("title", node)
          const frontmatter = node.frontmatter
          const development = node.frontmatter.development
          console.log("dev", development)
          // development.map(phrase => )
          
          console.log(Array.isArray(development))
          return (
            <li>
              <h2>{frontmatter.title}</h2>
              <ul>
                <p>Development:</p>
                {development.map((phrase) => {
                  console.log("phrase", phrase)
                  return (
                    <li>
                      {phrase}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>)
}

const Portfolio = (props) => {
    // const nodes = props
    // console.log("query", props);
    // console.log("node", nodes)
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

// export const query = graphql`
//     query {
//     allMarkdownRemark(
//       filter: {fileAbsolutePath: {regex: "/content/projects/"}}
//     ) {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//   }
//   `;



export default Portfolio;