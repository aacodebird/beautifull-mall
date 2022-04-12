<template>
 <div id="tab">
     <slot>
     </slot>
     
 </div>
 
</template>

<script>


export default {
  name: 'Tab-1',
  components: {
  }
}
</script>

<style scoped>
#tab{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);

}

</style>