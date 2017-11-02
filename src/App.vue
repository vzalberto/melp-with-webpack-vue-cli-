<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar :locations=locations></app-sidebar>
        <location-map :locations=locations></location-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      locations: []
    }
  },
  methods: {
        fetchLocations(){
            this.$http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json', )
              .then(response => {
                return response.json();
              })
              .then(data => {
                this.locations = data;
              });
          }
    },
      beforeMount(){
          this.fetchLocations();
    },
}
</script>