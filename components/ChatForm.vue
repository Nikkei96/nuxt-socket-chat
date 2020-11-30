<template>
  <v-flex>
    <v-text-field
      label='Введите сообщение'
      outlined
      v-model='text'
      @keydown.enter='send'
      style='max-width: 100px'
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    text: '',
  }),

  methods: {
    send() {
      this.$socket.client.emit(
        'createMessage',
        {
          text: this.text,
          id: this.$store.state.user.id,
        },
        data => {
          if (typeof data === 'string') {
            console.error(data)
          } else {
            this.text = ''
          }
        }
      )
    },
  },
}
</script>