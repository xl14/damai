<template>
  <div class="headRegister">
    <div class="headRegister_cont">
      <div class="headRegister_cont_img">
        <img src="./img/logo.png" />
      </div>
      <div class="headRegister_cont_hr"></div>
      <div class="headRegister_cont_title">
        <h3>账户注册</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "head-register"
    }
</script>

<style scoped>
  .headRegister{
    background-color: white;
    overflow: hidden;
    clear: both;
  }
  .headRegister_cont{
    width: 1000px;
    margin: 0 auto;
    clear: both;
    overflow: hidden;
  }
  .headRegister_cont_img{
    float:left;
  }
  .headRegister_cont_hr{
    float: left;
    width: 2px;
    height: 60px;
    background-color: #cccccc;
    margin-left: 15px;
    margin-right: 15px;
  }
  .headRegister_cont_title{
    float: left;
  }
</style>
