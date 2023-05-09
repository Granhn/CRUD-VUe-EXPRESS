import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Home',
            component: () => import('../components/Home.vue')
        },
        {
            path:'/prueba',
            name:'Prueba',
            component: () => import('../components/Prueba.vue')
        }
    ]
});

export default router;