<template>
  <div class="page-vue"  @click="$emit('click', item)">
    <h1 class="head">{{ item.title }}</h1>
    <p class="content">{{ item.description }}</p>
    <hr>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

// 定义 props 以接受父组件传递的数据
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const route = useRoute();
let item = props.item;

// 如果路由中传递了 item 参数，则使用路由中的数据
if (route.query.item) {
  item = JSON.parse(route.query.item); // 解析 JSON 字符串为对象
}

</script>

<style scoped>
.head {
  color: yellow;
  text-align: center;
}
.content {
  text-align: center;
}
</style>
