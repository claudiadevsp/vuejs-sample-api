<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="place in placeHolder" :key="place.id">
      <PlaceHolder
        :title="place.title"            
    ></PlaceHolder>
    </div>
  </div>
</template>

<script>
import PlaceHolderApi from '@/services/PlaceHolderAPI'
import PlaceHolder from './components/PlaceHolder.vue'

export default {
  name: 'app',
  components: {    
    PlaceHolder
  },
  data() {
    return {
      placeHolder: []
    }
  },
  created() {
    let self = this
    PlaceHolderApi.getAllData(returnData => {
      self.placeHolder = returnData.data
    })
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
