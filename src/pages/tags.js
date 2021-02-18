import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout.js"


export default function TagIndex ({data}) {
    return (
        <Layout>
            <h1 className="page-header">
                Tags
            </h1>
        </Layout>
    )
}