<template>
 <div id="App">
   <router-view/>
     <Taba/>
 </div>
 
</template>

<script>
import Taba from 'components/content/taba.vue'

export default {
  name: 'App',
  components: {
    Taba
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
