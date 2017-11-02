<template>
<div class="col-sm-12 col-lg-6 map-container hidden-sm-down">
        <gmap-map
        :center="center"
        :zoom="zoom"
        style="width: 100%; height: 100%;"
        >

    </gmap-map>
</div>
</template>

<script>
export default{
    props: ['locations'],
    data: function(){
        return{
            center:     {lat:19.432608, lng: -99.133209},
            zoom:       15
        }
    }
}
</script>