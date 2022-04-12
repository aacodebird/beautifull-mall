<template>
  <div id="cartitem">
    <div class="selectbuttom">
      <selectbuttom :ischecked="product.checked" @click.native="checkclick"></selectbuttom>
      <!-- @select="select" :value='product.checkede' -->
    </div>
    <div class="img">
      <img src="product.image" alt="商品图片" />
    </div>
    <div class="info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}}</div>
      <div class="bottom">
        <div class="prize left">￥{{ product.prize }}</div>
        <div class="count right">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import selectbuttom from "components/content/select/select.vue";
export default {
  name: "cartitem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
      checkclick(){
          this.product.checked=!this.product.checked
      }
  },
  components: {
    selectbuttom,
  },
};
</script>

<style scoped>
#cartitem {
  width: 100vw;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.selectbuttom {
  display: flex;
  width: 20px;
  justify-content: center;
  align-items: center;
}
.title,
.desc {
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.img {
  padding: 5px;
}
.img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.info {

  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;

}
.info .desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
}
.bottom .prize {
  color: orangered;
}
</style>
