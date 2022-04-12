<template>
 <div id="gooditem" @click="itemClick">
     <img :src="gitem.show.img" alt="" >
     <div class="goods-info">
         <p>{{gitem.title}}</p>
         <span class="price">{{gitem.price}}</span>
         <span class="collect">{{gitem.cfav}}</span>
     </div>
 </div>
 
</template>

<script>


export default {
  name: 'Gooditem',
  props:{
      gitem:{
          type:Object,
          default(){
              return{}
          }
      }

  },
  components: {
  },
  methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.gitem.iid)
      }
    }
}
</script>

<style scoped>
#gooditem{
    position: relative;
    padding-bottom: 40px;

    width: 48%;
}
#gooditem img{
    width: 100%;
    border-radius: 5px;
    
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>