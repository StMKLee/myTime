// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
