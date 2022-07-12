import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { localCache, firstMenu } from '@/utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/main/main.vue'),
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue'
      )
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (!localCache.getCache('token') && to.name !== 'login') {
    return '/login'
  }
  if (localCache.getCache('token') && to.name === 'login') {
    return '/main'
  }
  // 跳转到当前用户的首个菜单
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
