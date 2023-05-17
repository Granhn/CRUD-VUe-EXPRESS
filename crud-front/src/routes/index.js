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
            path:'/update/:id',
            name:'Update',
            component: () => import('../views/UpdateUser.vue')
        }
    ]
});

export default router;