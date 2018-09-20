import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allStocks: [
      { name: 'BMW', price: 75 },
      { name: 'Apple', price: 250 },
      { name: 'Google', price: 200 },
      { name: 'Twitter', price: 25 }
    ],
    user: {
      funds: 10000,
      name: 'user',
      stocks: []
    }
  },
  getters: {
    getAllStocks: state => {
      return state.allStocks
    },
    getFunds: state => {
      return state.user.funds
    },
    getUserStocks: state => {
      return state.user.stocks
    }
  },
  mutations: {
    updateUser: (state, payload) => {
      state.user.stocks = payload.userStocks
      state.user.funds = payload.userFunds
    },
    endDay: (state, payload) => {
      function newPrice (price) {
        let num = Math.floor(Math.random() * 30 + 1)
        let op = Math.floor(Math.random() * 2)

        switch (op) {
          case 0 : return price + num
          case 1 : return price - num
        }
      }

      state.allStocks.forEach(x => { x.price = newPrice(x.price) })
    },
    buyStocks: (state, payload) => {
      state.user.funds -= payload.stockSumm
      let stock = {
        name: payload.stockName,
        quantity: payload.stockQuantity * 1
      }
      let userStock = state.user.stocks.find(x => x.name === stock.name)

      if (userStock) {
        userStock.quantity += stock.quantity
      } else {
        state.user.stocks.push(stock)
      }
    },
    sellStocks: (state, payload) => {
      payload.stockQuantity *= 1
      let userStockIndex = state.user.stocks.findIndex(x => x.name === payload.stockName)
      let userStockQuantity = state.user.stocks[userStockIndex].quantity
      if (userStockQuantity < payload.stockQuantity) {
        return 0
      } else if (userStockQuantity === payload.stockQuantity) {
        state.user.stocks.splice(userStockIndex, 1)
        state.user.funds += payload.stockSumm
      } else {
        state.user.funds += payload.stockSumm
        state.user.stocks[userStockIndex].quantity -= payload.stockQuantity
      }
    }
  },
  actions: {
    updateUserAsync: (context, payload) => {
      context.commit('updateUser', payload)
    },
    buyStocksAsync: (context, payload) => {
      context.commit('buyStocks', payload)
    },
    sellStocksAsync: (context, payload) => {
      context.commit('sellStocks', payload)
    },
    endDayAsync: (context, payload) => {
      context.commit('endDay', payload)
    }
  }
})
