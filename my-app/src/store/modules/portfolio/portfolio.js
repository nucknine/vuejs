const state = {
  user: {
    funds: 10000,
    name: 'user',
    stocks: []
  }
}
const getters = {
  getFunds: state => {
    return state.user.funds
  },
  getUserStocks: state => {
    return state.user.stocks
  }
}
const mutations = {
  updateUser: (state, payload) => {
    state.user.stocks = payload.userStocks
    state.user.funds = payload.userFunds
  },
  buyStocks: (state, payload) => {
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
    state.user.funds -= payload.stockSumm
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
}
const actions = {
  updateUserAsync: (context, payload) => {
    context.commit('updateUser', payload)
  },
  buyStocksAsync: (context, payload) => {
    context.commit('buyStocks', payload)
  },
  sellStocksAsync: (context, payload) => {
    context.commit('sellStocks', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
