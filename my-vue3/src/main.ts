import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//拖拽
import Directives from "@/utils//drag";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

//轮播
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css"; // 此处看下载的swiper版本是多少 引入对应的css文件 具体看下方5.注意


createApp(App)
  .use(VueAwesomeSwiper)
  .use(Antd)
  .use(Directives)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
