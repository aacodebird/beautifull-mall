<template>
 <div id="goodlist">
      
    <Gooditem v-for="item in goods" :gitem='item'/>
     
 </div>
 
</template>

<script>
import Gooditem from 'components/content/goods/gooditem.vue';


export default {
  name: 'Goodlist',
  props:{
      goods:{
          type:Array,
          default(){
              return[]
          }
      }

  },
  components: {
      Gooditem
  }
}
</script>

<style scoped>
#goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>