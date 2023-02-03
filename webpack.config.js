module.exports = {
    entry: {
      app: "./src/index.js"
    },
    output: {
      path: __dirname + '/public/js',
      filename: "[name].js"
    },
      devServer: {
      port: 8080,
      devMiddleware: {
        publicPath: '/js/'
      },
      static: {
        directory: __dirname + '/public',
      }
    },
    devtool: "eval-source-map",
    mode: 'development',
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      }, {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
       }]
    }
  };