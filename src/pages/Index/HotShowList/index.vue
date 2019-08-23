<template>
	<div class="hotShowList">
		<h3>查看全部>></h3>
		<div>热门演出排行</div>
		<div class="hotShowList_list">
			<ul>
				<li v-for="item in testData">爱笑会议室精彩演出</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default{
		name: "HotShowList",
		data:function(){
			return {
				testData:[1,2,3,4,5,6,7,8,9,10]
			}
		}
	}
	
</script>

<style scoped="scoped">
	.hotShowList{
		padding: 20px;
		padding-bottom: 30px;
		margin-top: 25px;
		background-color: white;
		width: 320px;
	}
	.hotShowList_list li{
		list-style: none;
		
	}
</style>