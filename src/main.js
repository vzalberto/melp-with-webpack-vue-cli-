window._ = require('underscore')

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import LocationMap from './components/LocationMap.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'

Vue.use(VueResource);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY'
  }
})

Vue.component('app-header', Header)
Vue.component('app-sidebar', Sidebar)
Vue.component('location-map', LocationMap)

new Vue({
  el: '#app',
  render: h => h(App)
})
