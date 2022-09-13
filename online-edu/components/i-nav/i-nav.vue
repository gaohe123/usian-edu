<template>
	<view class="flex flex-wrap nav py-2">
		<view v-for="(item,index) in data" :key="index"
			class="nav-item py-1 flex  flex-column justify-center align-center" hover-class="bg-light">
			<image :src="item.src" mode="widthFix"></image>
			<text class="text-muted mt-1 font-sm">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-nav",
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.nav-item {
		width: 25%;
	}

	.nav image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
