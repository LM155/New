<template>
  <div class="clearfix">
    <a-upload v-model:file-list="fileList" action="https://moments-api.bjhuizhu.com" list-type="picture-card"
      @preview="handlePreview">
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel"
      wrap-class-name="full-modal">
      <img alt="example" style="width: 100%" :src="previewImage" :style="{
        transition: 2 + 's',
        transform: index == curr ? 'scaleX(' + 4 + ')' : 'scaleX(' + 1 + ')',
      }" />

    </a-modal>
    <swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="50"
      :autoplay="{ delay: 4000, disableOnInteraction: false }" :navigation="navigation" :pagination="{ clickable: true }"
      :scrollbar="{ draggable: false }" class="swiperBox" @slideChange="onSlideChange">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <div class="swiper-button-prev" @click.stop="prevEl(item, index)" />
      <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next" @click.stop="nextEl" />
      <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script lang="ts" setup>
import { PlusOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import { loginAPI } from "../../utils/api";


import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const prevEl = (item, index) => {
  // console.log('上一张' + index + item)
};
const nextEl = () => {
  // console.log('下一张')
};
// 更改当前活动swiper
const onSlideChange = (swiper) => {
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  console.log(swiper.activeIndex)
}

let user = ref({
  uer: 1234,
  password: 12344
})
const loginAPI = async () => {
  let res = await loginAPI({
    ...user,
  })
  console.log("***", res);
  let { list, pageNum, pageSize, total } = res.data
  console.log(list, pageNum, pageSize, total);
}


function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const fileList = ref<UploadProps['fileList']>([{ url: 'https://moments-api.bjhuizhu.com/oss/attach/video/2023/09/14/9420d202309141447291038.mp4', type: 'video', duration: '00:05' },
{ url: 'https://moments-api.bjhuizhu.com/oss/attach/video/2023/09/14/eb1d2202309141447343295.mp4', type: 'video', duration: '00:06' },
{ url: 'https://moments-api.bjhuizhu.com/oss/attach/images…2309141447457487.jpg?x-oss-process=style/mini_600', type: 'image' },
{ url: 'https://moments-api.bjhuizhu.com/oss/attach/images…2309141447459473.jpg?x-oss-process=style/mini_600', type: 'image' },
{ url: 'https://moments-api.bjhuizhu.com/oss/attach/images…2309141447477599.jpg?x-oss-process=style/mini_600', type: 'image' },
{ url: 'https://moments-api.bjhuizhu.com/oss/attach/images…2309141447571426.jpg?x-oss-process=style/mini_600', type: 'image' }
]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};


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
