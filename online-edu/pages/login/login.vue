<template>
	<view>
		<view class="login-back" @click="handleBackPage">
			<uni-icons color="#fff" type="back"></uni-icons>
		</view>

		<view class="login-bg"></view>

		<view class="login">
			<view class="flex">
				<text class="title">{{type === 'login' ? '登 录' : '注 册'}}</text>
			</view>

			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" v-model="form.username" class="rounded font-md" placeholder="请输入用户名" />
			</view>

			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" v-model="form.password" class="rounded font-md" placeholder="请输入密码" />
			</view>
			<view class="login-form" v-if="type === 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" v-model="form.repassword" class="rounded font-md" placeholder="请输入确认密码" />
			</view>

			<view class="login-button bg-main" hover-class="bg-main-hover" @click="handleSubmitForm">
				{{type === 'login' ? '登 录' : '注册'}}
			</view>

			<view class="flex justify-between my-3 font align-center">
				<text class="text-main py-3" @click="handleToggleType">
					{{type === 'login' ? '注册账号' : '去登录'}}
				</text>
				<text class="text-light-muted py-3">忘记密码?</text>
			</view>

			<view class="flex align-center justify-center ">
				<view class="wechat-login">
					<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
				</view>
			</view>

			<view v-if="type === 'login'" class="flex align-center justify-center py-4">
				<checkbox-group @change="handleCheckboxStatus" >
					<label class="text-light-muted">
						<checkbox  :checked="check" color="#7fd49e" style="transform: scale(0.7);" /><text class="font">已阅读并同意用户协议&隐私声明</text>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	import UserModel from "@/model/userModel"
	export default {
		data() {
			return {
				type: 'login',
				form: {
					username: '',
					password: '',
					repassword: ''
				},
				check : false
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
			 * 切换到登录注册类型
			 */
			handleToggleType() {
				this.type = this.type === 'login' ? 'reg' : 'login'
			},
			/**
			 * 提交表单数据
			 */
			handleSubmitForm() {
				uni.showLoading({title: '提交中...',mask: false})
				this.type === 'reg' ? this.handleRegisterAccont() : this.handleLoginAccont()
			},
			/**
			 * 注册
			 */
			async handleRegisterAccont() {
				try{
					const data = this.loadsh.cloneDeep(this.form)
					const response = await UserModel.userRegister(data)
					uni.showToast({title : '注册成功', icon : 'none'})
					this.type = 'login'
					this.resetForm()
				}catch(err){
					console.log(err)
				}finally{
					uni.hideLoading()
				}
			},
			/**
			 * 登录
			 */
			async handleLoginAccont() {
				if(!this.check){
					return uni.showToast({
						title : '请先阅读并同意用户协议&隐私声明',
						icon : "none"
					})
				}
				try{
					const data = this.loadsh.cloneDeep(this.form)
					delete data.repassword
					const response = await UserModel.userLogin(data)
					this.resetForm()
					this.$store.dispatch("setUser", response)
					
					this.handleToBindPhonePage()
					
					uni.navigateBack({
						delta:1
					})
				}catch(err){
					console.log(err)
				}finally{
					uni.hideLoading()
				}	
			},
			/**
			 * 如果用户登录之后,没有绑定手机号,则跳转到绑定手机号的页面
			 */
			handleToBindPhonePage(){
				const user = this.$store.state.user
				if(!user.phone){
					
					// 跳转到绑定手机号的页面
					setTimeout(()=>{
						uni.redirectTo({
							url:"/pages/bind-phone/bind-phone"
						})
					},350)
					
					// this.navigator.to("/pages/bind-phone/bind-phone")
					// 并且不再继续往下执行
					return
				}
			},
			/**
			 * 清空表单方法
			 */
			resetForm(){
				this.form = {
					username : '',
					password : '',
					repassword : ''
				}
			},
			/**
			 * 获取checkbox状态
			 */
			handleCheckboxStatus(event){
				this.check = Boolean(event.detail.value.length)
				console.log(this.check)
			}
		}
	}
</script>

<style>
	
</style>
