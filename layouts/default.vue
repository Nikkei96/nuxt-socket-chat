<template>
  <v-app>
    <v-navigation-drawer app stateless v-model='drawer'>
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>
        <v-list-item v-for='u in users' :key='u.id'>
          <v-list-item-avatar>
            <v-img :src='u.avatar'></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text='u.name'></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color='u.id === 1 ? "primary" : "grey"'>mdi-message</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click='drawer = !drawer'></v-app-bar-nav-icon>
      <v-btn icon @click='exit'>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{user.room}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div style='height: 100%'>
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { AvatarGenerator } from 'random-avatar-generator'
export default {
  data() {
    return {
      drawer: true,

      users: [
        {
          id: 1,
          avatar: this.randomAvatar(),
          name: 'Nikita',
        },
        {
          id: 2,
          avatar: this.randomAvatar(),
          name: 'Eliza',
        },
      ],
    }
  },

  computed: {
    ...mapState(['user']),
  },

  methods: {
    ...mapMutations(['clearUser']),
    exit() {
      this.$router.push('/?message=leftChat')
      this.clearUser()
    },
    randomAvatar() {
      const generator = new AvatarGenerator()
      return generator.generateRandomAvatar()
    },
  },
}
</script>
