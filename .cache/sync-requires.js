const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/tags.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/templates/post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/templates/tags.js")))
}

