import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'ljh',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
