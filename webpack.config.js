const webpack = require('webpack');

module.exports = {
  entry: './src/main.jsx',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  //...
};
