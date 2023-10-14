<template>
  <div class="container">
    <form action="#" class="login-form">
      <h2 style="margin-bottom: 24px">登 录</h2>
      <input
        type="text"
        name="username"
        v-model="info.username"
        placeholder="用户名"
      />
      <input
        type="password"
        name="password"
        v-model="info.password"
        placeholder="密码"
      />
      <button @click="changeBt">登录</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "@/router";
import store from "../../store/userInfo";

let object = { username: "1111", password: "1111" };
const info = ref({
  ...object,
});
const changeBt = () => {
  store.state.userInfo = { token: 1111 };
  if (store.state.userInfo.token) {
    localStorage.setItem("大蛇丸", store.state.userInfo.token);
    router.push({ path: "/" });
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  margin: 0;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://s.cn.bing.net/th?id=OHR.CorfuBeach_ZH-CN8660068587_1920x1080.webp&qlt=50");
  opacity: 1;
}

.login-form {
  width: 240px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 100;
  background: inherit;
  border-radius: 18px;
  overflow: hidden;
  color: #fff;

  /* 隐藏多余的模糊效果*/
}

.login-form::before {
  content: "";
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
  filter: blur(6px);
  z-index: -1;
}

.login-form h2 {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.login-form input,
.login-form button {
  color: fff;
  margin: 6px 0;
  height: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 0 14px;
}

.login-form input::placeholder {
  color: #fff;
}

.login-form button:focus,
.login-form input:focus {
  outline: 0;
}

.login-form button {
  margin-top: 24px;
  background-color: rgba(57, 88, 69, 0.4);
  color: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s;
}

.login-form button:hover {
  background-color: rgba(12, 80, 38, 0.67);
}
</style>
