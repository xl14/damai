<template>
	<Samebox>
		<div class="icon-cooperate" slot="titleimg"></div>
	</Samebox>
</template>

<script>
	import Samebox from "../components/samebox";
	export default{
		name:"Cooperate",
		components:{
			Samebox
		}
	}
</script>

<style>
	
	.icon-cooperate{
		width:180px;
		height:43px;
		margin:0 auto;
		background:url("../imgs/biaoqian.png") no-repeat 0px -226px;
	}
</style>