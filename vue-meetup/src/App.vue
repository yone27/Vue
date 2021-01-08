<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" persistent>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLoguot">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-md-only hidden-lg-only"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to='/' tag="span" style="cursor: pointer">
          DevMeetup
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLoguot">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
    export default {
        data() {
            return {
                sideNav: false,
            }
        },
        computed: {
            menuItems() {
                let menuItems = [
                    {icon: 'face', title: 'Sign up', link: '/signup'},
                    {icon: 'lock_open', title: 'Sign in', link: '/signin'}
                ]
                if (this.userIsAuthenticated) {
                    menuItems = [
                        {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                        {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
                        {icon: 'person', title: 'Profile', link: '/profile'},
                    ]
                }
                return menuItems
            },
            userIsAuthenticated() {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            }
        },
        methods: {
            onLoguot() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
