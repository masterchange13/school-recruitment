<template>
  <div class="common-layout">
    <el-container>
    
      <el-header>
        <HeaderVue/>
      </el-header>
      <!-- 下划线 -->
      <el-divider></el-divider>
      <el-container>
        <el-aside width="200px">
            <img src="https://avatars.githubusercontent.com/u/100202991?v=4" alt="" class="image">
            <NavigateVue></NavigateVue>
        </el-aside>
        <!-- 右划线 -->
        <el-divider direction="vertical"></el-divider>
        <el-main>
            <LayoutVue></LayoutVue>
        </el-main>
      </el-container>
      <el-divider></el-divider> 
      <el-footer><strong>Powed by Mao</strong></el-footer>
    </el-container>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    import NavigateVue from '../utils/NavigateVue.vue'
    import LayoutVue from '../utils/LayoutVue.vue'
    import HeaderVue from '../utils/HeaderVue.vue'
</script>

<style>
    .common-layout{
        text-align: center;
        background-color: #41bccc;
    }
    .image{
        width: 100px;
        height: 100 px;
        /* 圆角 */
        border-radius: 50%;
    }
</style>