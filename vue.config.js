module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#FA541C",
          "link-color": "#FA541C",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {
  //         modifyVars: {
  //           "primary-color": "#52C41A",
  //           "link-color": "#52C41A",
  //           "border-radius-base": "2px"
  //         },
  //         javascriptEnabled: true
  //       }
  //     }
  //   }
  // }
};
