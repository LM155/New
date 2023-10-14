<template>
  <div class="common-layout">
    <el-container>
      <el-header
        style="
          background-color: #545c64;
          color: #fff;
          height: 90px;
          display: flex;
          align-items: center;
        "
      >
        <heaDer />
      </el-header>
      <el-container>
        <el-aside
          style="
            box-shadow: 20px 10px 20px -10px rgba(0, 0, 0, 0.15);
            background-color: #545c64;
            width: 200px;
            box-sizing: border-box;
            padding-left: 20px;
          "
        >
          <PageNav />
        </el-aside>
        <el-container>
          <el-main>
            <BreaDcrumb />
            <!-- <meNusTab /> -->
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineComponent, computed } from "vue";
import BreaDcrumb from "../isButs/breaDcrumb.vue";
import heaDer from "../isButs/heaDer.vue";
import PageNav from "../isButs/meNus.vue";
import meNusTab from "../isButs/meNusTab.vue";
</script>
<style lang="scss" scoped>
:deep.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  min-height: 94vh;
  width: unset;
}
:deep .el-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  // width: var(--el-aside-width,300px);
  overflow: hidden;
  width: unset;
}
.layout-container-demo {
  height: calc(100vh - 0px);
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
