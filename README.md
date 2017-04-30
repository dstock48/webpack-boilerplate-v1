# webpack-boilerplate-v1

## Description

This is my first crack at creating a boilerplate Webpack project directory.

With this setup, Webpack will automate the following tasks for me:

* Transpile ES6 code down to ES5
* Transpile SCSS styles down to CSS
* Dynamically create an _index.html_ file in the build folder based on a _template.html_ file located in the src folder and insert `<script>` and `<link>` tags in the proper locations to the coresponding transpiled CSS and JS files
* Launch a webpack-dev-server on localhost:8080 to immediately see any file changes in the browser