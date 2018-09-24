import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import { store } from './store/store'
import { routes } from './routes'
// import VueResource from 'vue-resource'

Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.config.productionTip = false

// Vue.http.options.root = 'https://vuejs-http-bfa8c.firebaseio.com/'
Axios.defaults.baseURL = 'https://vuejs-http-bfa8c.firebaseio.com/'

Vue.filter('funds-filter', function (val) {
  return '$' + val.toLocaleString()
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
