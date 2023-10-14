<template>
  <div style="background-color: #545c64">
    <el-row class="tac">
      <el-col>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1-0"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          v-for="(item, index) in pra.routesList"
          :key="index"
        >
          <el-sub-menu :index="index + 1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <!-- <el-menu-item-group title="Group One"> -->
            <el-menu-item-group v-for="(a, i) in item.children" :key="i">
              <el-menu-item :index="index + 1 + '-' + i" @click="url(a.path)">{{
                a.meta.title
              }}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineComponent, defineEmits } from "vue";
import router from "@/router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
console.log(...router.options.routes[2].children);
const pra = ref({
  routesList: [...router.options.routes[2].children],
});
// const emit = defineEmits(["urlFn"]);
const url = (item) => {
  router.push({ path: item });
  // emit("urlFn", item);
};
</script>
<style lang="scss" scoped>
:deep.el-header {
  --el-header-padding: 0 0px;
  --el-header-height: 60px;
  padding: var(--el-header-padding);
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
}

:deep.el-menu {
  border-right: unset;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: var(--el-menu-bg-color);
  box-sizing: border-box;
}
</style>
