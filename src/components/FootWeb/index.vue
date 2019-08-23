<template>
	
	<div class="footWeb">
		<div class="footWeb_cont">
			<div class="footWeb_cont_ul">
				<ul class="footWeb_cont_ul1">
					<li class="footWeb_cont_ul1_li">
						<dl>
							<dt>订购方式</dt>
							<dd>在线订购</dd>
							<dd>电话订购</dd>
							<dd>上门订购</dd>
							<dd>大麦超级票订购</dd>
						</dl>
					</li>
				</ul>
			</div>
			<div class="footWeb_cont_company">
				<ul>
					<li>公司介绍</li>
				</ul>
			</div>
			<div>
				
			</div>
		</div>
	</div>
	
</template>

<script>
	
	export default{
		name: "FootWeb"
	}
	
</script>

<style scoped="scoped">
	
	.footWeb{
		width: 100%;
		height: auto;
		background-color:#e2dede;
		padding: 50px;
	}
	
	.footWeb_cont{
		width: 1200px;
		margin: 0 auto;
	}
	
	.footWeb_cont_ul li{
		list-style: none;
	}
	
	.footWeb_cont_company li{
		list-style: none;
	}
	
	
</style>