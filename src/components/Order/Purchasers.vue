<template>
    <div>
      <div class="purchasers">
        <div class="linear-gradient">我的大麦>交易中心>常用购票人</div>
        <div>
          <div class="add-btn floatRight">
            <router-link to="purchasers/addpurchaser" class="add-btn-color">添加购票人</router-link>
          </div>
          <div style="clear:both"></div>
        </div>

      </div>
      <div>
        <router-view />
      </div>
    </div>
</template>

<script>
    export default {
        name: "purchasers",

    }
</script>

<style scoped>
  .purchasers>.linear-gradient{
    border:1px solid #F0F0F0;
    line-height:40px;
    text-indent:20px;
  }
  .add-btn{
    width:75px;
    line-height:30px;
    text-align: center;
    background:red;
    border:none;
    border-radius: 5px;
    margin: 1%;
  }
  .add-btn-color{color:#FFF;}
</style>
