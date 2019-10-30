import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import MapGetter from '@/views/MapGetter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/getter',
      name: 'MapGetter',
      component: MapGetter
    }
  ]
})
