import Vue from "vue";
import VueRouter from "vue-router";
import Layouts from "../views/Layouts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    component: Layouts,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Home.vue")
      },
      {
        path: "/timeLine",
        name: "TimeLine",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/timeLine.vue")
      },
      {
        path: "/silhouettes",
        name: "Silhouettes",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/silhouettes.vue")
      },
      {
        path: "/diary",
        name: "Diary",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/diary.vue")
      },
      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/settings.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
