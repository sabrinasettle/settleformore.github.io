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
            {/* <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Reenie+Beanie&family=Permanent+Marker&display=swap" rel="stylesheet"></link> */}


            {/* Global site tag (gtag.js) - Google Analytics  */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180101824-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'UA-180101824-1');
            </script> */}

        </Helmet>
    )
}

export default SEO