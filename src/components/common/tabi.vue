<template>
  <div id="tabi"  @click="itemClick">
    <div v-if="!isActive">
    <slot name="im"> </slot>
    </div>
    <div v-else>
    <slot name="im-active"> </slot>
    </div>
    <div :style="activeStyle">
    <slot name="te"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabi-1",
  props: {
      path: String,

      activeColor: {
        type: String,
        default: 'red'
      }
    },
  data(){
    return {
      // isActive:true,
    }
  },
  computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
  methods: {
    itemClick(){
      this.$router.replace(this.path)

   }
  }

}
</script>

<style scoped>
#tabi {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

#tabi img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>