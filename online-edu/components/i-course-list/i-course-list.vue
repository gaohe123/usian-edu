<template>
	<view class="pb-2 ml--1">
		<scroll-view  class="scroll-row" :scroll-x="type === 'column' ? true : false">
			<view :class="type === 'column' ? 'inline-flex' : ''" class=" ml-1 " v-for="(item,index) in data" :key="index">
				<i-course-item :item="item" :type="type"></i-course-item>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	
	export default {
		name:"i-course-list",
		props : {
			data : {
				type : Array,
				default : () => []
			},
			type : {
				type : String,
				default : "column"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	
</style>