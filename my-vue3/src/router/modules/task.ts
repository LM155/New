export default [
  {
    path: "/task",
    name: "Task",
    meta: { title: "任务管理", icon: "el-icon-menu", roles: ["GENERAL"] },
    redirect: "/task/listsss",
    children: [
      {
        path: "/task/listsss",
        component: () => import("../../views/task/listSt.vue"),
        name: "listsss",
        meta: { title: "测试1", roles: ["GENERAL"] },
      },
      {
        path: "/task/testList",
        component: () => import("../../views/task/testList.vue"),
        name: "TaskList",
        meta: { title: "测试2", roles: ["GENERAL"] },
      },
      {
        path: "/task/ante",
        component: () => import("../../views/task/ante.vue"),
        name: "ante",
        meta: { title: "测试3", roles: ["GENERAL"] },
      },
    ],
  },
];
