<template>
	<view :class="[dynamicClass]">
		<view class="position-relative">
			<image :src="item.cover"></image>
			<view class="type position-absolute font-sm">{{item.type|fliterGroupType}}</view>
		</view>
		<view class="flex flex-column flex-1 " >
			<view class="text-ellipsis font-md" style="width: 400rpx;">{{item.title}}</view>
			<view class="flex flex-1 align-end">
				<text class="font-md text-danger">¥{{item.price}}</text>
				<text v-if="item.count" class="font-sm text-light-muted my-1">{{item.count}}人已抢</text>
				<text class="font-sm text-light-muted text-through">¥{{item.t_price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {courseType} from "@/enum/course-type"
	export default {
		name:"i-course-item",
		props : {
			item : {
				type : Object,
				default : ()=>{}
			},
			type : {
				type : String,
				default : "column"
			}
		},
		data() {
			return {
				
			};
		},
		computed : {
			dynamicClass(){
				return this.type === 'column' ? 'column inline-flex flex-column' : 'row flex mb-2'
			}
		},
		filters: {
			fliterGroupType(type){
				return courseType[type]
			}
		}
	}
</script>

<style>
.column {
			width: 50%;
		}
	
		.column>view:first-child {
			width: 340rpx;
			height: 190rpx;
		}
	
		.column>view:first-child .type {
			right: 10rpx;
			bottom: 10rpx;
			background-color: rgba(0, 0, 0, 0.6);
			color: #fff;
			padding: 13rpx 11rpx;
		}
		
		.row>view:first-child {
			width: 300rpx;
			height: 170rpx;
		}
		.row>view:first-child .type {
			right: 10rpx;
			bottom: 10rpx;
			background-color: rgba(0, 0, 0, 0.6);
			color: #fff;
			padding: 13rpx 11rpx;
		}
		.row>view:last-child{
			margin-left: 20rpx;
		}
</style>