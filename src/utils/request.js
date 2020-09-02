import axios from "axios";
import router from "vue-router";
// import store from "@/store";
import message from "ant-design-vue/es/message";
import { getToken } from "./auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    config.headers["TOKEN"] = getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;

    const { code, desc, msg } = res;
    if (code === 200) {
      return res.data;
    } else {
      message.error(!msg ? desc : msg);
    }
    return Promise.reject(new Error("接口返回异常"));
  },
  error => {
    if (error.response.status == "401") {
      //要知道还有登录过期的情况，后台也是返回 ‘401’，所以这里就要有如果是这种情况的处理
      window.localStorage.removeItem("token");
      //别忘了import引入router就行
      router.replace({
        path: "/login",
        query: {
          redirect: router.app.$router.funllPath
        }
      });
    } else {
      message.error("超时或者服务器异常，请稍后再试");
      return Promise.reject(error);
    }
  }
);

export default service;
