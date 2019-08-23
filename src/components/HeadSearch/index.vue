<template>
    <div class="headSearch">
        <div class="headSearch_cont">
            <div class="floatLeft headSearch_cont_img">
                <img src="./img/logo-334-120.png" />
            </div>
            <div class="floatLeft headSearch_cont_select">
                <select>
                	<option>北京</option>
                </select>
            </div>
            <div class="floatLeft headSearch_cont_input">
                <!--<Input search enter-button="Search" placeholder="Enter something..." />-->
                <input type="text" placeholder="请输入演出、艺人、场馆名称..." /><a href="javascript:void(0)">搜索</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:"HeadSearch"
    }
</script>

<style scoped>
    .headSearch{
        clear: both;
        overflow: hidden;
        width: 100%;
        height: auto;
        background-color: #fbfafa;
    }
    .headSearch_cont{
    	width: 1200px;
    	margin: 0 auto;
    	clear: both;
    	overflow: hidden;
    }
    .headSearch_cont_img{
    	margin: 25px 20px 30px 20px;
    }
    .headSearch_cont_select{
        margin-top: 20px;
    }
    .headSearch_cont_input{
       margin-top: 20px;
       margin-left: 100px;
       /*clear: both;
       overflow: hidden;*/
    }
    .headSearch_cont_input input{
    	height: 40px;
    	width: 500px;
    	border: none;
    	border: 3px solid red;
    	float: left;
    	outline:none;
    	padding-left: 15px;
    }
    .headSearch_cont_input a{
    	height: 40px;
    	width: 100px;
    	text-align: center;
    	line-height: 35px;
    	border: solid 3px red;
    	display: block;
    	float: left;
    	color: white;
    	background-color: red;
    	font-size: 14px;
    }
</style>