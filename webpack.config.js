const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  devtool: 'source-map',

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'file?name=[name].[ext]'
        }]
      },
    ],
  },
};
