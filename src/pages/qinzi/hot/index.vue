<template>
	<Samebox>
		<div class="icon-hot" slot="titleimg"></div>
	</Samebox>
</template>

<script>
	import Samebox from "../components/samebox";
	export default{
		name:"Yourlike",
		components:{
			Samebox
		}
	}
</script>

<style>
	.icon-hot{
		width:180px;
		height:43px;
		margin:0 auto;
		background:url("../imgs/biaoqian.png") no-repeat 0px -84px;
	}
</style>