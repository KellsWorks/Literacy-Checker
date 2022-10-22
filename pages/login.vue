<template>
    <v-card tile width="400" class="mx-auto mt-10 justify-center">
      
      <v-card-text class="justify-center">
        
        <v-btn text class="text-center mb-3 pa-2 black--text">
          Computer Literacy & Familiarity Testing 
        </v-btn>
  
        <v-form ref="form">
  
          <v-text-field
            name="name"
            label="Username"
            v-model="userData.username"
            :rounded="false"
            color="black"
            active-class="black"
          ></v-text-field>
  
          <v-text-field
            name="password"
            label="Password"
            v-model="userData.password"
            :rounded="false"
            color="black"
            :type="userData.showPassword ? 'text' : 'password'"
            :append-icon="userData.showPassword ? 'visibility' : 'visibility_off'"
            @click:append="userData.showPassword = !userData.showPassword"
          ></v-text-field>
  
          <v-btn @click="logInUser(userData)" tile block color="black" flat class="elevetion-0" dark>Log in</v-btn>
  
          <v-btn text class="mt-3 text-body-1 text-capitalize" to="/register">Do not have an account? <span class="blue--text ml-3">Register</span></v-btn>
          
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
   
    layout: 'base',
  
    auth: 'guest',
   
    data(){
  
      return{
        userData: { username: '', email: '', password: '', showPassword: false },
      }
    },
    
    methods: {
      
      async logInUser(userData) {
        try {
          let response = await this.$auth.loginWith('local', {
            data: userData,
          })
  
          if(response.data){
  
            this.$auth.setUser(response.data.user)
            this.$auth.$storage.setUniversal('loggedIn', true)
            this.$auth.strategy.token.set(response.data.access)
            
            console.log(response)
  
            this.$router.push({
              path: '/client/dashboard',
            });
          }
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
  </script>
  