import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/international',
      name: 'international',
      component: () => import('@/components/International.vue')
    },
    {
      path: '/sindo',
      name: 'sindo',
      component: () => import('@/components/Sindo.vue')
    },
    {
      path: '/sindo/:url',
      name: 'sindo-show',
      component: () => import('@/components/SindoShow.vue')
    },
    {
      path: '/covid',
      name: 'covid',
      component: () => import('@/components/Covid.vue')
    }
  ]
})
