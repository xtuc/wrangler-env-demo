const { EnvironmentPlugin } = require("webpack");

module.exports = {
  entry: "./index.js",
  plugins: [
    new EnvironmentPlugin({
      USER: 'unknown',
      LANG: 'unknown',
    })
  ]
}
