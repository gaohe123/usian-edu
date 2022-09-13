<template>
	<view class="flex justify-between align-center py-3">
		<view class="font font-weight-bold">
			<slot name="title"></slot>
		</view>
		<text class="font-sm text-muted">
			<slot name="sub-title"></slot>
		</text>
	</view>
</template>


<script>
	export default {
		name:"i-list-title",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>