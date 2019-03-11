const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/cabox/workspace/Gatsby-WeatherApp-PWA/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/index.jsx"))),
  "component---src-pages-openweather-jsx": hot(preferDefault(require("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/openweather.jsx")))
}

