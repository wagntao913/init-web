module.exports = {
  lintOnSave: true,

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
