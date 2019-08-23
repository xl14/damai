<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted:function(){
//	this.$router.push("/")
//		var username = window.localStorage.getItem("username");
//		if(username){
			this.$router.push("/")
//		}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
 background:#f5f5f5;
}
li{
  list-style: none;
}
.floatLeft{
  float: left;
}
.floatRight{
  float: right;
}
.linear-gradient {
  background: -webkit-linear-gradient(#EFEFEF, #FEFEFE); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#EFEFEF, #FEFEFE); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#EFEFEF, #FEFEFE); /* Firefox 3.6 - 15 */
  background: linear-gradient(#EFEFEF, #FEFEFE); /* 标准的语法（必须放在最后） */
}
</style>
