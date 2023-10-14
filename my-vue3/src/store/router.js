import { addRouter, asyncRoutes } from "@/router";

/**
 * 当前用户是否有权限
 * @param {Object} route
 * @param {Array} roles
 * @return {Boolean}
 */
function isHasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return false;
  }
}

/**
 * 递归过滤有权限的路由
 * @param {Array} routes asyncRoutes
 * @param {Array} roles
 * @return {Array} 有权限的路由
 */
function filterRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    if (isHasPermission(route, roles)) {
      if (route.children) {
        route.children = filterRoutes(route.children, roles);
      }
      res.push(route);
    }
  });
  return res;
}

export default {
  namespaced: true,
  state: {
    isInitRoute: false,
  },
  mutations: {
    setRouter(state) {
      state.isInitRoute = true;
    },
    unsetRouter(state) {
      state.isInitRoute = false;
    },
  },
  actions: {
    async initRouter({ commit, rootGetters }) {
      const roles = rootGetters["login/roles"];
      let resRoutes = [];
      if (roles.includes("SUPER_ADMIN")) {
        resRoutes = asyncRoutes || [];
      } else {
        resRoutes = filterRoutes(asyncRoutes, roles);
      }
      addRouter(resRoutes);
      commit("setRouter", resRoutes);
    },
  },
};
