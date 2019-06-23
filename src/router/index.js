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
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Index')
      }, {
        path: '/ecology',
        name: 'ecology',
        component: () => import('@/views/ecology/Index')
      }, {
        path: '/lib',
        name: 'lib',
        component: () => import('@/views/lib/Index')
      }, {
        path: '/work',
        name: 'work',
        component: () => import('@/views/work/Index'),
        children: [{
          path: '/work/project',
          name: 'project',
          component: () => import('@/views/work/project/Index')
        }, {
          path: '/work/task',
          name: 'task',
          component: () => import('@/views/work/task/Index')
        }, {
          path: '/work/apply',
          name: 'apply',
          component: () => import('@/views/work/apply/Index')
        }, {
          path: '/work/approval',
          name: 'approval',
          component: () => import('@/views/work/approval/Index')
        }]
      }]
    }
  ]
})
