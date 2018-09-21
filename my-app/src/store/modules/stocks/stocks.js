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
    state.allStocks.forEach(x => { x.price = Math.round(x.price * (1 + Math.random() - 0.5)) })
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
