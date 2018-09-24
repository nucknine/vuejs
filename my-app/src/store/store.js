import Vuex from 'vuex'
import Vue from 'vue'

import portfolio from './modules/portfolio/portfolio'
import stocks from './modules/stocks/stocks'
import auth from './modules/auth/auth'

import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules: {
    portfolio,
    stocks,
    auth
  }
})
