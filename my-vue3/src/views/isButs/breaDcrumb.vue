<template>
  <el-breadcrumb separator="/" class="layout-bread-crumb">
    <el-breadcrumb-item
      v-for="item in breadcrumb"
      :key="item.name"
      :to="!item.redirect ? item.path : ''"
      replace
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>
<script setup>
import { onMounted, ref, defineComponent, computed } from "vue";
import router from "@/router";
import { useRouter, useRoute } from "vue-router";
const breadcrumb = computed(() => {
  const matched = useRoute().matched.filter(
    (item) => item.meta && item.meta.title
  );
  return [...matched];
});
</script>

<style lang="scss" scoped>
.layout-bread-crumb {
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
}
</style>
