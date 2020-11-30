export const state = () => ({
  user: {},
  messages: [
    { text: '1sagsag' },
    { text: '1sagsag' },
    { text: '1sagsag' },
    { text: '1sagsag' },
  ]
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },

  clearUser(state, user) {
    state.user = {}
    state.messages = {}
  }
}

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('message', data)
  }
}