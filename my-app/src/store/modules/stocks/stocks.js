import { stocks } from '../../../data/stocks'

const state = {
  allStocks: []
}

const getters = {
  getAllStocks: state => {
    return state.allStocks
  }
}

const mutations = {
  setStocks: state => {
    state.allStocks = stocks
  },
  updateStocks: (state, payload) => {
    state.allStocks = payload
  },
  endDay: (state, payload) => {
    function newPrice (price) {
      let num = Math.floor(Math.random() * 30 + 1)
      let op = Math.floor(Math.random() * 2)
      if (price - num < 0) {
        return price + num
      }
      switch (op) {
        case 0 : return price + num
        case 1 : return price - num
      }
    }
    state.allStocks.forEach(x => { x.price = newPrice(x.price) })
  }
}

const actions = {
  updateStocksAsync: (context, payload) => {
    context.commit('updateStocks', payload)
  },
  endDayAsync: (context, payload) => {
    context.commit('endDay', payload)
  },
  setStocksAsync: ({ commit }) => {
    commit('setStocks')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
