// const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/myProject'
  : '/',
  // publicPath: './',
  // outputDir:'./dist',
  // assetsDir:'./static',
  filenameHashing: false,
  // transpileDependencies: true,
})