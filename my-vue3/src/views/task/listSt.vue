<template>
  <div class="echarts-box">
    <div id="capture" ref="divDom">
      <div id="myEcharts" :style="{ width: '300px', height: '300px' }"></div>
      <img :src="img">
    </div>
    <button @click="weeklyReport">保存</button>
    <el-upload v-model:file-list="fileList" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      width="1000px" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
      :on-success="success" :auto-upload="false">
      <!-- <template #file="{ file }" >
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <video class="el-upload-list__item-thumbnail" :src="file.url" alt="">
          </video>
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <el-icon><zoom-in /></el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
              <el-icon>
                <Download />
              </el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <el-icon>
                <Delete />
              </el-icon>
            </span>
          </span>
        </div>
      </template> -->
    </el-upload>
    <!-- <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
     <video :src="dialogImageUrl"></video>
    </el-dialog> -->
    <el-image-viewer v-if="dialogVisible" :url-list="[dialogImageUrl]" :initial-index="initialIndex" @close="close" />
    
    <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="amount1" sortable label="Amount 1" />
      <el-table-column prop="amount2" sortable label="Amount 2" />
      <el-table-column prop="amount3" sortable label="Amount 3" />
    </el-table>

    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="amount1" label="Amount 1" />
      <el-table-column prop="amount2" label="Amount 2" />
      <el-table-column prop="amount3" label="Amount 3" />
    </el-table>
  </div>
</template>

<script setup>
// 导入 ECharts
import * as echarts from "echarts";
import { getCurrentInstance, onMounted, onUnmounted, ref } from "vue";
const currentInstance = getCurrentInstance()
let myEcharts = echarts;

// <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
//       <el-table-column prop="id" label="ID" width="180" />
//       <el-table-column prop="name" label="Name" />
//       <el-table-column prop="amount1" sortable label="Amount 1" />
//       <el-table-column prop="amount2" sortable label="Amount 2" />
//       <el-table-column prop="amount3" sortable label="Amount 3" />
//     </el-table>

//     <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
//       <el-table-column prop="id" label="ID" width="180" />
//       <el-table-column prop="name" label="Name" />
//       <el-table-column prop="amount1" label="Amount 1" />
//       <el-table-column prop="amount2" label="Amount 2" />
//       <el-table-column prop="amount3" label="Amount 3" />
//     </el-table>
const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
]






// 挂载时初始化图表
onMounted(() => {
  initChart();
});

// 卸载时销毁图表
onUnmounted(() => {
  // 销毁图表
  myEcharts.dispose;
});

const initChart = () => {
  // 基于准备好的dom，初始化echarts实例
  let chart = myEcharts.init(
    document.getElementById("myEcharts"),
    "purple-passion"
  );
  chart.setOption({
    // 设置图表的标题
    title: {
      // 设置标题文本
      text: "2021年各月份销售量（单位：件）",
      // title 组件离容器左侧的距离
      left: "center",
    },
    // 设置图表的 X 轴
    xAxis: {
      // 数据类型为离散的类目数据
      type: "category",
      // 设置 X 轴数据
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
    // 设置提示框组件
    tooltip: {
      // 设置提示框的触发条件
      trigger: "axis",
    },
    // 设置图表的 Y 轴
    yAxis: {
      // 数据类型为连续的数值数据
      type: "value",
    },
    // 设置图表的图例
    series: [
      {
        // 图例中要展示的数据
        data: [606, 542, 985, 687, 501, 787, 339, 706, 383, 684, 669, 737],
        // 设置图表的类型为折线图
        type: "line",
        // 平滑曲线
        smooth: true,
        // 在顶部显示数据
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}",
            },
          },
        },
      },
    ],
  });
  // 大小自适应窗口大小变化
  window.onresize = function () {
    // 重置容器高宽
    chart.resize();
  };
};
import html2canvas from 'html2canvas'
const img = ref("https://tse1-mm.cn.bing.net/th/id/OIP-C.cykW2JFIAZEv6vWFflfjygHaEZ?pid=ImgDet&rs=1")
const base64img = ref()
const weeklyReport = () => {
  console.log('生成周报')
  html2canvas(document.querySelector('#capture'), {
    backgroundColor: "#ffffff",
    allowTaint: true,  //开启跨域
    useCORS: true,
    scrollY: 0,
    scrollX: 0,
  }).then((canvas) => {
    // 转换成base64格式，这个格式可以挂载到img里，也可以下载下来，也可以打压缩包下载下来
    const base64 = canvas
      .toDataURL()
      .replace(/^data:image\/(png|jpg);base64,/, '')
    base64img.value = `data:image/png;base64,${base64}`
    console.log(base64img.value)

    // if (window.navigator.msSaveOrOpenBlob) {

    //   let bstr = atob(base64img.value.split(",")[1]);
    //   let n = bstr.length;
    //   let u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   let blob = new Blob([u8arr]);
    //   window.navigator.msSaveOrOpenBlob(blob, "周报" + "." + "pdf");
    // } else {
    //   // 这里就按照chrome等新版浏览器来处理
    //   let a = document.createElement("a");
    //   a.href = base64img.value;
    //   a.setAttribute("download", "周报");
    //   a.click();
    // }
  });
}

import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import UploadFile from 'element-plus'
import { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.mp4',
    url: 'https://moments-api.bjhuizhu.com/oss/attach/video/2023/09/14/9420d202309141447291038.mp4',
  },
])

// const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const initialIndex = ref("")
const dialogImageUrl = ref([])

const handleRemove = (UploadFile) => {
  let index = fileList.value.findIndex(item => item.uid === UploadFile.uid)
  console.log(UploadFile, fileList.value, index)
  // fileList.value.splice(index, 1)
}

const handlePictureCardPreview = (UploadFile) => {
  let index = fileList.value.findIndex(item => item.uid === UploadFile.uid)
  initialIndex.value = index
  let list = []
  fileList.value.forEach(item => {
    list.push(item.url)
  })
  dialogImageUrl.value = list

  // dialogImageUrl.value = UploadFile.url
  dialogVisible.value = true
}

const handleDownload = (UploadFile) => {
  console.log(UploadFile)
}
const success = (e) => {
  console.log('上传成功', e)
}
const close = (e) => {
  console.log('关闭', e)
  dialogVisible.value = false
}
</script>
