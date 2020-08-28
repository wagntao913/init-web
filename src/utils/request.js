import axios from "axios";
import message from "ant-design-vue/es/message";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    // config.headers['TOKEN'] = getCookie()
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
    message.error("超时或者服务器异常，请稍后再试");
    return Promise.reject(error);
  }
);

export default service;
