<template>
<div style="width:90%;">
      <div class="title">
        <span>精品荟萃</span>
        <span>
          <a href="javascript:;" @click="giveStateFun({list:ll})">换一换</a>
        </span>
      </div>
    <div  class="Floor">
      <div style="width:23%" class="details_img" v-for="(el,i) of spliceDetail" :key="i">
        <img src="@/assets/img/2921783.jpg" alt="">
        <p>{{el.title}}</p>
        <span>{{el.code}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
  data(){
    return{
      res: [
            {
                "title": "枪·血玫瑰·Necromancer",
                "code": 20595
            },
            {
                "title": "热血传奇之绝对计划",
                "code": 20596
            },
            {
                "title": "人鬼情",
                "code": 20597
            },
            {
                "title": "人妖孽缘",
                "code": 20598
            },
            {
                "title": "热血传奇之傲气凌云",
                "code": 20599
            },
            {
                "title": "人品天下",
                "code": 20600
            },
            {
                "title": "日月神祭师",
                "code": 20601
            },
            {
                "title": "人魔世界",
                "code": 20602
            },
            {
                "title": "燃烧战役",
                "code": 20603
            },
            {
                "title": "人妖传说",
                "code": 20604
            },
            {
                "title": "任性少年",
                "code": 20605
            },
            {
                "title": "任风随柳意飘扬",
                "code": 20606
            },
            {
                "title": "上辈子欠你的爱",
                "code": 20607
            },
            {
                "title": "首富未成年",
                "code": 20608
            },
            {
                "title": "三国志乱",
                "code": 20609
            },
            {
                "title": "圣轩",
                "code": 20610
            },
            {
                "title": "谁是李世民",
                "code": 20611
            },
            {
                "title": "生化危机之终期黑城",
                "code": 20612
            },
            {
                "title": "树在红尘",
                "code": 20613
            },
            {
                "title": "狩猎园",
                "code": 20614
            },
            {
                "title": "兽族世界的佣兵",
                "code": 20615
            },
            {
                "title": "兽族的荣耀",
                "code": 20616
            },
            {
                "title": "兽族",
                "code": 20617
            },
            {
                "title": "死神－虚之死神",
                "code": 20618
            },
            {
                "title": "丧神",
                "code": 20619
            },
            {
                "title": "世界",
                "code": 20620
            },
            {
                "title": "三界传说",
                "code": 20621
            },
            {
                "title": "神道侠医之妙手回春",
                "code": 20622
            },
            {
                "title": "神兵传",
                "code": 20623
            },
            {
                "title": "烁金",
                "code": 20624
            },
            {
                "title": "蜀山问天书",
                "code": 20625
            },
            {
                "title": "神珠子之成仙传奇",
                "code": 20626
            },
            {
                "title": "那时花儿开",
                "code": 20627
            },
            {
                "title": "光之继承者",
                "code": 20628
            },
            {
                "title": "水之旅",
                "code": 20629
            },
            {
                "title": "神冥劫",
                "code": 20631
            },
            {
                "title": "随机英雄",
                "code": 20632
            },
            {
                "title": "死亡倒计时",
                "code": 20633
            },
            {
                "title": "杀手必读手册",
                "code": 20634
            },
            {
                "title": "紫狐女儿",
                "code": 20635
            },
            {
                "title": "仙凡寻",
                "code": 20636
            },
            {
                "title": "兽界风云",
                "code": 20637
            },
            {
                "title": "食为天",
                "code": 20638
            },
            {
                "title": "神之启世录",
                "code": 20639
            },
            {
                "title": "杀戮游戏",
                "code": 20640
            },
            {
                "title": "网游之书生传奇",
                "code": 20641
            },
            {
                "title": "时空交错间的爱情",
                "code": 20642
            },
            {
                "title": "神雕之大宋皇朝",
                "code": 20643
            },
            {
                "title": "仙兵",
                "code": 20644
            },
            {
                "title": "时空流浪者",
                "code": 20645
            }
        ]
    }
  },methods:{
    ...mapActions(["giveStateFun"])
  },computed:{
    ...mapGetters(['spliceDetail']),
    ...mapState({
      ll:state=>state.Detail.detailList
    })
  },created(){
      this.giveStateFun({list:this.res});
      
  }
}
</script>

<style scoped>
  .title{
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid #ccc;
    margin-bottom:10px;
    margin-top:10px;
  }
  .Floor{
    width:100%;
    display:flex;
    justify-content:space-between;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
  .Floor div>img{
    width:80px;
  }
  .details_img p{
    margin:8px 0;
  }


</style>
