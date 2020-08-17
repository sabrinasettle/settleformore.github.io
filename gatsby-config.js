module.exports = {
    pathPrefix: "/settleformore.github.io",
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
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