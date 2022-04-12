<template>
  <div id="taba">
    <Tab>
      <Tabi path="/home">
        <img slot="im" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="im-active" src="~assets/img/tabbar/home_active.svg" alt="" />
        <div slot="te">首页</div>
      </Tabi>

      <Tabi path="/category">
        <img slot="im" src="~assets/img/tabbar/category.svg" alt="" />
        <img slot="im-active" src="~assets/img/tabbar/category_active.svg" alt="" />
        <div slot="te">分类</div>
      </Tabi>

      <Tabi path="/cart">
        <img slot="im" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img slot="im-active" src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        <div slot="te">购物车</div>
      </Tabi>

      <Tabi path="/profile">
        <img slot="im" src="~assets/img/tabbar/profile.svg" alt="" />
        <img slot="im-active" src="~assets/img/tabbar/profile_active.svg" alt="" />
        <div slot="te">我的</div>
      </Tabi>
    </Tab>
  </div>
</template>

<script scoped>
import Tab from "components/common/tab.vue";
import Tabi from "components/common/tabi.vue";

export default {
  name: "Taba-1",
  components: {
    Tab,
    Tabi,
  },
};
</script>

<style>
</style>