import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http-bfa8c.firebaseio.com/'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
