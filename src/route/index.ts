import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/page/index.vue'),
        meta: {
            name: ''
        },
        children: [
            {
                path: '/',
                name: 'lists',
                component: () => import('@/page/lists.vue'),
                meta: {
                    name: ''
                }
            },
        ]
    }, {
        path: '/test',
        name: 'test',
        component: () => import('@/page/test.vue'),
        meta: {
        }
    },
    { path: "/:pathMatch(.*)", component: import('@/page/NotFound.vue') }

]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to:any, form: any, next: () => void) => {
    // const counter = useUserStore()
    next()
})

export default router;