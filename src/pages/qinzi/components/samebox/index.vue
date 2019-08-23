<template>
	<div class="samebox">
		<div class="title">
			<slot name="titleimg"></slot>
			<slot name="others"></slot>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.samebox{
		margin-top: 20px;
		background:white;
		padding-left:10px;
		padding-right:10px;
		padding-bottom:10px;
	}	
	.title{
		
		padding-top:20px;
	}
</style>