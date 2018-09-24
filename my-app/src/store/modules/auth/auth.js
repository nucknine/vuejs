import axios from '../../../axios-auth'
import globalAxios from 'axios'

const state = {
  idToken: null,
  userId: null,
  authUser: null
}

const getters = {

}

const mutations = {
  authUser: (state, user) => {
    console.log(user)
    state.idToken = user.token
    state.userId = user.userId
  }
}

const actions = {
  signup: ({ commit, dispatch }, userData) => {
    axios.post('/signupNewUser?key=AIzaSyDqzKSwM2zgj2Y8OoLq_WCOmql5CW5GvmY',
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
        const data = res.data

        commit('authUser', {
          token: data.idToken,
          userId: data.localId
        })

        dispatch('storeUser', userData)
      })
  },
  storeUser: ({ state }, userData) => {
    console.log(state.idToken)
    if (!state.idToken) {
      return
    }
    globalAxios.post('./users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
    // commit('storeUser')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
