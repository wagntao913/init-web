import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入ant-design-vue 组件样式库
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
// 引入 mavon-editor markdown编辑器
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor);
Vue.use(antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
