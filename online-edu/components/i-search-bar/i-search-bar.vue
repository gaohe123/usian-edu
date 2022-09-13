<template>
	<view class="search-bar py-2 px-1">
		<view class="search-bar-item py-2 rounded flex align-center justify-center">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="title ml-2 font">{{placeholder}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-search-bar",
		props : {
			placeholder : {
				type : String,
				default : '请输入要搜索的内容'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.search-bar-item{
	height : 100%;
	background-color: #f5f5f3;
}
.search-bar-item .title{
	color : #7d7d7d;
}
</style>