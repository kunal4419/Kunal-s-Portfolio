/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 */

const React = require("react")
const { renderToString } = require("react-dom/server")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([])
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent)
  replaceBodyHTMLString(bodyHTML)
}
