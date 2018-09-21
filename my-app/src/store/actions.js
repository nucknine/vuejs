import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(res => res.json())
    .then(res => {
      if (res) {
        commit('updateUser', { userFunds: res.funds, userStocks: res.userStocks })
        commit('setStocks', res.allStocks)
      }
    })
}
