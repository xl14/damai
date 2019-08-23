<template>
  <div class="indexcss">
    <Header-top></Header-top>
    <Header-search></Header-search>
    <Tab-and-banner></Tab-and-banner>
    <div class="indexcss_cont">
    	<Movies></Movies>
    	<div class="indexcss_cont_goods">
    		<Goods-show></Goods-show>
    		<Hot-show-list></Hot-show-list>
    	</div>
    	<div class="indexcss_cont_goods">
    		<Goods-show></Goods-show>
    		<Hot-show-list></Hot-show-list>
    	</div>
    	<div class="indexcss_cont_goods">
    		<Goods-show></Goods-show>
    		<Hot-show-list></Hot-show-list>
    	</div>
    	<div class="indexcss_cont_goods">
    		<Goods-show></Goods-show>
    		<Hot-show-list></Hot-show-list>
    	</div>
    	<div class="indexcss_cont_goods">
    		<Goods-show></Goods-show>
    		<Hot-show-list></Hot-show-list>
    	</div>
    </div>
    <div class="indexcss_foot">
    	<Foot-web></Foot-web>
    </div>
  </div>
</template>

<script>
	import HeaderTop from "@/components/HeadTop";
	import HeaderSearch from "@/components/HeadSearch";
	import TabAndBanner from "@/components/TabAndBanner";
	import Movies from "./Movies";
	import GoodsShow from "./GoodsShow";
	import HotShowList from "./HotShowList";
//	import FootWeb from "@/components/FootWeb";
	import FootWeb from "@/components/AdminFoot"
	export default{
		name: "Index",
		data:function(){
			return {
				
			}
		},
		components:{
			HeaderTop,
			HeaderSearch,
			TabAndBanner,
			Movies,
			GoodsShow,
			HotShowList,
			FootWeb
		}
	}
	
</script>

<style scoped="scoped">
	.indexcss_cont{
		width: 100%;
		height: auto;
		padding-top: 30px;
		padding-bottom: 30px;
		background-color: #fbfafa;
	}
	.indexcss_cont_goods{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
</style>
