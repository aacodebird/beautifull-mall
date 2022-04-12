<template>
 <div class="selectbuttom" :class="{check:ischecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
     
 </div>
 
</template>

<script>


export default {
  name: 'selectbuttom',
  props:{
      ischecked:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style scoped>
.selectbuttom{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    background-color:  red;
}

</style>