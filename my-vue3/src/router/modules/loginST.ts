export default [
  {
    path: "/loginST",
    component: () => import("../../views/loginST/loginST.vue"),
    name: "loginST",
    meta: { title: "dengl", roles: ["GENERAL"] },
  },
];
