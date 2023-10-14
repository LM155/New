<template>
  <div>
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="(tab, index) in tabs" :label="tab.label" :key="index">
        <!-- tab内容 -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ElTabs, ElTabPane } from "element-plus";

export default {
  components: {
    ElTabs,
    ElTabPane,
  },
  data() {
    return {
      activeTab: "", // 当前激活的tab
      tabs: [
        { label: "首页", name: "home", path: "/" },
        { label: "产品", name: "product", path: "/product" },
        { label: "订单", name: "order", path: "/order" },
      ],
    };
  },
  created() {
    // 监听路由变化，同步更新activeTab
    this.activeTab = this.$route.path;
    this.$watch(
      () => this.$route.path,
      (newValue) => {
        this.activeTab = newValue;
      }
    );
  },
  methods: {
    handleTabClick(path) {
      // 切换路由
      this.$router.push(path);
    },
  },
};
</script>