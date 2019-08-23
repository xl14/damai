<template>
	<div class="qinzi">
		<Header-top></Header-top>
    	<Header-search></Header-search>
		<!--<Tab></Tab>
		<Lunbo></Lunbo>-->
		<Tab-and-banner></Tab-and-banner>
		<Yourlike></Yourlike>
		<Wonderful></Wonderful>
		<Hot></Hot>
		<Cooperate></Cooperate>
	</div>
</template>

<script>
	import HeaderTop from "@/components/HeadTop";
	import HeaderSearch from "@/components/HeadSearch";
//	import Tab from "./tabqinzi";
//	import Lunbo from "./lunbo";
	import TabAndBanner from "@/components/TabAndBanner";
	import Yourlike from "./yourlike";
	import Hot from "./hot";
	import Wonderful from "./wonderful";
	import Cooperate from "./cooperate";
	export default{
		name: "Qinzi",
		data:function(){
			return {
				
			}
		},
		components:{
			HeaderTop,
			HeaderSearch,
//			Tab,
//			Lunbo,
			TabAndBanner,
			Yourlike,
			Wonderful,
			Hot,
			Cooperate
			
		}
	}
</script>

<style>
</style>