<template>
  <ul class="tab-container">
    <Tabitem :el="el" v-for="(el,i) of tabList" :key="i"></Tabitem>
  </ul>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"

import tabItem from "./tabitem"
export default {
  data(){
    return {
      tab:["首页","分类","排行","免费","包月","写作","游戏","签到"]
    }
  },computed:{
    ...mapState({
      tabList:state=>state.Tab.tab
    })
  },methods:{
    ...mapActions(["showTabFun"])
  },created(){
    this.showTabFun({tab:this.tab});
  },components:{
    Tabitem:tabItem
  }
}
</script>

<style scoped>
  ul.tab-container{
    list-style:none;
    display:flex;
    padding:0;
    margin:0 -15px;
    width:450px;
    height:30px;
    overflow:hidden;
    position: relative;
    top:5%;
  }
  ul.tab-container li{
    width:80px;
  }
  .tab-container::before{
    content:"";
    display: table;
  }
</style>
