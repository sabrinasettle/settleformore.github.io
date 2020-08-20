module.exports = {
    pathPrefix: "/settleformore.github.io",
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-image',
        'gatsby-background-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },
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
    ]
}