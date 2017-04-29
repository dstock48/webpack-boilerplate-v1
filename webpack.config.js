const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'), // specify the 'root' directory for all other relative paths used below
  devtool: 'source-map',
  entry: { // specify the files being accepted by webpack
    app: './app.js', // specify the entry file's name as the key and the file's relative path as the value
  },
  output: { // specify where the output file(s) should go, and the file(s) name
    path: path.join(__dirname, 'build'), // specify the destination path for the output file(s)
    filename: '[name].bundle.js', // [name] is being used as a placeholder which is replaced by the key name of the files in 'entry' above
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // tests to only take effect on files ending in ".js"
        loader: 'babel-loader', // the loader to be used on all files matching the test
        include: path.join(__dirname, 'src'), // specify exactly which directory to include in the loader's scope
      },
      {
        test: /\.scss$/, // tests to only take effect on files ending in ".js"
        // loader: 'style-loader!css-loader!sass-loader', // the loader to be used on all files matching the test
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
        include: path.join(__dirname, 'src'), // specify exactly which directory to include in the loader's scope
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'), // specify the directory the app should launch from
    inline: true, // remove the webpack iframe
    stats: 'errors-only', // remove all of the 'built' messages
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/template.html'),
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
