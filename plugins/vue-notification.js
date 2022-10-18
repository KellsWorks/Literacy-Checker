import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vue from 'vue'

Vue.use(VueToast, {
  position: 'top-right',
  queue: true,
  duration: 3500
})