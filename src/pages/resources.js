import React from 'react'
import Layout from '../components/layout.js'
import "../components/styles/resourceslist.scss"

// find the markdown at content/resources
export default function Resources({ data }) {
    const list = data.allFile.edges[0].node;
    const lastedUpdated = list.modifiedTime;
    const listBody = list.childMarkdownRemark.html
    if (data) {
        console.log(data)
        console.log(data.allFile.edges)
        console.log(list.node)
    }

    return (
        <Layout>
            <div> 
                <h1>Resources</h1>
                <div id="resource_list" dangerouslySetInnerHTML={{ __html: listBody }} />
            </div>
        </Layout>
    )
}

// query MyQuery {
//     file(absolutePath: {eq: "/Users/sabrina/Desktop/settleformore.github.io/content/resources/list.md"}) {
//       id
//       absolutePath
//       dir
//     }
//   }

// query for the resources page
export const pageQuery = graphql`
query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "resources"}}) {
      edges {
        node {
          id
          modifiedTime(formatString: "DD MMMM, YYYY")
          absolutePath
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`


// query MyQuery {
//     allFile(filter: {sourceInstanceName: {eq: "resources"}}) {
//       edges {
//         node {
//           dir
//           absolutePath
//         }
//       }
//     }
//   }