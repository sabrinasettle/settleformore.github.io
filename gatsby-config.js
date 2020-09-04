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
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-giphy`,
                        options: {
                            giphyApiKey: `<your-api-key>`,
                        },
                    },

                ],
            },
        },
    ]
}