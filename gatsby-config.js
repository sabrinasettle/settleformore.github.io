module.exports = {
    pathPrefix: "/settleformore.github.io",
    siteMetadata: {
        title: 'Sabrina Settle',
        siteUrl: "https://settleformore.github.io/",
        description: 'Sabrina Settle, product designer and pun maker.',
        authorName: 'Sabrina Settle',
        keywords: 'UI, UX, writing',
    },
    plugins: [
        `gatsby-plugin-sass`,
        "gatsby-plugin-catch-links",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/case-studies`,
              name: "case studies"
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
              plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
    ],
  }