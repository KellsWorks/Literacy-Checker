<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list class="mt-n2">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title class="text-uppercase font-weight-medium" v-text="title" />
      <v-spacer />
      <v-btn icon color="black"><v-icon>
        search
      </v-icon></v-btn>
      <v-btn icon color="black"><v-icon>
        notifications
      </v-icon></v-btn>
      <v-btn icon color="black"><v-icon>
        person
      </v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span class="text-uppercase">Computer Literacy & Familiarity Testing &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'space_dashboard',
          title: 'Dashboard',
          to: '/client/dashboard'
        },
        {
          icon: 'person',
          title: 'Accounts',
          to: '/client/accounts'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Computer Literacy & Familiarity Testing'
    }
  }
}
</script>
