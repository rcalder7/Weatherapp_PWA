// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/cabox/workspace/Gatsby-WeatherApp-PWA/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-jsx": () => import("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-openweather-jsx": () => import("/home/cabox/workspace/Gatsby-WeatherApp-PWA/src/pages/openweather.jsx" /* webpackChunkName: "component---src-pages-openweather-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/cabox/workspace/Gatsby-WeatherApp-PWA/.cache/data.json")

