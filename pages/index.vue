<template>
  <v-card width="500" class="mx-auto mt-10 justify-center">
    <v-card-text class="justify-center">
      <h3 class="text-center text-h6 text-uppercase font-weight-bold mb-3 pa-2 rounded green accent-3 white--text">
        Computer Literacy & Familiarity Testing 
      </h3>
      <p class="text-h5 text-center mb-3 text-uppercase">Login to Continue</p>
      <p class="text-body-1">Welcome back, continue your tests to check your computer literacy</p>
      <v-form>
        <v-text-field
          name="email"
          label="Email Address"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          name="password"
          label="Password"
          outlined
          dense
          type="password"
        ></v-text-field>
        

        <v-card-actions>
          <v-checkbox class="text-body-1" label="Remember Me" v-model="value" value="value"></v-checkbox>
          <v-spacer></v-spacer>
          <v-btn text class="text-body-1">Forgot Password</v-btn>
        </v-card-actions>

        <v-btn to="/client/dashboard" block color="primary" flat class="elevetion-0" dark>Sign in</v-btn>
        
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
