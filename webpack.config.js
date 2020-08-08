const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-hexrgba"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  mode: "development",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    host: "0.0.0.0",
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: postCSSPlugins,
            },
          },
        ],
      },
    ],
  },
};
