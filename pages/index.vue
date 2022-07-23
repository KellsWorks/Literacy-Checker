<template>
  <v-card width="400" class="mx-auto mt-10 justify-center">
    <v-card-text class="justify-center">
      <h3 class="text-center text-h6 text-uppercase font-weight-bold mb-3 pa-2 black--text">
        Computer Literacy & Familiarity Testing 
      </h3>
      <p class="text-body-1 text-center ma-5">Welcome back, continue your tests to check your computer literacy</p>
      <v-form>
        <v-text-field
          name="email"
          label="Email Address"
          outlined
          dense
          :rounded="false"
          color="black"
          active-class="black"
        ></v-text-field>

        <v-text-field
          name="password"
          label="Password"
          outlined
          dense
          :rounded="false"
          color="black"
          type="password"
          append-icon="visibility"
        ></v-text-field>
        

        <v-card-actions class="mt-n3">
          <v-checkbox color="black" class="text-body-1" label="Remember Me" v-model="value" value="value"></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn text class="text-body-1">Forgot Password</v-btn>
        </v-card-actions>

        <v-btn tile to="/client/dashboard" block color="black" flat class="elevetion-0" dark>Log in</v-btn>

        <v-btn text class="mt-3 text-body-1 text-capitalize">Do not have an account? <span class="blue--text ml-3">Register</span></v-btn>
        
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Dashboard',
  layout: 'base'
}
</script>
