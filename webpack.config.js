module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    host: '192.168.33.60',
    port: 3000
  }
};
