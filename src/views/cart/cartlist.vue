<template>
 <div class="cartlist">
       
    <cartitem v-for="(item,index) in carlist" :product='item' :key='index'/>

        

    
   
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll.vue";
import cartitem from './cartitem.vue'

export default {
  name: 'cartlist',
  data(){
    return{
      counter:{}
    }
  },
  computed:{
    ...mapGetters(['carlength','carlist'])

  },
  components: {
    cartitem,
    Scroll
  }
}
</script>

<style scoped>
.carlist{
  position: relative;
}


</style>
