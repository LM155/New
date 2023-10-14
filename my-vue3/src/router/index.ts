import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Task from "./modules/task";
import loginST from "./modules/loginST";
import sButs from "./modules/isButs";

const routes: Array<RouteRecordRaw> = [...loginST, ...sButs];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

import store from "../store/userInfo";

router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转来的
  // next 是一个函数，表示放行
  //   next() 放行     next('/login')
  if (to.path === "/loginST") return next();
  //获取token
  const userInfo = store;
  // console.log(userInfo.state.userInfo.token, to)
  //没有token，强制跳转登录页
  if (!userInfo.state.userInfo.token) return next("/loginST");
  next();
});

export default router;
