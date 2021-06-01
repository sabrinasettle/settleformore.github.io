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
            <meta name="google-site-verification" content="Za_F1BH81en8DD2RhPODHjx5uJuDXEj3IyHylSPCGqg" />
        </Helmet>
    )
}

export default SEO