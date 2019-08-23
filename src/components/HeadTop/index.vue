<template>
    <div class="headTop">
        <div class="headTop_cont">
            <!--<span>Hi,欢迎[<span>{{ username }}</span>，<span>退出</span>]登录</span>-->
            <div class="headTop_cont_left">HI，欢迎来大麦[<span class="span_l" @click="login()">登录</span><span class="span_r" @click="register()">注册</span>]
            	<select>
            		<option>我的大麦</option>
            	</select>
            </div>
            <div class="headTop_cont_right">
            	<span>大麦网微信</span>
            	<span>手机版</span>
            	<select>
            		<option>客户服务</option>
            	</select>
            	<select>
            		<option>网站导航</option>
            	</select>
            	<span>English</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HeadTop",
        props:["username"],
        methods:{
        	login:function(){
        		this.$router.push("/login")
        	},
        	register:function(){
        		this.$router.push("/register")
        	}
        }
    }

</script>

<style scoped>
    .headTop{
        width: 100%;
        height: 35px;
        background-color: #fbfafa;
        border-bottom: solid 1px #e8e5e5;
    }
    .headTop_cont{
    	width: 1200px;
    	height: 35px;
        margin:0 auto;
        padding: 15px;
        overflow: hidden;
    	display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .headTop_cont .headTop_cont_right{
    	margin-right: 50px;
    }
    .span_l{
    	margin-right: 5px;
    	cursor: pointer;
    }
    .span_r{
    	cursor: pointer;
    }
</style>