<template>
    <div class="number">{{ data }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

// 接收来自父组件的 data 属性
const props = defineProps({
data: {
    type: Number,  // 可以根据需要调整类型，例如：Number 或 String
    default: '10'   // 如果父组件没有传递，使用默认值
}
})
</script>
