var plugins = [{
      plugin: require('/Users/sabrina/Desktop/settleformore.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","display":"standalone","icon":"src/images/icons/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"5893fe363610ad376e74e878b29761ab"},
    },{
      plugin: require('/Users/sabrina/Desktop/settleformore.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/sabrina/Desktop/settleformore.github.io/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayout":"/Users/sabrina/Desktop/settleformore.github.io/src/components/blog/BlogPostLayout.js"},
    },{
      plugin: require('/Users/sabrina/Desktop/settleformore.github.io/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["M PLUS 1p","Overpass","EB Garamond","Antic Slab"],"display":"swap"},
    },{
      plugin: require('/Users/sabrina/Desktop/settleformore.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-180101824-1","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","experimentId":"YOUR_GOOGLE_EXPERIMENT_ID","variationId":"YOUR_GOOGLE_OPTIMIZE_VARIATION_ID","defer":false,"sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"settleformore.github.io"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
