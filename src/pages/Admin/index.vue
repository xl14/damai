<style scoped>
  .line-height{line-height: 50px;}
  .text-indent{text-indent: 20px;}
  .admin_cont{
    width: 100%;
    height:600px;
    background:#fbfafa;
    border-top:2px solid red;
  }
  .admin_cont>div:nth-child(1){
    width: 1170px;
    height:550px;
    background:#FFF;
    margin:2% auto;
  }
  .admin_cont_menu{
    width: 20%;
    border:1px solid #E3E4E6;
  }
  .admin_cont_menu>div:nth-child(1){
    background: red;
    color:#FFF;
  }
  .admin_cont_menu>div{
    padding:0 8%;
  }
  .admin_cont_c{
    width: 78%;
  }
</style>
<template>
  <div class="admin">
    <Head-top :username="username"/>
    <Head-search />
    <div class="admin_cont">
      <div>
        <div class="admin_cont_menu floatLeft">
          <div class="line-height">我的大麦</div>
          <div>
            <ul>
              <li>
                <div class="line-height">交易中心</div>
                <ul>
                  <li class="line-height text-indent OrderManagement"><router-link to="/admin/ordermenu">订单管理</router-link></li>
                </ul>
              </li>
              <li>
                <div class="line-height">账户中心</div>
                <ul>
                  <li class="line-height text-indent"><router-link to="/admin/mymsg">个人信息</router-link></li>
                  <li class="line-height text-indent"><router-link to="/admin/purchasers">常用购票人</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="admin_cont_c floatRight">
          <router-view />
        </div>
      </div>
    </div>
    <Admin-foot/>
  </div>

</template>

<script>
  import HeadSearch from "@/components/HeadSearch"
  import HeadTop from "@/components/HeadTop"
  import AdminFoot from "@/components/AdminFoot"
  export default {
    data(){
      return{
        username:""
      }
    },
    mounted(){
      try{
        this.name = this.$route.params.data.name
      }catch(err){
        if(window.localStorage.getItem("username")){
          this.username = window.localStorage.getItem("username")
        }else{
          this.username = ".....";
        }
//                  console.log(new Error("用户名信息出错"));
      }
    },
    components:{
      HeadSearch,
      HeadTop,
      AdminFoot
    }

  }

</script>

