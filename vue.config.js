// const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/AnimeRecordVue'
  : '/',
  // publicPath: './',
  // outputDir:'./dist',
  // assetsDir:'./static',
  // filenameHashing: false,
  // transpileDependencies: true,
})