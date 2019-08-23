<template>
	<div class="tabAndBanner">
		<div class="tabAndBanner_cont">
			<div class="tabAndBanner_cont_tab">
				<ul>
					<li><a href="javascript:void(0)">全部商品分类</a></li>
					<li><a href="javascript:void(0)">戏剧</a></li>
					<li><a href="javascript:void(0)">体育</a></li>
					<li class="qinzi-li"><a href="javascript:void(0)">亲子</a></li>
					<li><a href="javascript:void(0)">舞蹈古典</a></li>
					<li><a href="javascript:void(0)">摇滚</a></li>
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name: "Tab",
		data:function(){
			return {
				value1: 0
			}
		}
	}
</script>

<style scoped="scoped">
	.tabAndBanner{
		width: 100%;
		height: auto;
		background-color: #fbfafa;
	}
	.tabAndBanner_cont{
		width: 1200px;
		height: auto;
		margin: 0 auto;
	}
	.tabAndBanner_cont_tab{
		clear: both;
		overflow: hidden;
		border: solid 1px #f3ebeb;
	}
	.tabAndBanner_cont_tab ul li{
		float: left;
		list-style: none;
		/*width: 100px;*/
		height: 40px;
	}
	.tabAndBanner_cont_tab ul li a{
		display: block;
		text-align: center;
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: black;
		/*background-color: red;*/
		padding: 0px 30px 0px 30px;
	}
	.tabAndBanner_cont_tab ul li.qinzi-li a{
		background-color: black;
		padding:0px 40px 0px 40px;
		color: white;
	}
	.demo-carousel{
		/*width: 500px;
		height: 100px;*/
		width: 100%;
		height: auto;
	}
	.tabAndBanner_cont_banner{
		overflow: hidden;
		clear: both;
	}
	.tabAndBanner_bottom{
		width: 100%;
		height: 30px;
		background-color: #9a0404;
		opacity: 0.5;
		margin-top: -5px;
	}
</style>