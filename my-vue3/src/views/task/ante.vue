<template>
  <div class="clearfix">
    <AupLoad :imageurl="imageurl" @changeEvent="changeEvent"> </AupLoad>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import AupLoad from "../../components/AupLoad/AupLoad.vue";
const imageurl = ref("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png")
const changeEvent = (e) => {
  console.log(e)
}
</script>
<style >
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }

  .ant-modal-content {
    display: flex;
    flex-direction: column;
  }

  .ant-modal-body {
    flex: 1;
  }
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
