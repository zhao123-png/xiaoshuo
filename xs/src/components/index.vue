<template>
  <div class="parContainer">
    <headerXs></headerXs>
    <Tab style="margin-top:45px"></Tab>
    <dir class="hideFont"></dir>
      <mt-swipe  :show-indicators="false" style="width:100%;height:100px;position:fixed">
        <mt-swipe-item >
          <img src="@/assets/img/1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="@/assets/img/2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="@/assets/img/3.jpg" alt="">
        </mt-swipe-item>
         <mt-swipe-item>
           <img src="@/assets/img/4.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    <Detail  class="pos"></Detail>
    <div style="width:95%;align-items:center;display:flex;justify-content:space-between;position:fixed;top:62%;">
      <span>排行榜</span>
      <span>More</span>
    </div>
    <mt-tabbar style="position:fixed; top:67%;height:30px;" v-model="active">
      <mt-tab-item id="packRed">红包榜</mt-tab-item>
      <mt-tab-item id="readEr">订阅榜</mt-tab-item>
      <mt-tab-item id="vip">会员点击榜</mt-tab-item>
      <mt-tab-item id="over">完本点击榜</mt-tab-item>
    </mt-tabbar>
    <mt-tab-container style="position:fixed;top:70%;" v-model="active">
      <mt-tab-container-item id="packRed">
        <h1>HEllo</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="readEr">
        <h1>HEllo2</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="vip">
        <h1>HEllo3</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="over">
        <h1>HEllo4</h1>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
import Tab from "@/views/tab"
import Detail from "@/views/details.vue"
export default {
  data(){
    return {
      active:"packRed"
    }
  },components:{
      Tab:Tab,
      Detail:Detail
  }
}
</script>

<style scoped>
  .parContainer{
    max-width: 375px;
  }
  .hideFont{
    width:5px;
    height:20px;
    position:fixed;
     top:4.5%;
     right:0%;
     background-color:#FFF;
     box-shadow:-5px 0px 0px rgba(0,0,0,0.1);
  }

  .pos{
    position:fixed;
    top:26%;
  }
  .mint-swipe-items-wrap div img{
    width:100%;
  }
</style>
