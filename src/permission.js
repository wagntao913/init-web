import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
import router from "@/router";
import store from "@/store";

const whiteList = ["/login"];

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, form, next) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      // 权限配置
      const hasGetUserInfo = store.getters.id;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch("user/ResetToken");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: `/login?redirect=${to.path}` });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
