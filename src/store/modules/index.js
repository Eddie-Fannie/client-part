import Axios from '@/assets/js/ajax'
const state = { // 要设置的全局访问的state对象
  User: {}
}

const getters = {
  User: state => state.User
}
const mutations = {
  setUser(state, payload) {
    state.User = payload
  }
}

const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
