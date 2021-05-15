const path = require("path");

//import path from "path";

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: { 
    name: "mole_game_project",
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  },
  chainWebpack(config) {
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      }
    ]);
  }
}