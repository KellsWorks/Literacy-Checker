<template>
  <div>
    <div class="pa-3" v-show="!showTest">

      <v-btn @click="showTest = !showTest" tile elevation="0" color="black white--text"> <v-icon>flag


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

                <v-app-bar-title class="text-uppercase">
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
                      <v-list-item-subtitle v-html="''+item.subtitle"></v-list-item-subtitle>
                      <v-card-actions>
                        <v-btn small dark tile class="black white--text">Retake</v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="red" class="mr-2">thumbs_up_down</v-icon>
                        40%
                        <v-icon color="blue" class="mr-2 ml-3">timer</v-icon>
                        5 Minutes
                      </v-card-actions>
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
                  <v-icon size="40" color="orange">category</v-icon>
                  <p class="white--text mt-3 text-h4">23</p>
                  <p class="white--text text-body-1">Completed</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card tile class="black">
                <v-card-text>
                  <v-icon size="40" color="blue">timer</v-icon>
                  <p class="white--text mt-3 text-h4">13:04:55</p>
                  <p class="white--text text-body-1">Total Time Elasped</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card tile class="black">
                <v-card-text>
                  <v-icon size="40" color="green">thumbs_up_down</v-icon>
                  <p class="white--text mt-3 text-h4">53%</p>
                  <p class="white--text text-body-1">Overall Rating</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-card class="mt-10" tile outlined>
            <v-toolbar class="black">
              <v-toolbar-title class="white--text text-uppercase">Available Tests</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark>
                <v-icon>help</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-subheader
                    v-if="item.header"
                    :key="index"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="item.id"
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
                      <v-list-item-subtitle v-html="''+item.subtitle"></v-list-item-subtitle>
                      <v-card-actions>
                        <v-btn small dark tile class="black white--text">Take</v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="blue" class="mr-2 ml-3">timer</v-icon>
                        5 Minutes
                      </v-card-actions>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
    <div v-show="showTest" class="pa-3">
      <v-btn @click="showTest = !showTest" tile elevation="0" text>
        <v-icon>arrow_left</v-icon> Go back
      </v-btn>

      <v-card-actions class="mb-3">

        <v-btn v-show="!timer.isRunning" flat dark color="black" @click="startTimer()" tile>Start test</v-btn>

        <v-btn v-show="timer.isRunning" flat dark color="red" @click="stopTimer()" tile>Exit test</v-btn>

        <v-spacer/>
        <v-card class="black" tile>
          <v-card-text class="text-h6 white--text">
            {{timer.hours}} : {{timer.minutes}} : {{timer.seconds}}
          </v-card-text>
        </v-card>
      </v-card-actions>

      <template>
        <v-stepper
          v-model="steps"
          vertical
          tile
          disabled
          outlined
        >
          <v-stepper-step
            :complete="steps > 1"
            step="1"
          >
            Typing Test
            <small>Type the following words into the text area below: </small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
              flat

            ></v-card>
            <v-btn
              color="primary"
              @click="steps = 2"
              tile
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="steps > 2"
            step="2"
          >
            Configure analytics for this app
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="steps = 3"
              tile
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
            :complete="steps > 3"
            step="3"
          >
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="steps = 4"
              tile
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            View setup instructions
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn
              color="primary"
              @click="steps = 1"
              tile
            >
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </template>
    </div>
  </div>
</template>

<script>

import {  watchEffect } from "vue";
import { useTimer } from 'vue-timer-hook';

export default {
    layout: 'client',
    methods: {
      startTimer(){
        this.timer = useTimer(new Date().setSeconds(new Date().getSeconds() + 600))
        this.timer.start()
        this.steps = 1
      },
      stopTimer(){
        this.timer.pause()
        this.timer = useTimer(new Date().setSeconds(0))
        this.steps = 0
      },
    },
    data(){

      return{
        showTest: false,
        timer: useTimer(new Date().setSeconds(0)),
        steps: 0,
        items: [
        {
          id: 1,
          title: '10 Mins Typing Test',
          subtitle: `&mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          id: 2,
          title: '20 Mins Typing Test',
          subtitle: `&mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          id: 3,
          title: '30 Mins Typing Test',
          subtitle: `&mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          id: 4,
          title: '40 Mins Typing Test',
          subtitle: `&mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
      ],
      }
    },

  mounted(){
    watchEffect(async () => {
    if(this.timer.isExpired.value) {
      console.warn('IsExpired')
    }
  })
  }
}
</script>

<style>

</style>