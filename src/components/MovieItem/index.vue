<template>
	<div class="movieItem">
		<div class="movieItem_img"><img :src="movieImg" /></div>
		<div class="movieItem_title">空城计-封箱大戏...</div>
		<div class="movieItem_price">票价：￥644</div>
	</div>
</template>

<script>
	import movieImg from "./image/cardimg4.jpg";
	export default{
		name: "MovieItem",
		data:function(){
			return {
				movieImg:movieImg
			}
		}
	}
</script>

<style scope="scoped">
	.movieItem{
		width: 130px;
		height: auto;
	}
	.movieItem_img img{
		width: 130px;
	}
	.movieItem_title{
		margin-top: 5px;
		margin-bottom: 5px;
	}
</style>