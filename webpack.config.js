const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({template: './main.html'})],

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
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
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
