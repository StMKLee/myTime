import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index.vue'
import ForError from '../pages/forError/forError.vue'
import tzfe from '../pages/2048/2048.vue'
import bcbke from '../pages/bcbke/bcbke.vue'
import cjzp from '../pages/cjzp/cjzp.vue'

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
    },
    {
      path: '/2048',
      component: tzfe
    },
    {
      path:'/bcbke',
      component: bcbke
    },
    {
      path:'/cjzp',
      component: cjzp
    }
  ]
})
