module.exports = {
    pathPrefix: "/settleformore.github.io",
    siteMetadata: {
        title: 'Sabrina Settle',
        siteUrl: "https://settleformore.github.io/",
        description: 'Sabrina Settle is a fullstack devloper, who enjoys designing databases and making puns.',
        authorName: 'Sabrina Settle',
        keywords: 'fullstack developer, art, code',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/posts/`,
                name: `posts`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-image',
        'gatsby-background-image',
        'gatsby-transformer-sharp', 
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'GatsbyJS',
              short_name: 'GatsbyJS',
              start_url: '/',
              display: 'standalone',
              icon: 'src/images/icons/favicon.png'
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
              extensions: ['.mdx', '.md'],
              defaultLayout: require.resolve('./src/components/blog/blog-post-layout.js'),
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                'Cedarville',
                'Reenie Beanie',
                'Permanent Marker',
              ],
              display: 'swap'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-giphy`,
                        options: {
                            giphyApiKey: `<your-api-key>`,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-instagram-embed',
                        options: {
                          width: 220,
                          height: 220,
                        },
                    },
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-180101824-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "settleformore.github.io",
            },
        },
    ]
}