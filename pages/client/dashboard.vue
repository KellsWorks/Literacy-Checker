<template>
  <div>
    <div class="pa-3" v-show="!showTest">

      <v-btn @click="showTest = !showTest" tile elevation="0" color="black white--text"> <v-icon>flag


      </v-icon> Take a test </v-btn>
      
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
                <template >

                  <v-list-item
                    v-for="(item, index) in userTests"
                    :key="index"
                  >
                    <v-list-item-avatar>
                      <v-icon class="black--text">category</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.test.title"></v-list-item-title>
                      <v-list-item-subtitle>{{`This test had ${item.test.questions.length} questions available`}}</v-list-item-subtitle>
                      <v-card-actions>

                        <v-btn small dark tile class="black white--text">Retake</v-btn>
                        
                        <v-spacer></v-spacer>
                        
                        <v-icon :color="item.score < 40 ? 'red' : 'green'" class="mr-2">thumbs_up_down</v-icon>
                        {{item.score}}%
                        
                        <v-icon color="blue" class="mr-2 ml-3">timer</v-icon>
                        {{item.test.duration}} Minutes
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
                  <p class="white--text mt-3 text-h4">{{userTests.length}}</p>
                  <p class="white--text">Completed</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card tile class="black">
                <v-card-text>
                  <v-icon size="40" color="blue">timer</v-icon>
                  <p class="white--text mt-3 text-h4">13:04:55</p>
                  <p class="white--text">Total Time Elasped</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card tile class="black">
                <v-card-text>
                  <v-icon size="40" color="green">thumbs_up_down</v-icon>
                  <p class="white--text mt-3 text-h4">{{rating}}%</p>
                  <p class="white--text">Overall Rating</p>
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
                <template >

                  <v-list-item
                  v-for="(item, index) in tests"
                  :key="index"
                  >
                    <v-list-item-avatar>
                      <v-icon class="black--text">category</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle>{{`${item.questions.length} questions available for this test`}}</v-list-item-subtitle>
                      <v-card-actions>
                        <v-btn @click="showTest = !showTest; selectedTest = item.id"  small dark tile class="black white--text">Take</v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="blue" class="mr-2 ml-3">timer</v-icon>
                        {{item.duration}} Minutes
                      </v-card-actions>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider></v-divider>
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

        <v-btn v-show="timer.isRunning" flat dark color="red" @click="stopTimer(tests[0].test)" tile>Exit test</v-btn>

        <v-spacer/>

        <v-card class="black" tile>
          <v-card-text class="text-h6 white--text">
            {{timer.hours}} : {{timer.minutes}} : {{timer.seconds}}
          </v-card-text>
        </v-card>

      </v-card-actions>

      <v-alert
        dense
        text
        type="success"
        color="black"
        icon="info"
        v-show="timer.isRunning"
      >
        <strong>Note:</strong> Do not close this page or refresh it otherwise your progress will be invalidated
      </v-alert>

      <template>
        <v-stepper
          v-model="steps"
          vertical
          tile
          disabled
          outlined
          v-for="(item, index) in tests"
          :key="index"
        >
          <v-stepper-step
            v-for="(item_, index_) in item.questions"
            :key="index_"
            :complete="index+1 < index"
            :step="index+1"
          >
            {{item.title}}
            <small>Type the following words into the text area below:</small>
          </v-stepper-step>

          <v-stepper-content :step="index+1" v-for="(item_, index_) in item.questions"
            :key="index_">
            <v-card
              color="grey lighten-4"
              class="mb-12"
              height="200px"
              flat

            >
            <v-card-text>

              <p>{{item_.content}}</p>

              <v-textarea v-model="content" color="black" label="Content">

              </v-textarea>
            </v-card-text>
            </v-card>
            <v-btn
              color="primary"
              @click="tests.length == index+1 ? stopTimer(tests[0].test) : steps = 2; content = ''"
              tile
              :disabled="content != item.content"
            >
              {{tests.length == index+1 ? 'Finish' : 'Continue'}}
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

import { useTimer } from 'vue-timer-hook';

export default {
  layout: 'client',
  methods: {
    startTimer(){
      this.timer = useTimer(new Date().setSeconds(new Date().getSeconds() + 600))
      this.timer.start()
      this.steps = 1
    },
    stopTimer(item){
      this.timer.pause()

      let finalScore = ((this.timer.minutes / 10) * 100)

      this.score = finalScore
      
      this.$toast.open({
        message: finalScore < 50 ? `Oops! You failed by ${finalScore}% on this test. Please try again` : `Congratulations🎉️ You scored ${finalScore}% on this test`,
        type: finalScore < 50 ? 'error' : 'success'
      })
      this.steps = 0

      this.timer = useTimer(new Date().setSeconds(0))

      this.recordResults(item)
    },
    loadTest(){
      this.$axios.$get('api/tests/').then((response) => {
        this.tests = response.tests
      }).catch((error) => {
        console.log(error)
      })
    },
    async fetchUser(){
      let response = await this.$auth.fetchUser()

      if(response.data){
        console.log(response.data)
      }
    },
    
    async recordResults(item){
      this.$axios.$post('api/tests/user-tests', { 'test_id': item.id, 'score': this.score, user: this.$auth.user.pk }).then((response) => {
        this.tests = response.tests
      }).catch((error) => {
        console.log(error)
      })
    },
    async fetchUserTests(){
      this.$axios.$get('api/tests/user-tests').then((response) => {
        this.userTests = response.tests

        this.userTests.forEach((item, index) => {
          
          this.rating = this.rating + item.score / this.userTests.length

        })
      }).catch((error) => {
        console.log(error)
      })
    }
  },

  mounted() {
    this.loadTest()
    this.fetchUser()
    this.fetchUserTests()
  },

  data(){

    return{
      showTest: false,
      timer: useTimer(new Date().setSeconds(0)),
      steps: 0,
      selectedTest: '',
      content: '',
      tests: [],
      userTests: [],
      rating: 0,
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
    score: ''
    }
  },
  watch(){
    if(this.timer.isExpired.value) {
      this.steps = 0
    }
  }
}
</script>

<style>

</style>