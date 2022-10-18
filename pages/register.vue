<template>
    <v-card  tile width="400" class="mx-auto mt-10 justify-center">
      
      <v-card-text class="justify-center">
        
        <v-btn text class="text-center mb-3 pa-2 black--text">
          Computer Literacy & Familiarity Testing 
        </v-btn>
  
        <v-form ref="form">

            <v-text-field
            name="name"
            label="Username"
            v-model="userData.username"
            color="black"
            active-class="black"
            ></v-text-field>
  
          <v-text-field
            name="email"
            label="Email Address"
            v-model="userData.email"
            :rounded="false"
            color="black"
            active-class="black"
          ></v-text-field>
  
          <v-text-field
            name="password"
            label="Password"
            v-model="userData.password1"
            :rounded="false"
            color="black"
            :type="userData.showPassword ? 'text' : 'password'"
            :append-icon="userData.showPassword ? 'visibility' : 'visibility_off'"
            @click:append="userData.showPassword = !userData.showPassword"
            ></v-text-field>

            <v-text-field
                v-model="userData.password2"
                label="Confirm password"
                color="black"
                :append-icon="
                    userData.showPassword2 ? 'visibility' : 'visibility_off'
                "
                :type="userData.showPassword2 ? 'text' : 'password'"
                required
                @click:append="
                    userData.showPassword2 = !userData.showPassword2
                "
                ></v-text-field>
  
          <v-btn v-show="!loading" @click="signUp(userData)" tile block color="black" flat class="elevetion-0" dark>Register</v-btn>

          <v-progress-circular size="25" indeterminate color="black" v-show="loading"></v-progress-circular>
            
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {

    name: 'Register',
   
    layout: 'base',
   
    data(){
  
      return{
        userData: { username: '', email: '', password1: '', password2: '',
        showPassword: false,
        showPassword2: false, 
        },
        loading: false
      }
      
    },
    
    methods: {
        async signUp(registrationInfo) {

            this.loading = true

            await this.$axios
                .$post('/api/auth/register/', registrationInfo)
                .then((response) => {
                console.log(response)
                this.loading = false
                })
                .catch((error) => {
                console.log('errors:', error.response)
                this.loading = false
                })

            this.$auth.loginWith('local', {
                data: registrationInfo,
            })
        },
    },
  }
  </script>
  