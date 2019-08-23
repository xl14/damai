<template>
	<Samebox>
		<div class="icon-wonderful" slot="titleimg"></div>
		<div class="item-wonderful" slot="others">
			<div>
				<img :src="Wonderimg1" alt="" />
			</div>
			<div>
				<img src="" alt="" />
			</div>
			<div>
				<img :src="Wonderimg1" alt="" />
			</div>
		</div>
	</Samebox>
</template>

<script>
	import Wonderimg1 from "./imgs/wonder_03.jpg";
	import Samebox from "../components/samebox";
	export default{
		name:"Wonderful",
		components:{
			Samebox
		},
		data:function(){
			return {
				Wonderimg1:Wonderimg1
			}
		}
	}
</script>

<style>
	.icon-wonderful{
		width:180px;
		height:43px;
		margin:0 auto;
		background:url("../imgs/biaoqian.png") no-repeat 0px -0px;
	}
	.item-wonderful{
		display:flex;
		justify-content:space-around;
	}
</style>