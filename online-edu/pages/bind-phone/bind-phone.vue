<template>
	<view>
		<view class="login-back" @click="handleBackPage">
			<uni-icons color="#fff" type="back"></uni-icons>
		</view>

		<view class="login-bg"></view>

		<view class="login">
			<view class="flex">
				<text class="title">绑定手机号</text>
			</view>

			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" v-model="form.phone" class="rounded font-md" placeholder="请输入手机号" />
			</view>

			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" v-model="form.code" class="rounded font-md" placeholder="请输入验证码" />
				<i-code-button :phone="form.phone" @get="getCode"></i-code-button>
			</view>

			<view class="login-button bg-main" hover-class="bg-main-hover" @click="handleSubmitForm">
				绑定
			</view>

			

		</view>
	</view>
</template>

<script>
	import UserModel from "@/model/userModel"
	export default {
		data() {
			return {

				form: {
					phone: '',
					code: '',
				}

			}
		},
		methods: {
			/**
			 * 返回上一页
			 */
			handleBackPage() {
				uni.navigateBack({
					delta: 1
				})
			},

			/**
			 * 提交表单数据
			 */
			async handleSubmitForm() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				
				try{
					const response = await UserModel.userBindPhone(this.form)
					console.log("bind", response)
					uni.showToast({
						title: "绑定成功",
						icon : "none"
					})
					
					this.resetForm()
					
					setTimeout(()=>{
						uni.switchTab({
							url : '/pages/my/my'
						})
					},350)
					
				}catch(err){
					console.log(err)
				}finally{
					uni.hideLoading()
				}
				
			},

			/**
			 * 清空表单方法
			 */
			resetForm() {
				this.form = {
					phone: '',
					code: ''
				}
			}
		}
	}
</script>

<style>

</style>
