<template>
    <QuillEditor ref="QuillEditorRef" :options="options" :content="textarea" content-type="html"
        @update:content="textChange" />
</template>
<script setup>
import {
    QuillEditor
} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { getCurrentInstance, onMounted, onUnmounted, ref, defineEmits } from "vue";
const options = ref({

    debug: 'info',
    modules: {
        // toolbar: ['bold', 'italic', 'underline'],
    },
    placeholder: '请输入需要的内容',
    readOnly: false,
    theme: 'snow',
}
)
const Emits = defineEmits()
const textarea = ref()
const timer = ref()
const textChange = (e) => {
    if (timer.value) {
        clearTimeout(timer.value)
    } // 每次进来的时候都将之前的清除掉，如果还没到 600毫秒(600毫秒自定义) 的时候就将之前的清除掉，这样就不会触发之前setTimeout绑定的事件， 如果超过 600豪秒，之前的事件就会被触发下次进来的时候同样清除之前的timer
    timer.value = setTimeout(() => { //箭头函数 注意this
        // 在这里进行我们的操作  这样就不会频繁的进行我们这里面的操作了
        var value = e;
        var detail = {
            "value": value
        };
        var options = {};
        textarea.value = e
        // console.log(e, '参数98', textarea.value);
        Emits("changeEmits", textarea.value)
    }, 600)

}

</script>