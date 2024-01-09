const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JSX and ES6
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for handling CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader', // Use url-loader for handling image files
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template for HtmlWebpackPlugin
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing modules without specifying their file extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
