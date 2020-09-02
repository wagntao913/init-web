import Layouts from "../views/Layouts.vue";

const routes = [
  {
    path: "/",
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
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/errorPages/404.vue")
  }
];

export default routes;
