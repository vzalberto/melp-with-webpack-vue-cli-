import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import Header from './components/Header.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/style.css'

Vue.use(BootstrapVue);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY'
  }
})

Vue.component('app-header', Header)

new Vue({
  el: '#app',
  render: h => h(App)
})
