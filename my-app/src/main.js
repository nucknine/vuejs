import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { store } from './store/store'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.http.options.root = 'https://vuejs-http-bfa8c.firebaseio.com/'

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
