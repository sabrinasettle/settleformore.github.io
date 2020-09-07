const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/.cache/dev-404-page.js"))),
  "component---src-components-blog-blog-post-layout-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/components/blog/blog-post-layout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sabrina/Desktop/settleformore.github.io/src/pages/index.js")))
}

