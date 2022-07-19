<template>
  <div class="pa-3">

    <v-btn tile elevation="0" color="black white--text"> <v-icon>flag


    </v-icon> Take a test</v-btn>
    
    <v-row>
      <v-col cols="4">
        <template>
          <v-card
            
            flat
            class="mt-5"
            tile
            outlined
          >
            <v-toolbar
              color="black"
              flat
              dark
            >
              <v-app-bar-nav-icon>
                <v-icon>category</v-icon>
              </v-app-bar-nav-icon>

              <v-app-bar-title>
                Recent Tests
              </v-app-bar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <v-icon class="black--text">category</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </template>
      </v-col>


      <v-col cols="8">
        <v-row>
          <v-col cols="4">
            <v-card tile class="black">
              <v-card-text>
                <v-icon size="40" color="white">category</v-icon>
                <p class="white--text mt-3 text-h4">23</p>
                <p class="white--text text-body-1">Completed</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card tile class="black">
              <v-card-text>
                <v-icon size="40" color="white">timer</v-icon>
                <p class="white--text mt-3 text-h4">13:04:55</p>
                <p class="white--text text-body-1">Total Time Elasped</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card tile class="black">
              <v-card-text>
                <v-icon size="40" color="white">thumbs_up_down</v-icon>
                <p class="white--text mt-3 text-h4">53%</p>
                <p class="white--text text-body-1">Rating</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="mt-10" tile>
          <v-toolbar class="black">
            <v-toolbar-title class="white--text">Tests Activities</v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    layout: 'client',
    data(){

      return{
        items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '10 Mins Typing Test',
          subtitle: `<span class="text--white rounded pa-1 red mb-2">Failed</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        
      ],
      }
    }
}
</script>

<style>

</style>