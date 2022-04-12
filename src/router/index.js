import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Profile = () => import('../views/profile/profile.vue')
const cart = () => import('../views/cart/cart.vue')
const detail = () => import('../views/detail/detail.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]
const router = new VueRouter({

    routes,
    mode: 'history'
})
export default router

