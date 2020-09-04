import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEO = () => {
    const {
        title,
        description,
        keywords,
    } = useSiteMetadata();
    return (
        <Helmet>
            {/* <meta charSet="utf-8" /> */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
        </Helmet>
    )
}

export default SEO