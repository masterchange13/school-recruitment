import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory,
    routes: routes
})

export default router;