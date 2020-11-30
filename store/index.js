export const state = () => ({
  user: {},
  messages: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },

  clearUser(state, user) {
    state.user = {}
    state.messages = []
  },

  addMessage(state, data) {
    state.messages.push(data)
  }
}

export const actions = {
  SOCKET_newMessage({ commit }, data) {
    commit("addMessage", data)
  }
}
