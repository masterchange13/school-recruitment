import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/LoginVue.vue')
    },
    {
        path: '/page',
        name: 'page',
        component: () => import('@/components/home/PageVue.vue')
    },
    {
        path: '/home',
        name: 'home',
        redirect: '/home/number',
        component: () => import('@/components/home/HomeVue.vue'),
        children: [
            {
                path: 'number',
                name: 'number',
                component: () => import('@/components/home/NumberVue.vue')
            },
            {
                path: 'content',
                name: 'content',
                component: () => import('@/components/home/ContentVue.vue')
            },
            {
                path: 'content2',
                name: 'content2',
                component: () => import('@/components/home/Content2Vue.vue')
            }
        ]
    },
    {
        path: '/item/:id',
        name: 'item',
        component: () => import('@/components/utils/ItemVue.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;