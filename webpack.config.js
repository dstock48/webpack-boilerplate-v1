// imports methods from the the 'path' npm package (babel dependancy)
const path = require('path');

// import library that generates an index.html file in the build folder based on a template file,
// automatically adds a <script> tag with the transpiled JS file as its src
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import a library that generates a .css file with the transpiled SASS code
// and adds it to the build folder, also adds a <link> tag into the index.html file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'), // specify the 'root' directory for all other relative paths used below
  devtool: 'source-map', // creates a source-map file so that in the browser inspector it will show the actual line numbers of the dev files
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
      filename: 'index.html', // name of file to generate
      template: path.join(__dirname, 'src/template.html'), // name and directory of tempalte file
    }),
    // generate styles.css file in the same directory that the index.html file is placed, and add <link> tag inside HTML file
    new ExtractTextPlugin('styles.css'),
  ],
};
