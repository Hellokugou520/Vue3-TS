import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import CompositionView from "../views/CompositionView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "compositionApi",
    component: CompositionView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
