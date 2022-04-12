<template>
 <div id="Tabcontrol">
         <div v-for="(item,index) in titles" 
         class="Tabcontrol-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
             <span >{{item}}</span>
         </div>
 </div>
 
</template>

<script>


export default {
  name: 'Tabcontrol',
  props:{
      titles:{
           type: Array,
        default() {
          return []
        }
      }
  },
  data(){
      return{
          currentIndex:0
      }
  },
  methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    },
  components: {
  }
}
</script>

<style scoped>
#Tabcontrol{
    display: flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;    
}
.Tabcontrol-item{
    flex: 1;
}
.tab-control-item span {
    padding: 5px;
  }
  .active {
    color:  var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid  var(--color-tint);
  }

</style>