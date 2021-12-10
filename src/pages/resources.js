import React from 'react'
import Layout from '../components/layout.js'
import "../components/styles/resourceslist.scss"

// find the markdown at content/resources
export default function Resources({ data }) {
    const list = data.allFile.edges[0].node;
    const lastedUpdated = list.modifiedTime;
    const listBody = list.childMarkdownRemark.html

    // const sectionArray = ["A11y", "APIs", "Learning", "Better React", "React", "CSS", "Frontend", "Data", "Git Gud", "HTML", "Interviewing", "Javascript", "Roadmap", "URL/URI?"];

    return (
        <Layout>
            <div> 
                <h1>Resources</h1>
                <div id="resources_list_intro">
                    <p>
                        Hi! I see you found my resources page, its a list of things I think are interesting for learning and progressing techincally. I hope you find something helpful or thoughful in it!
                    </p>
                    <p>Last updated: {lastedUpdated} </p>
                </div>
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