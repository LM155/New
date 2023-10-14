<template>
  <!-- :headers="headers" -->
  <a-upload  name="file" list-type="picture-card" class="avatar-uploader" :accept="'.png,.jpeg,.jpg'"
    :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :before-upload="beforeUpload"
    @change="handleChange">
    <img v-if="imageurl" :src="imageurl" alt="file" style="height: inherit;width:100%">
    <div v-else>
      <a-spin v-if="loading" />
      <div v-else class="ant-upload-text">
        <!-- <img src="/images/icon1.png"> -->
        <div style="font-size:14px; color:#BFBFBF">请上传</div>
      </div>
    </div>
  </a-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Spin, message } from "ant-design-vue";
// import { getToken } from '@/utils/auth'
const emit = defineEmits(["changeEvent"])
defineProps({
  imageurl: {
    type: String,
    default: ''
  }
})
const loading = ref(false)
// const headers = ref({
//   'Authorization': 'Bearer ' + getToken()
// })
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
  if (!isJpgOrPng) {
    console.error('仅支持jpg、jpeg、png格式图片上传')
  }
  return isJpgOrPng
}

const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    loading.value = true
  }
  if (info.file.status === 'done') {
    getBase64(info.file.originFileObj, (base64Url) => {
      // imageurl.value = base64Url
      emit("changeEvent",imageurl.value)
      loading.value = false
    })
  }
  if (info.file.status === 'error') {
    loading.value = false
    console.error('上传错误')
  }
}
const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

</script>
<style  scoped>
.upload_box {
  width: 104px;
  height: 104px;
  border-radius: 2px;
  background: #FAFAFA;
  border: 1px solid #D9D9D9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}

.upload_box span {
  margin-top: 10px;
}

.mask_box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  ;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .mask_icon {
    width: 20px;
    height: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.uploadid_img {
  width: 216px;
  height: 140px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  object-fit: cover;
}

.upload_box_id {
  position: relative;
  cursor: pointer;
}
</style>
<style>
.upload_img {
  width: 104px;
  height: 104px;
  object-fit: cover;
}

.upload_box .ant-image,
.upload_box_id .ant-image {
  display: none;
}

.plane_form_item .ant-upload-list {
  display: none;
}
</style>