// import Vue from 'vue'
import axios from 'axios'

export const loadData = ({ commit }) => {
  // Vue.http.get('data.json')
  //   .then(res => res.json())
  //   .then(res => {
  //     if (res) {
  //       commit('updateUser', { userFunds: res.funds, userStocks: res.userStocks })
  //       commit('setStocks', res.allStocks)
  //     }
  //   })

  axios.get('data.json')
    .then(res => {
      const data = res.data
      if (data) {
        commit('updateUser', { userFunds: data.funds, userStocks: data.userStocks })
        commit('setStocks', data.allStocks)
      }
    })
}
