<template>
	
		<Samebox>
			<div class="icon-yourlike" slot="titleimg"></div>
			<div class="itembox" slot="others">
				<Itemyourlike  v-for="item in testData" :key="item">
					<img :src="youlikeImg" alt="" slot="img" class="itemimg"/>
					<p slot="title">fdvcv</p>
					<p slot="price">dbcvb</p>
				</Itemyourlike>
			</div>
		</Samebox>
		
	
</template>

<script>
	import youlikeImg from "./imgs/item.jpg";
	import Samebox from "../components/samebox";
	import Itemyourlike from "../components/Item-yourlike";
	export default{
		name:"Yourlike",
		components:{
			Samebox,
			Itemyourlike
		},
		data:function(){
			return {
				testData:[1,2,3,4,5,6,7],
				youlikeImg:youlikeImg
			}
		}
	}
</script>

<style>
	
	.icon-yourlike{
		width:180px;
		height:43px;
		margin:0 auto;
		background:url("../imgs/biaoqian.png") no-repeat 0px -155px;
	}
	.itembox{
		padding-top:5px;
		display:flex;
		justify-content:space-around;
	}
	.itemimg{
		width:144px;
		height:194px;
		display:block;
	}
</style>