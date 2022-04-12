const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],

  devServer: {
    // need public path : build, directory (current path + build) - specifies where in memory the dev server is running
    static :{
      publicPath: 'build',
      directory: path.resolve(__dirname, 'build')
    },
     proxy: {
       '/': 'http://localhost:3000',
     },

    port: 8080
    },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        },
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
