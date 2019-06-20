import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/home/Home')
        }, {
          path: 'ecology',
          name: 'Ecology',
          component: () => import('@/views/ecology/Ecology')
        }, {
          path: 'lib',
          name: 'Lib',
          component: () => import('@/views/lib/Lib')
        }, {
          path: 'work',
          name: 'Work',
          component: () => import('@/views/work/WorkBench')
        }
      ]
    }
  ]
})
