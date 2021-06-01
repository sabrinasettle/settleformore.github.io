import React from 'react'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

// find the markdown at content/resources
export default function Resources({data}){
    if (data) {
        console.log(data)
    }
    return (
        <Layout>
            <div> 
                <h1>Resources</h1>
            </div>
        </Layout>
    )
}

// query for the resources page
// export const query = graphql`
//     query ResourcesPage {

//     }
// `