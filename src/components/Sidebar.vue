<template>
        <div class="col-sm-12 col-lg-6 sidebar">

            <div class="row location-filter">

                <div class="col-sm-4">
                     Sort by:
                         <select v-model="sortBy">
                             <option value="rating">Rating</option>
                             <option value="name" selected>Name</option>
                         </select>
                </div>

                <div class="col-sm-4">
                        Order:
                        <select v-model="orderBy">
                            <option value="asc">Ascending</option>
                            <option value="des" selected>Descending</option>
                        </select>
                 </div>

                 <div class="col-sm-4">
                     Search: <input v-model="searchQuery">
                 </div>
            </div>
                     <template v-for="location in filteredLocations">
                         <div class="row location-info">

                            <div class="col-sm-12 location-name">
                                <hr>
                                <p>{{ location.name }}<star-rating v-model="location.rating" :read-only=true :show-rating=false :star-size=20></star-rating></p>
                            </div>
                            
                            <div class="col-sm-6 location-address">
                                <p>{{ location.address.street }}</p>
                                <p>{{ location.address.city }}</p>
                                <p>{{ location.address.state }}</p>
                            </div>
                        
                            <div class="col-sm-6 location-contact">
                                <a :href="location.contact.site" target="_blank">{{ location.contact.site }}</a>&nbsp;🖥
                                <br>
                                <a :href="'mailto:'+location.contact.email">{{ location.contact.email }}</a>&nbsp;📬
                                <br>
                                <a :href="'phone:'+location.contact.phone">{{ location.contact.phone }}</a> &nbsp;📞  
                            </div>

                         </div>
                     </template>
        </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  props: ['locations'],
  data () {
    return {
      sortBy:    'rating',
      orderBy:    'des',
      searchQuery: ''
    }
    },
    computed: {

        orderedLocations: function () {
            if (this.orderBy === 'asc')
                return _.sortBy(this.locations, this.sortBy)
            else
                return _.sortBy(this.locations, this.sortBy).reverse()
        },

        filteredLocations: function(){
            return this.orderedLocations.filter((element) => {
                return element.name.match(new RegExp(this.searchQuery, 'i'));
            });
        }
    },
    components: {
        StarRating
    }
}
</script>

<style>

</style>
