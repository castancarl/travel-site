/* We want to use NODE.JS to build array of index files. To do that we usign fs-extra package */

[new HtmlWebpackPlugin({ filename: 'index.html', template: './app/index.html' })]; /* this is for one index file but w need array of .html files and than for each file we want to ---> dist directory */
