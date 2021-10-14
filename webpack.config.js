const path = require("path");
const fs = require("fs");

const entryPoints = Object.fromEntries(
  fs.readdirSync("./src").map(fileName => ([
    path.parse(fileName).name, `./${path.join("src", fileName)}`
  ]))
)

module.exports = {
  entry: entryPoints,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  // 2
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: { type: "window" },
  },
  mode: "production",
};
