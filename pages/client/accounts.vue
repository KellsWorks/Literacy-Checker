<template>
  <div class="pa-3">
    <v-card flat outlined tile>
      <v-toolbar color="black" dark>
        <v-toolbar-title class="text-uppercase">
          Client Account {{ this.$auth.strategy.token}}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <v-icon size="100" color="black">person</v-icon>
          </v-col>
          
        </v-row>
        
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    layout: 'client'
}
</script>

<style>

</style>