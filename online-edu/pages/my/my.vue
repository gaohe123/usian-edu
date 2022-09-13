<template>
	<view>
		<button type="default" @click="handleToLoginPage">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleToLoginPage(){
				this.navigator.to("/pages/login/login")
			}
		}
	}
</script>

<style>

</style>
