<template>
	<div class="banner-qinzi">
	    <Carousel autoplay v-model="value2" loop :autoplay-speed="setting.autoplaySpeed" >
	        <CarouselItem>
	            <div class="demo-carousel">
	            	<img src="../imgs/01.jpg" alt="" />
	            </div>
	        </CarouselItem>
	        <CarouselItem>
	            <div class="demo-carousel">
	            	<img src="../imgs/02.jpg" alt="" />
	            </div>
	        </CarouselItem>
	        <CarouselItem>
	            <div class="demo-carousel">
	            	<img src="../imgs/03.jpg" alt="" />
	            </div>
	        </CarouselItem>
	    </Carousel>
    </div>
</template>
<script>
    export default {
    	name:"Lunbo",
        data:function(){
            return {
                value2: 0,
                setting: {
                    
                    autoplaySpeed: 3000,
                    
                   
                }
                
            }
        }
    }
</script>

		

<style>
	.banner-qinzi{
		text-align:center;
	}
	.banner-qinzi .ivu-carousel-arrow.left{
		left: 100px;
	}
	.banner-qinzi .ivu-carousel-arrow.right{
		right: 100px;
	}
</style>