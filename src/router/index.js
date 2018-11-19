// 整合路由
/* global Vue,VueRouter */
/* eslint no-undef: "error" */

import Vue from 'vue'
import VueRouter from 'vue-router'


import Admin from './admin/admin'
import User from './user/user'
import Error from './error/error'

Vue.use(VueRouter)

const redirectRouter = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  }
]
let router = new VueRouter({
  routes: [
    ...redirectRouter,
    ...User,
    ...Error,
    ...Admin
  ],
  mode: 'history'
})
router.afterEach((to, from, next) => {
  let routerTitle = ''
  if (to.meta.title) {
    routerTitle = `${to.meta.title}`
  } else {
    routerTitle = '后台管理系统'
  }
  document.title = routerTitle
})
export default router
