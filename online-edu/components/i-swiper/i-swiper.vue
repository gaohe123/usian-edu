<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(item,index) in data" :key="index">
			<view class="swiper-item rounded shadow" @click="handleToDetail(item)">
				<image :src="item.src" ></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"i-swiper",
		props : {
			data : {
				type : Array,
				default : () => []
			}
		},
		data() {
			return {
				
			};
		},
		methods : {
			handleToDetail(item){
				this.$emit("click",item)
			}
		}
	}
</script>

<style>
swiper{
	height :310rpx;
}
swiper  swiper-item{
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding:0 10rpx;
}
swiper .swiper-item{
	width: 100%;
	height: 310rpx;
	overflow: hidden;
}
</style>