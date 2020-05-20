import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index.vue'
import ForError from '../pages/forError/forError.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '*',
      component: ForError
    }
  ]
})
