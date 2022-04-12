<template>
 <div class="nav-a">
    <div class="left"><slot name="left"></slot></div> 
    <div class="center"><slot name="center"></slot></div> 
    <div class="right"><slot name="right"></slot></div> 
     
 </div>
 
</template>

<script>


export default {
  name: 'Nav',
  components: {
  }
}
</script>

<style scoped>
.nav-a{
     display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
     background: #f6f6f6;
    z-index: 9;

    
    
}
.left,.right{
width: 60px;
}
.center{
    flex: 1;

}

</style>