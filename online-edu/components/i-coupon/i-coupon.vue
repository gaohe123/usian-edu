<template>
	<view class="p-2">
		<scroll-view class="scroll-row" scroll-x="true" >
			<view class="coupon" v-for="(item,index) in data" :key="index">
				<view>
					<text>￥{{item.price}}</text>
					<text class="font">适用课程: {{item.value.title}}</text>
				</view>
				<view>
					领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"i-coupon",
		props : {
			data : {
				type : Array,
				default : () => []
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.coupon{
		display: inline-flex;
		min-width: 310rpx;
		color : #fff;
		margin-right: 30rpx;
	}
	.coupon > view:first-child{
		padding: 20rpx 30rpx;
		background-color: #d39e00;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-right: 4rpx dashed #fff;
	} 
	.coupon > view:last-child{
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffc107;
		font-size: 30rpx!important;
	}
</style>