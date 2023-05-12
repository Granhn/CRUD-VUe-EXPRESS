import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/prueba',
            name:'Prueba',
            component: () => import('../views/Prueba.vue')
        }
    ]
});

export default router;