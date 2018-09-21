import Vuex from 'vuex'
import Vue from 'vue'

import portfolio from './modules/portfolio/portfolio'
import stocks from './modules/stocks/stocks'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    portfolio,
    stocks
  }
})
