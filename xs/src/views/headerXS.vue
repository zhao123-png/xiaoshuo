<template>
  <header class="head-container">
      <div class="img_logo">
        <img src="@/assets/logo_index.png" >
      </div>
      <div class="search">
       <input type="text" placeholder="近战狂兵">
      </div>
      <ul>
        <li> <a href="#">书架</a> </li>
        <li><a href="#">登录</a></li>
      </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        padding:0;
        margin:0;
    }
  .head-container{
    display:flex;
    justify-content: space-between;
    height:30px;
    align-items:center;
    position:fixed;
    top:1%;
  }

  .head-container ul{
  
    list-style:none;
  }
.head-container ul li{
  float:left;
  margin:0 8px;
}
.head-container ul li:first-child::after{
  content:"|";
  display:inline-block;
  position:relative;
  right:-20%;
}
  .head-container ul a{
    text-decoration:none;
    display:inline-block;
    width:32px;
  }

.img_logo img{
  height:25px;
  width:60px;
}
.search{
  width:191px;
  height:25px;
}
.search input{
  display:inline-block;
  height:25px;
  border-radius:5px;
  border:1px solid #ccc;
  background-color:#E8e8e8;
  outline: none;
  box-sizing:border-box;
  padding-left: 15px;
}
</style>
