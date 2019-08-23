<template>
	<div class="goodsShow">
		<h3><span>1F</span>戏剧达人</h3>
		<div class="goodsShow_cont">
			<div class="goodsShow_cont_left">
				<img src="../image/big4.jpg"  />
			</div>
			<div class="goodsShow_cont_right">
				<div class="goodsShow_cont_right_item" v-for="item in testData">
					<div class="itemImg"><img src="../image/cardimg1.jpg" /></div>
					<div class="right_cont">
						<h4 class="right_cont_title">18年春季巧虎舞台剧...</h4>
						<p class="right_cont_time">2018/4/3-2018/5/3</p>
						<p class="right_cont_address">河北省 秦皇岛市</p>
						<p class="right_cont_price">￥296起</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GoodsShow",
		data:function(){
			return{
				testData:[1,2,3,4]
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsShow{
		width: 840px;
		height: auto;
		/*margin: 0 auto;*/
		padding: 20px;
		padding-bottom: 30px;
		background-color: white;
		margin-top: 25px;
	}
	.goodsShow_cont{
		display: flex;
		padding-top: 20px;
	}
	.goodsShow_cont_left{
		margin-right: 30px;
	}
	.goodsShow_cont_left img{
		width: 230px;
		height: 330px;
	}
	.goodsShow_cont_right{
		display: flex;
		flex-wrap: wrap;
	}
	.goodsShow_cont_right_item{
		display: flex;
		margin-right: 20px;
	}
	.goodsShow_cont_right .itemImg img{
		width: 100px;
	}
	.goodsShow_cont_right_item .right_cont{
		margin-left: 5px;
	}
	.right_cont_title{
		margin-bottom: 25px;
	}
	.right_cont_time{
		margin-bottom: 10px;
	}
	.right_cont_address{
		margin-bottom: 10px;
	}
	.right_cont_price{
		margin-bottom: 10px;
	}
	
</style>