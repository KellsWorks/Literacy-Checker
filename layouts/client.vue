<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      class="white"
      style="border-bottom: 1px solid #EEEEEE !important;"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title class="text-uppercase font-weight-medium" v-text="title" />
      <v-spacer />
      <v-col cols="12" sm="6">
          <v-text-field
            outlined
            label="Search for tests"
            prepend-inner-icon="search"
            clearable
            dense
            filled
            class="mt-5"
            color="black"
            v-show="showSearch"
          ></v-text-field>
      </v-col>
      <v-btn @click="showSearch = !showSearch" icon color="black"><v-icon>
        search
      </v-icon></v-btn>
      <v-btn icon color="black"><v-icon>
        notifications
      </v-icon></v-btn>
      
      <template>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-on="on" v-bind="attrs" icon color="black"><v-icon>
                person
              </v-icon></v-btn>
            </template>
            <v-list>
              <v-list-item
              >
                <v-list-item-icon>
                  <v-icon size="20" color="black">logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-n4">Log Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-app-bar>

    <v-divider></v-divider>

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
      style="border-top: 1px solid #EEEEEE !important;"
      color="white"
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
      showSearch: false,
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
