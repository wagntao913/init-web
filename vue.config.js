module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/web" : "", // 部署应用包路径
  outputDir: "web",
  lintOnSave: true,
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#FA541C",
          "link-color": "#FA541C"
          // "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  }
};
