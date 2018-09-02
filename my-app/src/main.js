import Vue from 'vue'
import App from './App.vue'

export const EventBus = new Vue({
  data: function () {
    return {
      quoteCounter: 0,
      barWidth: 0
    }
  },
  methods: {
    increseCnt () {
      this.$emit('incCnt')
    },
    decreseCnt () {
      this.$emit('decCnt')
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
