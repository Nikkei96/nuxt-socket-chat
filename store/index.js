export const state = () => ({
  user: {},
  messages: [],
  users: [],
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },

  clearData(state, user) {
    state.user = {}
    state.messages = []
    state.users = []
  },

  addMessage(state, mes) {
    state.messages.push(mes)
  },

  updUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  SOCKET_newMessage({ commit }, mes) {
    commit("addMessage", mes)
  },

  SOCKET_updateUsers({ commit }, users) {
    commit("updUsers", users)
  }
}
