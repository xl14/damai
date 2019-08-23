<template>
	<div class="movies">
		<div class="movies_tab">
			<a class="movies_tab_today active" href="javascript:void(0)">今日推荐</a>
			<a class="movies_tab_todo" href="javascript:void(0)">即将开售</a>
		</div>
		<div class="movies_today">
			<div v-for="item in testData">
				<Movie-item></Movie-item>
			</div>
		</div>
		<div class="movies_todo">
			
		</div>
	</div>
</template>

<script>
	import MovieItem from "@/components/MovieItem"
	export default{
		name: "Movies",
		data:function(){
			return {
				testData:[1,2,3,4,5,6,7]
			}
		},
		components:{
			MovieItem
		}
	}
	
</script>

<style scope="scoped">
	.movies{
		width: 1200px;
		margin: 0 auto;
		/*margin-top: 30px;*/
		padding: 5px 30px 40px 30px;
		background-color: white;
	}
	.movies_tab{
		width: 100%;
		/*height: 40px;*/
		/*padding: 6px 0px 0px 0px;*/
		border-bottom: solid 1px #fbfafa;
	}
	.movies_tab a{
		color: black;
		display: inline-block;
		width: 70px;
		padding: 6px 0px 6px 0px;
		text-align: center;
		font-weight: 700;
		/*line-height: 70px;*/
	}
	.movies_tab a.active{
		color: red;
		border-bottom: 2px solid red;
	}
	.movies_today{
		padding: 10px 10px 0px 0px;
		display: flex;
		justify-content: space-between;
	}
</style>