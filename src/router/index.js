import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/test0503'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
