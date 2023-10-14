import { createStore } from "vuex";
const dataInfo = localStorage.getItem("大蛇丸");
export default createStore({
  state: {
    userInfo: {
      token: dataInfo || "",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
