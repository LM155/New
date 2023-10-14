import Task from "./task";

export default [
  {
    path: "/",
    redirect: "/isButs",
    meta: { title: "首页", roles: ["GENERAL"] },
  },
  {
    path: "/isButs",
    meta: { title: "首页", roles: ["GENERAL"] },
    component: () => import("../../views/isButs/isButs.vue"),
    redirect: "/task",
    children: [...Task],
  },
];
