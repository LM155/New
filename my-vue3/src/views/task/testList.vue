<template>
  <div class="home">
    <QuillEditor @change="(html) => { html为更新值 }" :html="默认值" @changeEmits="changeEmits"></QuillEditor>
    <div class="dialog_wrap" v-dialogDrag="true">
      // 整个区域
      <div class="dialog_content">
        // 可按下拖动的位置
        <div class="dialog_header">
          //...
        </div>
        // 其他
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from "vue";
import QuillEditor from "../../components/QuillEditor/QuillEditor.vue"
const changeEmits = (e) => {
  console.log("changeEmits", e)
}
</script>
<style  scoped>
.dialog_content {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 392Px;
  height: 580Px;

}

.dialog_header {
  height: 50Px;
  width: 100%;
}
</style>