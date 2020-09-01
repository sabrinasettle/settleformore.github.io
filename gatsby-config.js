module.exports = {
    pathPrefix: "/settleformore.github.io",
    siteMetadata: {
        title: 'Sabrina Settle',
        description: 'A personal website and blog.',
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
                path: `${__dirname}/posts`,
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
              background_color: '#f7f0eb',
              theme_color: '#a2466c',
              display: 'standalone',
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
              extensions: ['.mdx', '.md'],
              defaultLayout: require.resolve('./src/components/blog-post-layout.js'),
            },
        },
    ]
}