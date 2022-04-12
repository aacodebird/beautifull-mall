<template>
 <div class="cart" >

     <Nav class="Ncart">
       <div slot="center">购物车({{carlength}})</div>
     </Nav>
   <Scroll class="content" >

     <cartlist class="carlist"/>
     </Scroll>

      <cartbottom/>
   
 </div>
</template>

<script>
import Nav from 'components/common/nav.vue'
import cartlist from './cartlist.vue'
import cartbottom from './cartbottom.vue'
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  name: 'cart',
  data(){
    return{
      counter:{}
    }
  },
  computed:{
    ...mapGetters(['carlength','carlist'])

  },
  components: {
    Nav,
    cartlist,
    cartbottom,
    Scroll
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
    position: relative;
}
.Ncart{
     background-color: var(--color-tint);
    color: #fff;
    position: relative;
   
}
.content{
  /* position: relative; */
  /* height: calc(100% -44px -49px -40px); */

  overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
}

</style>
