import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NavLayout from "../views/NavLayout.vue";
import CompositionView from "../views/CompositionView.vue";
import AboutOne from "../views/AboutView/components/AboutOne.vue";
import AboutTwo from "../views/AboutView/components/AboutTwo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/navLayout",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/navLayout",
    redirect: "/navLayout/compositionApi",
    name: "navLayout",
    component: NavLayout,
    children: [
      {
        path: "compositionApi",
        name: "compositionApi",
        component: CompositionView,
      },
      {
        path: "otherFeatures",
        name: "otherFeatures",
        component: () =>
          import(
            /* webpackChunkName: "otherFeatures" */ "../views/OtherFeatures.vue"
          ),
      },
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
      {
        path: "about",
        redirect: "/navLayout/about/aboutOne",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/AboutView/AboutView.vue"
          ),
        children: [
          {
            path: "aboutOne",
            component: AboutOne,
          },
        ],
      },
      {
        path: "vuex",
        name: "vuex",
        component: () =>
          import(/* webpackChunkName: "vuex" */ "../views/VuexView.vue"),
      },
    ],
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 动态添加(嵌套)路由
router.addRoute("about", { path: "aboutTwo", component: AboutTwo });

// 全局前置守卫
router.beforeEach((to, from) => {
  console.log("进行了一次跳转", { to, from });
  // to.name !== "login" => 避免无限重定向
  if (!window.localStorage.getItem("token") && to.name !== "login") {
    return { name: "login" };
  }
  if (window.localStorage.getItem("token") && to.name === "login") {
    return { name: "navLayout" };
  }
});

export default router;
