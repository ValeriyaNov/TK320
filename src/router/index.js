import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/standart',
        name: 'standart',
        component: () =>
            import ('../views/StandartView.vue')
    },
    {
        path: '/perevod',
        name: 'perevod',
        component: () =>
            import ('../views/PerevodView.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/NewsView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('../views/ContactView.vue')
    },
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('../components/NotFound.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router