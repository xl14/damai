<template>
	<div class="interfaceTest">
		<div>
			<!--<button @click="login()">登录接口</button><button>注册接口</button>-->
			<button v-for="item in interfaceObj" @click="interfaceTest(item.interfaceUrl,item.requestData)">{{ item.interfaceName }}</button>
		</div>
		<div>
			<div>接口请求的方法:GET</div>
			<div>接口的URL地址:<span>{{ url }}</span></div>
			<div>请求可带的参数:<span>{{ requestData }}</span></div>
			<div>数据响应的类型:JSON</div>
			<div>请求响应的数据:<span>{{ responseData }}</span></div>
		</div>
	</div>
</template>

<style scoped="scoped">
	.interfaceTest{
		margin-left: 50px;
		margin-top: 50px;
	}
</style>

<script>
	import {InterfaceObj} from "./interfaceTest.js";
	export default {
		name: "InterfaceTest",
		data:function(){
			return {
				url:"",
				requestData:"",
				responseData:"",
				interfaceObj: InterfaceObj.interfaces
			}
		},
		methods:{
			interfaceTest:function(url,requestData){
//				console.log(url,requestData);
				this.$http.loginSubmit(url,requestData)
							.then((rel)=>{
								this.url = url;
								this.requestData = requestData;
								this.responseData = rel;
							},(error)=>{
								this.$Message.error("登录失败");
							});
			}
		}
	}
</script>

<style scoped="scoped">
	.interfaceTest button{
		margin-right: 15px;
	}
</style>