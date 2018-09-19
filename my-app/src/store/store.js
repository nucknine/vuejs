import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      funds: 10000,
      name: 'user',
      stocks: []
    }
  },
  getters: {
    getFunds: state => {
      return state.user.funds
    },
    getUserStocks: state => {
      return state.user.stocks
    }
  },
  mutations: {
    buyStocks: (state, payload) => {
      state.user.funds -= payload.stockSumm
      let stock = {
        name: payload.stockName,
        quantity: payload.stockQuantity
      }
      // :todo separate
      state.user.stocks.push(stock)
    }
  },
  actions: {
    buyStocksAsync: (context, payload) => {
      context.commit('buyStocks', payload)
    }
  }
})
