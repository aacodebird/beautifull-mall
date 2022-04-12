<template>
 <div class="cartbottom" >
    <div class="content">
        <selectbuttom class="selectbuttom" :ischecked="selectall" @click.native="allclick"/>
         <span>全选</span>
    </div>
    <div class="prize">
        合计{{totalpize}}
    </div>

    <div class="caculate">
        去计算{{caculates}}
    </div>
 </div>
</template>

<script>
import selectbuttom from 'components/content/select/select.vue'
export default {
  name: 'cartbottom',

  computed:{
      totalpize(){
          return '￥'+ this.$store.state.carlist.filter(item=>{
              return item.checked
          }).reduce((preValue,item)=>{return preValue + item.prize * item.count},0).toFixed(2)
      },
      caculates(){
             return this.$store.state.carlist.filter(item=>{
              item.checked
          }).length
      },
      selectall(){
          if(this.$store.state.carlist.length==0){
              return false
          }
          else{
          return !(this.$store.state.carlist.filter(item=>!item.checked).length)

          }
      }

  },
  methods:{
      allclick(){
        if(this.selectall){
          this.$store.state.carlist.forEach(item => {item.checked=false
          });
        }
        else{
            this.$store.state.carlist.forEach(item => {item.checked=true
          });
        }

      }
  },
  components: {
      selectbuttom
  }
}
</script>

<style scoped>
.cartbottom{
    width: 100%;
    height: 40px;
        background-color: #eee;
        position:fixed;
        bottom: 49px;
        line-height: 40px;
        display: flex;
}
.content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
}
.selectbuttom {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.prize{
    margin-left: 10px;
    flex: 1;
}
.caculate{
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center;
}
</style>
