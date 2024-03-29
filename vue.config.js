const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      //allow for @ or @src alias for src
      alias: require('./aliases.config').webpack
    }
  },
  chainWebpack: config => {
    //turn off elint for webpack transpile
    config.module.rules.delete('eslint')
  },
  runtimeCompiler: true,
  css: {
    sourceMap: true
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/profile_website/' : '/',
  //build for dist folder to enable gh-pages hosting
  outputDir: './dist/',
  assetsDir: 'assets'
}
