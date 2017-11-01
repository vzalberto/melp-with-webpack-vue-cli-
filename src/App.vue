<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
      <b-row>
        <b-col>
          <gmap-map
            :center="{lat: this.lat, lng: this.lng}"
            :zoom="zoom"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          ></gmap-map>
        </b-col>
        <b-col>
          <label for=zoom>Zoom:</label>
          <input id=zoom v-model.number="zoom" type="number" min=0 max=21>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lat: 22.15556,
      lng: -100.98556,
      zoom: 8,
      center: {lat: this.lat, lng: this.lng}
    }
  }
}
</script>

<style>

</style>
