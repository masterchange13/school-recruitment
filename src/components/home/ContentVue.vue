<template>
    <div class="content"></div>
    <div v-for="item in items" :key="item.id">
        <ItemVue :item="item" @click="clickItem(item)"/>
    </div>    
</template>

<script setup>
    import { ref } from 'vue';
    import ItemVue from '../utils/ItemVue.vue'
    import { useRouter } from 'vue-router'

    const items = ref([
        { id: 1, title: 'Item 1', description: 'Description 1' },
        { id: 2, title: 'Item 2', description: 'Description 2' },
        { id: 3, title: 'Item 3', description: 'Description 3' },
        { id: 4, title: 'Item 4', description: 'Description 4' },
        { id: 5, title: 'Item 5', description: 'Description 5' },
        { id: 6, title: 'Item 6', description: 'Description 6' },
        { id: 7, title: 'Item 7', description: 'Description 7' },
        { id: 8, title: 'Item 8', description: 'Description 8' },
        { id: 9, title: 'Item 9', description: 'Description 9' },
        { id: 10, title: 'Item 10', description: 'Description 10' }
    ])

    const router = useRouter()
    const clickItem = (item) => {
        router.push({
            name: 'item',
            params: { id: item.id }, // 传递 id 作为路由参数
            query: { item: JSON.stringify(item) }  // 通过 query 传递整个 item 对象
    });
};


</script>