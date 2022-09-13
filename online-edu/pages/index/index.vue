<template>
	<view class="container">
		<index-skeleton v-if="!loadingStatus"></index-skeleton>
		<view v-else>
			<block  v-for="(item,index) in template" :key="index">
				<!-- 搜索框 -->
				<i-search-bar v-if="item.type === 'search'" :placeholder="item.placeholder"></i-search-bar>
				
				<!-- 轮播图 -->
				<i-swiper v-else-if="item.type === 'swiper'" :data="item.data" @click="handleToDetail"></i-swiper>
				
				<!-- 导航栏 -->
				<i-nav v-else-if="item.type === 'icons'" :data="item.data"></i-nav>
				
				<!-- 优惠卷 -->
				<i-coupon  v-else-if="item.type === 'coupon'" :data="couponList"></i-coupon>
				
				<view v-if="item.type === 'coupon'" class="divider"></view>
				
				<!-- 拼团 -->
				<view class="px-2"  v-if="item.type === 'promotion'">
					<i-list-title><template v-slot:title>{{ item.listType == 'group' ? '拼团' : '秒杀' }}</template></i-list-title>
					<i-course-list :data="groupOrFlashsale" type="column"></i-course-list>
				</view>
				
				<view  v-if="item.type === 'promotion'" class="divider"></view>
				
				<!-- 最新列表 -->
				<view class="px-2" v-if="item.type === 'list'">
					<i-list-title>
						<template v-slot:title>{{item.title}}</template>
						<template v-slot:sub-title>查看全部</template>
					</i-list-title>
					<i-course-list :data="item.data" type="row"></i-course-list>
				</view>
				
				<view v-if="item.type === 'list'" class="divider"></view>
					
				<view class="advert" v-if="item.type === 'imageAd'">
					<image :src="item.data" mode="aspectFill"></image>
				</view>		
			</block>
		</view>
	</view>
</template>

<script>
	import IndexModel from "@/model/indexModel"
	import indexSkeleton from "@/pages/index/index-skeleton"
	export default {
		data() {
			return {
				loadingStatus : false,
				template : [],
				couponList: [],
				groupOrFlashsale: [],
				listData : {
					page : 1,
					usable : 1
				}
			}
		},
		components : {
			indexSkeleton
		},
		onLoad() {
			this.loadRequest()
			
		},
		onPullDownRefresh(){
			this.loadRequest()
		},
		methods: {
			async loadRequest(){
				try{
					await this.getIndexData()
					await this.getCouponData()
					await this.getGroupOrFlashsale()
					this.loadingStatus = true
					uni.stopPullDownRefresh()
				}catch(err){
					uni.stopPullDownRefresh()
				}
				
			},
			
			/** 点击轮播图跳转到详情页
			 * @param {Object} item
			 */
			handleToDetail(item) {
				// TODO 点击跳转到对应的详情页面, 并且还需要将id传过去
				console.log(item)
			},
			/**
			 * 获取首页数据
			 */
			async getIndexData(){
				const response = await IndexModel.getMobileIndex()
				this.template = response
			},
			/**
			 * 获取优惠卷数据
			 */
			async getCouponData(){
				const response = await IndexModel.getMobileICoupon()
				this.couponList = response
			},
			
			/**
			 * 获取拼团或者秒杀的数据
			 */
			async getGroupOrFlashsale(){
				const type = this.template.filter(item=> item.type === 'promotion')[0].listType
				const response = await IndexModel.getMobileActivity(type,this.listData)
				this.groupOrFlashsale = response.rows
			}
			
		}
	}
</script>

<style>
.advert{
	width: 750rpx;
	height: 340rpx;
}	
</style>
