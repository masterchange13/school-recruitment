<template>
    <div class="content">
        <el-container>
            <el-header class="header">校园招聘网</el-header>
            <el-container>
                <el-aside width="200px" class="aside">
                    <NavigateVue/>
                </el-aside>   
                <el-main class="main">
                    <router-view/>
                </el-main>
            </el-container>
            <!-- <router-view/> -->
            <el-footer class="fonter">created by mao</el-footer>
        </el-container>
    </div>
</template>

<script setup>
    import NavigateVue from '../utils/NavigateVue.vue'
</script>

<style scoped>
    .common-layout {
        display: flex;
        flex-direction: column;
        justify-content: center; /* 垂直居中 */
        align-items: center; /*水平居中*/
        height: 100vh; /* 使容器高度为视口高度 */
        margin: 0; /* 取消 margin-top */
        background-color: rgb(137, 211, 201);
    }
    .content{
        background-color:  rgb(137, 211, 201);
        height: 100vh;
        margin-top: 0px;
    }
    /* 水平居中 */
    .header{
        text-align: center;
        font-size: 30px;
        color: rgb(255, 255, 255);
    }
    .fonter{
        text-align: center;
        /* 距底部恒为20px */
        position: absolute;
        bottom: 5px;
        margin-left: 45%;
        position: fixed;
        background-color: rgb(98, 174, 218);
        width: 100%;
    }
    .main{
        background-color: rgb(255, 255, 255);
        margin-bottom: 0px;
        margin-right: 10px;
        margin-top: 0px;
    }
    .aside{
        /* position: fixed; */
    }
</style>