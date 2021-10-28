import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Welcome from '../pages/Welcome.vue'
import Users from '../pages/user/Users.vue'
import Rights from '../pages/power/Rights.vue'
import Roles from '../pages/power/Roles.vue'
import Cate from '../pages/goods/Cate.vue'
import Params from '../pages/goods/Params.vue'
import List from '../pages/goods/List.vue'
import Add from '../pages/goods/Add.vue'
import Order from '../pages/order/Order.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 路由重定向 默认页面为login
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [{
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: List
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log('beforeEnter', to, from)
  if (to.path === '/login') return next()
  if (!window.sessionStorage.getItem('token')) {
    next('/login')
  }
  next()
})
export default router
