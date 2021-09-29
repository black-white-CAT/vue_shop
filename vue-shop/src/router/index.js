import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Welcome from '../pages/Welcome.vue'
import Users from '../pages/user/Users.vue'
import Rights from '../pages/power/Rights.vue'
import Roles from '../pages/power/Roles.vue'
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
      }
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
