# 积云在线教育平台开发文档
[toc]

## 一、项目环境搭建以及版本控制

### 1.1 创建项目

- 下载HbuilderX
- 创建项目

### 1.2 版本控制

- 创建远程仓库

- 将本地项目推送到远程仓库xi an

## 二、项目介绍

### 2.1 项目设计稿

- 在钉钉群文件获取

### 2.2 项目接口文档

- 接口文档地址: https://www.apifox.cn/apidoc/shared-8ab7e939-ded4-41b6-9f41-ae396c2f4915

### 2.3 项目素材

- 在钉钉群文件获取

### 2.4 项目原型图/演示效果

- 演示效果: http://edu.2yuecloud.com/#/

### 2.5 项目的源码

- 参考老师讲课的源码(!!!)
- 原项目的源码

## 三、全局样式与全局配置

### 3.1 Ap p.vue引入全局样式

`common/free.css`

```css
/* #ifndef APP-PLUS-NVUE */
/* scroll-view */
.scroll-row{ width: 100%;white-space: nowrap; }
.scroll-row-item{ display: inline-block!important; }
/* #endif */
/* 图标 */
.iconfont{
	font-family:iconfont;
}
.view,.text{
	font-size:28rpx; 
	line-height:1.8; 
	color:#0E151D;
}
/* 宽度 */
/* #ifndef APP-PLUS-NVUE */
.w-100{ width: 100%; }
/* #endif */

.row {
  margin-right: -20rpx;
  margin-left: -20rpx;
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-wrap: wrap;
  flex-direction: row;
}
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12{
  position: relative;
  padding-right: 20rpx;
  padding-left: 20rpx;
}
/* #ifdef APP-PLUS-NVUE */
.col-12 { width: 750rpx;}
.col-11 { width: 687.5rpx; }
.col-10 { width: 625rpx; }
.col-9 { width: 562.5rpx; }
.col-8 { width: 500rpx; }
.col-7 { width: 437.5rpx; }
.col-6 { width: 375rpx; }
.col-5 { width: 312.5rpx;}
.col-4 {width: 250rpx;}
.col-3 {width: 187.5rpx;}
.col-2 {width: 125rpx;}
.col-1 {width: 62.5rpx;}
/* #endif */
/* #ifndef APP-PLUS-NVUE */
[class*="col-"]{
	box-sizing: border-box;
}
.col-12 { width: 100%;}
.col-11 { width: 91.67%; }
.col-10 { width: 83.33%; }
.col-9 { width: 75%; }
.col-8 { width: 66.67%; }
.col-7 { width: 58.33%; }
.col-6 { width: 50%; }
.col-5 { width: 41.67%;}
.col-4 {width: 33.33%;}
.col-3 {width: 25%;}
.col-2 {width: 16.67%;}
.col-1 {width: 8.33%;}
/* #endif */

.col-offset-12 { margin-left: 750rpx;}
.col-offset-11 { margin-left: 687.5rpx; }
.col-offset-10 { margin-left: 625rpx; }
.col-offset-9 { margin-left: 562.5rpx; }
.col-offset-8 { margin-left: 500rpx; }
.col-offset-7 { margin-left: 437.5rpx; }
.col-offset-6 { margin-left: 375rpx; }
.col-offset-5 { margin-left: 312.5rpx;}
.col-offset-4 {margin-left: 250rpx;}
.col-offset-3 {margin-left: 187.5rpx;}
.col-offset-2 {margin-left: 125rpx;}
.col-offset-1 {margin-left: 62.5rpx;}
.col-offset-0 {margin-left: 0;}

/* flex 布局 */
.flex{
	/* #ifndef APP-PLUS-NVUE */
	display:flex!important;
	/* #endif */
	flex-direction:row!important;
}
.flex-row{ flex-direction:row!important; }
.flex-column{ flex-direction:column!important; }
.flex-row-reverse{ flex-direction:row-reverse!important; }
.flex-column-reverse{ flex-direction:column-reverse!important; }
.flex-wrap{ flex-wrap:wrap;}
.flex-nowrap{ flex-wrap:nowrap;}
.justify-start{justify-content:flex-start;}
.justify-end{justify-content:flex-end;}
.justify-between{justify-content:space-between;}
.justify-center{justify-content:center;}
.align-center{ align-items: center!important; }
.align-stretch{ align-items: stretch; }
.align-start{ align-items: flex-start; }
.align-end{ align-items: flex-end; }
/* #ifndef APP-PLUS-NVUE */
.content-start {align-content: flex-start;}
.content-end {align-content: flex-end;}
.content-center {align-content: center;}
.content-between {align-content: space-between;}
.content-around {align-content: space-around;}
.content-stretch {align-content: stretch;}
/* #endif */
.flex-1{ flex: 1!important; }
.flex-2{ flex: 2; }
.flex-3{ flex: 3; }
.flex-4{ flex: 4; }
.flex-5{ flex: 5; }
/* #ifndef APP-PLUS-NVUE */
.flex-shrink{ flex-shrink: 0; }
/* #endif */

.container {
  padding-right: 20rpx;
  padding-left: 20rpx;
}
/*  -- 内外边距 -- */
.m-0 { margin: 0; }
/* #ifndef APP-PLUS-NVUE */
.m-auto{ margin: auto; }
/* #endif */
.m-1 { margin: 10rpx; }
.m-2 { margin: 20rpx; }
.m-3 { margin: 30rpx; }
.m-4 { margin: 40rpx; }
.m-5 { margin: 50rpx; }
.mt-0 { margin-top: 0; }
/* #ifndef APP-PLUS-NVUE */
.mt-auto { margin-top: auto; }
/* #endif */
.mt-1 { margin-top: 10rpx; }
.mt-2 { margin-top: 20rpx; }
.mt-3 { margin-top: 30rpx; }
.mt-4 { margin-top: 40rpx; }
.mt-5 { margin-top: 50rpx; }
.mb-0 { margin-bottom: 0; }
/* #ifndef APP-PLUS-NVUE */
.mb-auto { margin-bottom: auto; }
/* #endif */
.mb-1 { margin-bottom: 10rpx; }
.mb-2 { margin-bottom: 20rpx; }
.mb-3 { margin-bottom: 30rpx; }
.mb-4 { margin-bottom: 40rpx; }
.mb-5 { margin-bottom: 50rpx; }
.ml-0 { margin-left: 0; }
/* #ifndef APP-PLUS-NVUE */
.ml-auto { margin-left: auto; }
/* #endif */
.ml-1 { margin-left: 10rpx; }
.ml-2 { margin-left: 20rpx; }
.ml-3 { margin-left: 30rpx; }
.ml-4 { margin-left: 40rpx; }
.ml-5 { margin-left: 50rpx; }
.mr-0 { margin-right: 0; }
/* #ifndef APP-PLUS-NVUE */
.mr-auto { margin-right: auto; }
/* #endif */
.mr-1 { margin-right: 10rpx; }
.mr-2 { margin-right: 20rpx; }
.mr-3 { margin-right: 30rpx; }
.mr-4 { margin-right: 40rpx; }
.mr-5 { margin-right: 50rpx; }
.my-0 { margin-top: 0; margin-bottom: 0; }
/* #ifndef APP-PLUS-NVUE */
.my-auto { margin-top: auto; margin-bottom: auto; }
/* #endif */
.my-1 { margin-top: 10rpx; margin-bottom: 10rpx; }
.my-2 { margin-top: 20rpx; margin-bottom: 20rpx; }
.my-3 { margin-top: 30rpx; margin-bottom: 30rpx; }
.my-4 { margin-top: 40rpx; margin-bottom: 40rpx; }
.my-5 { margin-top: 50rpx; margin-bottom: 50rpx; }
.mx-0 { margin-left: 0; margin-right: 0; }
/* #ifndef APP-PLUS-NVUE */
.mx-auto { margin-left: auto; margin-right: auto; }
/* #endif */
.mx-1 { margin-left: 10rpx; margin-right: 10rpx;}
.mx-2 { margin-left: 20rpx; margin-right: 20rpx;}
.mx-3 { margin-left: 30rpx; margin-right: 30rpx;}
.mx-4 { margin-left: 40rpx; margin-right: 40rpx;}
.mx-5 { margin-left: 50rpx; margin-right: 50rpx;}

.p-0 { padding: 0; }
.p { padding: 5rpx; }
.p-1 { padding: 10rpx; }
.p-2 { padding: 20rpx; }
.p-3 { padding: 30rpx; }
.p-4 { padding: 40rpx; }
.p-5 { padding: 50rpx; }
.pt-0 { padding-top: 0; }
.pt { padding-top: 5rpx; }
.pt-1 { padding-top: 10rpx; }
.pt-2 { padding-top: 20rpx; }
.pt-3 { padding-top: 30rpx; }
.pt-4 { padding-top: 40rpx; }
.pt-5 { padding-top: 50rpx; }
.pb-0 { padding-bottom: 0; }
.pb-1 { padding-bottom: 10rpx; }
.pb { padding-bottom: 5rpx; }
.pb-2 { padding-bottom: 20rpx; }
.pb-3 { padding-bottom: 30rpx; }
.pb-4 { padding-bottom: 40rpx; }
.pb-5 { padding-bottom: 50rpx; }
.pl-0 { padding-left: 0; }
.pl { padding-left: 5rpx; }
.pl-1 { padding-left: 10rpx; }
.pl-2 { padding-left: 20rpx; }
.pl-3 { padding-left: 30rpx; }
.pl-4 { padding-left: 40rpx; }
.pl-5 { padding-left: 50rpx; }
.pr-0 { padding-right: 0; }
.pr { padding-right: 5rpx; }
.pr-1 { padding-right: 10rpx; }
.pr-2 { padding-right: 20rpx; }
.pr-3 { padding-right: 30rpx; }
.pr-4 { padding-right: 40rpx; }
.pr-5 { padding-right: 50rpx; }
.py-0 { padding-top: 0; padding-bottom: 0; }
.py { padding-top: 5rpx; padding-bottom: 5rpx; }
.py-1 { padding-top: 10rpx; padding-bottom: 10rpx; }
.py-2 { padding-top: 20rpx; padding-bottom: 20rpx; }
.py-3 { padding-top: 30rpx; padding-bottom: 30rpx; }
.py-4 { padding-top: 40rpx; padding-bottom: 40rpx; }
.py-5 { padding-top: 50rpx; padding-bottom: 50rpx; }
.px-0 { padding-left: 0; padding-right: 0; }
.px-1 { padding-left: 10rpx; padding-right: 10rpx;}
.px { padding-left: 5rpx; padding-right: 5rpx;}
.px-2 { padding-left: 20rpx; padding-right: 20rpx;}
.px-3 { padding-left: 30rpx; padding-right: 30rpx;}
.px-4 { padding-left: 40rpx; padding-right: 40rpx;}
.px-5 { padding-left: 50rpx; padding-right: 50rpx;}
/* 文字大小 */
.font-smaller { font-size: 15rpx;}
.font-small { font-size: 20rpx;}
.font-sm { font-size: 25rpx;}
.font { font-size: 30rpx!important;}
.font-md { font-size: 35rpx!important;}
.font-lg { font-size: 40rpx;}
.h1{font-size:80rpx; line-height:1.8;}
.h2{font-size:60rpx; line-height:1.8;}
.h3{font-size:45rpx; line-height:1.8;}
.h4{font-size:32rpx; line-height:1.8;}
.h5{font-size:30rpx; line-height:1.8;}
.h6{font-size:28rpx; line-height:1.8;}
/* 文字缩进 */
/* #ifndef APP-PLUS-NVUE */
.text-indent{text-indent:2;}
/* #endif */
/* 文字划线 */
.text-through{text-decoration:line-through;}
/* 文字对齐 */
.text-left { text-align: left;}
.text-right { text-align: right;}
.text-center { text-align: center;}
/* 文字换行溢出处理 */
.text-ellipsis {
	/* #ifndef APP-PLUS-NVUE */
	overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
	/* #endif */
	/* #ifdef APP-PLUS-NVUE */
	lines: 1;
	/* #endif */
}
/* 文字粗细和斜体 */
.font-weight-light {font-weight: 300;}      /*细*/
.font-weight-lighter {font-weight: 100;}/*更细*/
.font-weight-normal { font-weight: 400;}    /*正常*/
.font-weight-bold { font-weight: 700;}      /*粗*/
.font-weight-bolder { font-weight: bold;} /*更粗*/
.font-italic { font-style: italic;} /*斜体*/
/* 文字颜色 */
.text-white {color: #ffffff;}
.text-primary {color: #007bff;}
.text-hover-primary { color: #0056b3;}
.text-secondary {color: #6c757d;}
.text-hover-secondary { color: #494f54;}
.text-success {color: #28a745;}
.text-hover-success{color: #19692c;}
.text-info { color: #17a2b8;}
.text-hover-info {color: #0f6674;}
.text-warning {color: #ffc107;}
.text-hover-warning { color: #ba8b00;}
.text-danger { color: #dc3545;}
.text-hover-danger { color: #a71d2a;}
.text-light { color: #f8f9fa;}
.text-hover-light { color: #cbd3da;}
.text-dark { color: #343a40;}
.text-hover-dark{ color: #121416;}
.text-body { color: #212529;}
.text-muted { color: #6c757d;}
/* 浅灰色 */
.text-light-muted { color: #A9A5A0;}
.text-light-black { color: rgba(0, 0, 0, 0.5);}
.text-light-white { color: rgba(255, 255, 255, 0.5);}

/* 背景颜色 */
.bg-primary { background-color: #007bff;}
.bg-hover-primary:hover{ background-color: #0062cc;}
.bg-secondary { background-color: #6c757d;}
.bg-hover-secondary:hover{ background-color: #545b62;}
.bg-success { background-color: #28a745;}
.bg-hover-success { background-color: #1e7e34;}
.bg-info { background-color: #17a2b8;}
.bg-hover-info { background-color: #117a8b;}
.bg-warning { background-color: #ffc107;}
.bg-hover-warning { background-color: #d39e00;}
.bg-danger { background-color: #dc3545;}
.bg-hover-danger{ background-color: #bd2130;}
.bg-white { background-color: #ffffff;}
.bg-light { background-color: #f8f9fa;}
.bg-hover-light{ background-color: #dae0e5;}
.bg-dark { background-color: #343a40;}
.bg-hover-dark { background-color: #1d2124;}
.bg-transparent { background-color: transparent;}
/* 边框 */
.border { border-width: 1rpx;border-style: solid;border-color: #dee2e6;}
.border-top {
  border-top-width: 1rpx;
  border-top-style: solid;
  border-top-color: #dee2e6;
}
.border-right {
  border-right-width: 1rpx;
  border-right-style: solid;
  border-right-color: #dee2e6;
}
.border-bottom {
  border-bottom-width: 1rpx;
  border-bottom-style: solid;
  border-bottom-color: #dee2e6;
}
.border-left {
  border-left-width: 1rpx;
  border-left-style: solid;
  border-left-color: #dee2e6;
}
.border-0 { border-width: 0!important;}
.border-top-0 { border-top-width: 0!important;}
.border-right-0 {border-right-width: 0!important;}
.border-bottom-0 {border-bottom-width: 0!important;}
.border-left-0 {border-left-width: 0!important;}
.border-primary { border-color: #007bff;}
.border-secondary {border-color: #6c757d;}
.border-light-secondary {border-color: #E9E8E5;}
.border-success {border-color: #28a745;}
.border-info {border-color: #17a2b8;}
.border-warning {border-color: #ffc107;}
.border-danger {border-color: #dc3545;}
.border-light {border-color: #f8f9fa;}
.border-dark {border-color: #343a40;}
.border-white {border-color: #FFFFFF;}
/* 圆角 */
.rounded { border-radius: 8rpx;}
.rounded-lg { border-radius: 14rpx;}
.rounded-top {
  border-top-left-radius: 8rpx;
  border-top-right-radius: 8rpx;
}
.rounded-top-lg {
  border-top-left-radius: 14rpx;
  border-top-right-radius: 14rpx;
}
.rounded-right {
  border-top-right-radius: 8rpx;
  border-bottom-right-radius: 8rpx;
}
.rounded-bottom {
  border-bottom-right-radius: 8rpx;
  border-bottom-left-radius: 8rpx;
}
.rounded-bottom-lg {
  border-bottom-right-radius: 14rpx;
  border-bottom-left-radius: 14rpx;
}
.rounded-left {
  border-top-left-radius: 8rpx;
  border-bottom-left-radius: 8rpx;
 }
.rounded-circle { border-radius: 100rpx;}
.rounded-0 { border-radius: 0;}
/* 显示 */
/* #ifndef APP-PLUS-NVUE */
.d-none{ display: none; }
.d-inline-block{ display: inline-block; }
.d-block{ display: block; }
/* #endif */
/* 内容溢出 */
.overflow-hidden { overflow: hidden;}
/* 定位 */
.position-relative { position: relative;}
.position-absolute { position: absolute;}
.position-fixed { position: fixed;}
/* 定位 - 固定顶部 */
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
/* 定位 - 固定底部 */
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
.top-0 { top: 0; }
.left-0 { left: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }

/* 阴影 */
/* #ifndef APP-PLUS-NVUE */
.shadow { box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.10);}
.shadow-lg { box-shadow: 0rpx 40rpx 100rpx 0rpx rgba(0, 0, 0, 0.175);}
.shadow-none { box-shadow: none !important;}
/* #endif */
.mask{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 100;
}

```

`common/common.css`

```css
.bg-main{
	background-color: rgb(92, 204, 132);
}
.text-main{
	color: rgb(92, 204, 132);
}
```

`App.vue`

```vue
<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	@import url("./common/common.css");
</style>
```



### 3.2 动画库引入与使用

- 下载`animate.min.css`
- 在`App.vue`中引入`animate.min.css`
- 在页面中使用`animate.min.css`

`App.vue`

```vue
<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	@import url("./common/common.css");
  @import url("./common/animate.min.css");
</style>
```



### 3.3 引入自定义图标库

- 进入`iconfont`官网选择自己所需要的图标
- 下载图标
- 将`iconfont.css`与`iconfont.ttf`文件拷贝common文件夹
- 在`App.vue`引入`iconfont.css`文件
- 在页面使用字体图标

`App.vue`

```vue
<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	@import url("./common/common.css");
	@import url("./common/animate.min.css");
	@import url("./common/iconfont.css");
</style>

```

### 3.4 底部导航开发

![image-20220815161617299](README.assets/image-20220815161617299.png)

- 拷贝`tabbar`图标
- 创建`tabbar`页面
- 在`page.json`中创建页面路由
- 在`page.json`中创建`tabbar`

`page.json`

```json
{
	"pages": [{
		"path": "pages/tabbar/index/index",
		"style": {
			"app-plus":{
				"titleNView":false
			}
		}
	}, {
		"path": "pages/tabbar/learn/learn",
		"style": {
			"navigationBarTitleText": "",
			"enablePullDownRefresh": false
		}

	}, {
		"path": "pages/tabbar/home/home",
		"style": {
			"navigationBarTitleText": "",
			"enablePullDownRefresh": false
		}

	}],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uniapp在线教育",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"app-plus": {
			"background": "#efeff4"
		}
	},
	"tabBar": {
		"color": "#BBBAC7",
		"selectedColor": "#2C2C2C",
		"borderStyle": "black",
		"list": [{
			"iconPath": "/static/tabbar/index1.png",
			"pagePath": "pages/tabbar/index/index",
			"selectedIconPath": "/static/tabbar/index1_selected.png",
			"text": "首页"
		}, {
			"iconPath": "/static/tabbar/learn.png",
			"pagePath": "pages/tabbar/learn/learn",
			"selectedIconPath": "/static/tabbar/learn_selected.png",
			"text": "学习"
		}, {
			"iconPath": "/static/tabbar/home.png",
			"pagePath": "pages/tabbar/home/home",
			"selectedIconPath": "/static/tabbar/home_selected.png",
			"text": "我的"
		}]
	}
}

```



## 四、首页开发

### 4.1 首页搜索栏开发

`i-search-bar.vue`

```vue
<template>
	<view class="p-2">
		<view style="background-color: #F5F5F1;color: #928E8A;" class="flex align-center justify-center py-2 rounded">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="ml-2">请输入搜索内容</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"f-search-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>

```



### 4.2 首页轮播图组件开发

`pages/index/index.vue`

```vue
<template>
	<view>
		
		<f-search-bar></f-search-bar>
		
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
			</swiper-item>
		</swiper>
	
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[{
					src:"/static/demo/banner/banner1.png"
				},{
					src:"/static/demo/banner/banner2.png"
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	
</style>

```



### 4.3 图标分类组件开发

`i-icon-nav.vue`

```vue
<template>
	<view class="flex flex-wrap py-2">
		<view class="flex flex-column align-center justify-center py-1" style="width: 25%;" v-for="(item,index) in list" :key="index" hover-class="bg-light">
			<image :src="item.src" mode="widthFix" style="width: 70rpx;height: 70rpx;border-radius: 100%;"></image>
			<text class="font-sm text-muted mt-1">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"icon-nav",
		props: {
			list: Array,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>

```

`pages/index/index.vue`

```vue
<template>
	<view>
		
		<f-search-bar></f-search-bar>
		
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
			</swiper-item>
		</swiper>
		
		<icon-nav :list="iconNav"></icon-nav>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[{
					src:"/static/demo/banner/banner1.png"
				},{
					src:"/static/demo/banner/banner2.png"
				}],
				iconNav:[{
					src:"/static/demo/icon/hd.png",
					name:"活动",
				},{ 
					src:"/static/demo/icon/test.png",
					name:"考试",
				},{
					src:"/static/demo/icon/ms.png",
					name:"秒杀",
				},{
					src:"/static/demo/icon/pt.png",
					name:"拼团",
				},{
					src:"/static/demo/icon/course.png",
					name:"直播",
				},{
					src:"/static/demo/icon/column.png",
					name:"专栏",
				},{
					src:"/static/demo/icon/book.png",
					name:"电子书",
				},{
					src:"/static/demo/icon/ask.png",
					name:"社区",
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	
</style>

```



### 4.4 优惠卷组件开发

`i-coupon-list.vue`

```vue
<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view v-for="i in 3" :key="i" class="coupon">
				<view>
					<text>￥100</text>
					<text class="font">满￥200可用</text>
				</view>
				<view hover-class="bg-hover-warning">
					领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"coupon-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.coupon{
		width: 310rpx;display: inline-flex;
		color: #ffffff;
		margin-right: 30rpx;
	}
	.coupon>view:first-child{
		padding: 20rpx 30rpx;
		background-color: #d39e00;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-right: 4rpx dashed;
	}
	.coupon>view:last-child{
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffc107;
		font-size: 30rpx!important;
	}
</style>

```



### 4.5 公共列表组件开发

`commom/common.css`

```css
/* 分割线 */
.divider{
	height: 15rpx;
	background-color: #f5f5f3;
}
```

`pages/index/index.vue`

```vue
<template>
	<view>
		
		<f-search-bar></f-search-bar>
		
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
				<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
			</swiper-item>
		</swiper>
		
		<icon-nav :list="iconNav"></icon-nav>
		
		
		<coupon-list></coupon-list>
		
		
		<view class="divider"></view>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">拼团</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<course-list v-for="(item,index) in groupList" :key="index" :item="item"></course-list>
		</scroll-view>
		
		<view class="divider"></view>
		<view class="flex align-center justify-between py-3 px-2">
			<text class="font-md font-weight-bold">最新课程</text>
			<text class="font-sm text-light-muted">查看更新</text>
		</view>
		<view>
			<course-list type="one" v-for="(item,index) in list" :key="index" :item="item"></course-list>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[{
					src:"/static/demo/banner/banner1.png"
				},{
					src:"/static/demo/banner/banner2.png"
				}],
				iconNav:[{
					src:"/static/demo/icon/hd.png",
					name:"活动",
				},{ 
					src:"/static/demo/icon/test.png",
					name:"考试",
				},{
					src:"/static/demo/icon/ms.png",
					name:"秒杀",
				},{
					src:"/static/demo/icon/pt.png",
					name:"拼团",
				},{
					src:"/static/demo/icon/course.png",
					name:"直播",
				},{
					src:"/static/demo/icon/column.png",
					name:"专栏",
				},{
					src:"/static/demo/icon/book.png",
					name:"电子书",
				},{
					src:"/static/demo/icon/ask.png",
					name:"社区",
				}],
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				list:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	
</style>

```

`components/course-list/course-list.vue`

```vue
<template>
	<view class="scroll-row-item course" :class="'course-'+this.type">
		<view class="position-relative">
			<image :src="item.cover"></image>
			<view class="text-white font-sm">{{ item.type | formatType }}</view>
		</view>
		<view class="flex flex-column flex-shrink">
			<text class="text-ellipsis font-md">{{ item.title }}</text>
			<view class="font-sm text-light-muted my-1">10人已抢</view>
			<view class="flex flex-1 align-end">
				<text class="font-md text-danger">￥{{ item.price }}</text>
				<text class="font-sm text-light-muted">￥{{ item.t_price }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	let opt = {
		media:"图文",
		audio:"音频",
		video:"视频",
		column:"专栏"
	}
	export default {
		name:"course-list",
		props: {
			item: Object,
			type:{
				type:String,
				default:"two"
			}
		},
		filters: {
			formatType(k) {
				return opt[k];
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.course{
	
}
.course-two{
	width: 340rpx;
	margin-left: 20rpx;
	margin-bottom: 20rpx;
}
.course-two>view:last-child>text:first-child{
	margin-top: 10rpx;
}
.course-two image,.course-two>view:first-child{
	width: 340rpx;
	height: 180rpx;
}
.course>view:first-child>view{
	position: absolute;
	right: 10rpx;
	bottom: 10rpx;
	background-color: rgba(0,0,0,0.4);
	padding: 0 10rpx;
}
.course-one{
	display: flex!important;
	padding: 20rpx;
}
.course-one>view:first-child{
	margin-right: 20rpx;
}
.course-one image,.course-one>view:first-child{
	width: 300rpx;
	height: 170rpx;
	flex-shrink: 1;
}
</style>

```

### 4.6 首页数据交互

`pages/index/index.vue`

```vue
<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
			<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
				<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
					<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
				</swiper-item>
			</swiper>
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
			
			<template v-else-if="item.type == 'promotion'">
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.listType == 'group' ? '拼团' : '秒杀' }}</text>
				</view>
				<scroll-view scroll-x="true" class="scroll-row">
					<course-list v-for="(item,index) in groupList" :key="index" :item="item"></course-list>
				</scroll-view>
			</template>
			<template v-else-if="item.type == 'list'">
				<view class="divider"></view>
				<view class="flex align-center justify-between py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.title }}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
				</view>
				<view>
					<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
				</view>
			</template>
			<template v-else-if="item.type == 'imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
			</template>
		</block>

		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData(){
				uni.request({
					url: 'http://ceshi8.dishaxy.com/mobile/index',
					method: 'GET',
					header:{
						appid:"bd9d01ecc75dbbaaefce"
					},
					success: res => {
						console.log(res.data.data);
						if(res.statusCode != 200){
							uni.showToast({
								title: res.data.data || '请求失败',
								icon: 'none'
							});
							return
						}
						this.templates = res.data.data
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	
</style>

```

### 4.7 首页下拉刷新功能开发

`pages/index/index.vue`

```vue
<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
			<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
				<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
					<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
				</swiper-item>
			</swiper>
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
			
			<template v-else-if="item.type == 'promotion'">
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.listType == 'group' ? '拼团' : '秒杀' }}</text>
				</view>
				<scroll-view scroll-x="true" class="scroll-row">
					<course-list v-for="(item,index) in groupList" :key="index" :item="item"></course-list>
				</scroll-view>
			</template>
			<template v-else-if="item.type == 'list'">
				<view class="divider"></view>
				<view class="flex align-center justify-between py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.title }}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
				</view>
				<view>
					<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
				</view>
			</template>
			<template v-else-if="item.type == 'imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
			</template>
		</block>

		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.getData()
		},
		methods: {
			getData(){
				uni.request({
					url: 'http://ceshi8.dishaxy.com/mobile/index',
					method: 'GET',
					header:{
						appid:"bd9d01ecc75dbbaaefce"
					},
					success: res => {
						if(res.statusCode != 200 || res.data.msg == 'fail'){
							uni.showToast({
								title: res.data.data || '请求失败',
								icon: 'none'
							});
							return
						}
						this.templates = res.data.data
					},
					fail: (err) => {
						console.log(err);
					},
					complete: () => {
						uni.stopPullDownRefresh()
					}
				});
			}
		}
	}
</script>

<style>
	
</style>

```



### 4.8 请求拦截器封装

`api/request.js`

```javascript
export default {
	config:{
		// 请求拦截器
		beforeRequest(options = {}){
			return new Promise((resolve,reject)=>{
				console.log('请求拦截器');
				options.url = 'http://ceshi8.dishaxy.com' + options.url 
				options.method = options.method || 'GET'
				options.header = {
					appid:"bd9d01ecc75dbbaaefce"
				}
				resolve(options)
			})
		}
	},
	request(options = {}){
		return this.config.beforeRequest(options).then(opt=>{
			return uni.request(opt)
		})
	}
}
```

`pages/index/index.vue`

```vue
<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
			<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
				<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
					<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
				</swiper-item>
			</swiper>
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
			
			<template v-else-if="item.type == 'promotion'">
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.listType == 'group' ? '拼团' : '秒杀' }}</text>
				</view>
				<scroll-view scroll-x="true" class="scroll-row">
					<course-list v-for="(item,index) in groupList" :key="index" :item="item"></course-list>
				</scroll-view>
			</template>
			<template v-else-if="item.type == 'list'">
				<view class="divider"></view>
				<view class="flex align-center justify-between py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.title }}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
				</view>
				<view>
					<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
				</view>
			</template>
			<template v-else-if="item.type == 'imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
			</template>
		</block>

		
		
		
		
	</view>
</template>

<script>
	import api from '@/api/request.js';
	export default {
		data() {
			return {
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.getData()
		},
		methods: {
			getData(){
				// uni.request({
				// 	url: 'http://ceshi8.dishaxy.com/mobile/index',
				// 	method: 'GET',
				// 	header:{
				// 		appid:"bd9d01ecc75dbbaaefce"
				// 	},
				// 	success: res => {
				// 		if(res.statusCode != 200 || res.data.msg == 'fail'){
				// 			uni.showToast({
				// 				title: res.data.data || '请求失败',
				// 				icon: 'none'
				// 			});
				// 			return
				// 		}
				// 		this.templates = res.data.data
				// 	},
				// 	fail: (err) => {
				// 		console.log(err);
				// 	},
				// 	complete: () => {
				// 		uni.stopPullDownRefresh()
				// 	}
				// });
				
				
				api.request({
					url:"/mobile/index"
				}).then(data=>{
					let [error,res] = data
					if(res.statusCode != 200 || res.data.msg == 'fail'){
						uni.showToast({
							title: res.data.data || '请求失败',
							icon: 'none'
						});
						return
					}
					this.templates = res.data.data
				})
				
			}
		}
	}
</script>

<style>
	
</style>

```

### 4.9 响应拦截器封装

`api/request.js`

```javascript
export default {
	config:{
		baseURL:"http://ceshi8.dishaxy.com",
		appid:"bd9d01ecc75dbbaaefce",
		// 请求拦截器
		beforeRequest(options = {}){
			return new Promise((resolve,reject)=>{
				// 公共参数处理
				options.url = this.baseURL + options.url 
				options.method = options.method || 'GET'
				options.header = {
					appid:this.appid
				}
				
				// 权限相关验证
				
				resolve(options)
			})
		},
		// 响应拦截器
		handleResponse([error,res]){
			return new Promise((resolve,reject)=>{
				// 错误提示处理
				if(res.statusCode != 200 || res.data.msg == 'fail'){
					let msg = res.data.data || '请求失败'
					uni.showToast({
						title: msg,
						icon: 'none'
					});
					return reject(msg)
				}
				resolve(res.data.data)
			})
		}
	},
	request(options = {}){
		return this.config.beforeRequest(options).then(opt=>uni.request(opt)).then(this.config.handleResponse)
	},
	// GET请求
	get(url,params = null,options = {}){
		options.url = url
		
		options.url += params ? ('?'+Object.keys(params).map(key=>key+'='+params[key]).join('&')) : ''
		
		options.method = 'GET'
		return this.request(options)
	},
	// POST请求
	post(url,data = {},options = {}){
		options.url = url
		options.method = 'POST'
		options.data = data
		return this.request(options)
	}
}
```

`api/api.js`

```javascript
import api from './request.js';
export default {
	// 获取首页数据
	getIndexData(){
		return api.get("/mobile/index")
	}
}
```

`pages/index/index.vue`

```vue
<template>
	<view>
		<block v-for="(item,index) in templates" :key="index">
			<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
			<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
				<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
					<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
				</swiper-item>
			</swiper>
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
			
			<template v-else-if="item.type == 'promotion'">
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.listType == 'group' ? '拼团' : '秒杀' }}</text>
				</view>
				<scroll-view scroll-x="true" class="scroll-row">
					<course-list v-for="(item,index) in groupList" :key="index" :item="item"></course-list>
				</scroll-view>
			</template>
			<template v-else-if="item.type == 'list'">
				<view class="divider"></view>
				<view class="flex align-center justify-between py-3 px-2">
					<text class="font-md font-weight-bold">{{ item.title }}</text>
					<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
				</view>
				<view>
					<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
				</view>
			</template>
			<template v-else-if="item.type == 'imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
			</template>
		</block>

		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.getData()
		},
		methods: {
			getData(){
				this.$api.getIndexData().then(data=>{
					this.templates = data
				})
			}
		}
	}
</script>

<style>
	
</style>

```



### 4.10 骨架屏加载优化

`components/skeleton/skeleton.vue`

```vue
<template>
	<view style="background-color: rgb(245, 245, 241);" :style="getStyle" :class="getClass">
		
	</view>
</template>

<script>
	export default {
		name:"skeleton",
		props: {
			width: {
				type: [Number,String],
				default: 0
			},
			height: {
				type: [Number,String],
				default: 0
			},
			circle:{
				type:Boolean,
				default:false
			},
			oClass:{
				type: String,
				default: ''
			}
		},
		computed: {
			getStyle() {
				return `width:${this.width};height:${this.height};`
			},
			getClass(){
				let c = ''
				if(this.circle){
					c += 'rounded-circle'
				}
				return `${c} ${this.oClass}`
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

```

`pages/index/index-skeleton.vue`

```vue
<template>
	<view>
		<view class="p-2">
			<skeleton width="710rpx" height="75rpx" oClass="mb-2 rounded"></skeleton>
			<skeleton width="710rpx" height="300rpx" oClass="rounded"></skeleton>
		</view>
		<view class="flex flex-wrap py-2">
			<view class="flex flex-column align-center justify-center"
			style="width: 25%;" v-for="i in 8" :key="i">
				<skeleton width="75rpx" height="75rpx" circle oClass="mb-2"></skeleton>
				<skeleton width="75rpx" height="30rpx" oClass="mb-2"></skeleton>
			</view>
		</view>
		<view class="flex flex-wrap py-2">
			<view class="flex align-center justify-center" style="width: 50%;"> 
				<skeleton width="354rpx" height="130rpx" oClass="mb-2"></skeleton>
			</view>
			<view class="flex align-center justify-center" style="width: 50%;">
				<skeleton width="354rpx" height="130rpx" oClass="mb-2"></skeleton>
			</view>
		</view>
		<view class="p-2">
			<skeleton width="70rpx" height="35rpx"></skeleton>
		</view>
		<view class="flex p-2">
			<skeleton width="300rpx" height="170rpx"></skeleton>
			<view class="ml-2">
				<skeleton width="364rpx" height="38rpx" oClass="mb-2"></skeleton>
				<skeleton width="120rpx" height="25rpx" oClass="mb-2"></skeleton>
				<skeleton width="170rpx" height="43rpx"></skeleton>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

```



### 4.22 首页数据交互完善

`api/api.js`

```javascript
import api from './request.js';
export default {
	// 获取首页数据
	getIndexData(){
		return api.get("/mobile/index")
	},
	// 获取可用秒杀列表
	getFlashsale(params = {}){
		return api.get("/mobile/flashsale",params)
	},
	// 获取可用拼团列表
	getGroup(params = {}){
		return api.get("/mobile/group",params)
	}
}
```

`pages/index/index.vue`

```vue
<template>
	<view>
		
		<index-skeleton v-if="loading"></index-skeleton>
		
		<view class="animate__animated animate__fadeIn animate__fast" v-else>
			<block v-for="(item,index) in templates" :key="index">
				<f-search-bar v-if="item.type == 'search'" :placeholder="item.placeholder"></f-search-bar>
				<swiper v-else-if="item.type == 'swiper'" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
					<swiper-item class="flex justify-center" v-for="(s,sI) in item.data" :key="sI">
						<image :src="s.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
					</swiper-item>
				</swiper>
				<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
				<coupon-list v-else-if="item.type == 'coupon'"></coupon-list>
				
				<view v-else-if="item.type == 'promotion'">
					<active-list :type="item.listType"></active-list>
				</view>
				<view v-else-if="item.type == 'list'">
					<view class="divider"></view>
					<view class="flex align-center justify-between py-3 px-2">
						<text class="font-md font-weight-bold">{{ item.title }}</text>
						<text class="font-sm text-light-muted" v-if="item.showMore">查看更新</text>
					</view>
					<view>
						<course-list :type="item.listType" v-for="(item,index) in item.data" :key="index" :item="item"></course-list>
					</view>
				</view>
				<view v-else-if="item.type == 'imageAd'">
					<view class="divider"></view>
					<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
				</view>
				
			</block>
		</view>
		
	</view>
</template>

<script>
	import indexSkeleton from './index-skeleton.vue';
	export default {
		components: {
			indexSkeleton
		},
		data() {
			return {
				loading:false,
				groupList:[{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				},{
					"id": 19,
					"goods_id": 12,
					"title": "unicloud商城全栈开发",
					"cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/79023e0596c23aff09e6.png",
					"price": "4.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				
				templates:[]
			}
		},
		onPullDownRefresh() {
			this.getData()
		},
		created() {
			this.loading = true
			this.getData()
		},
		methods: {
			getData(){
				this.$api.getIndexData().then(data=>{
					this.templates = data
				}).finally(()=>{
					this.loading = false
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style>
	
</style>

```

`components/active-list/active-list.vue`

```vue
<template>
	<view>
		<view class="divider"></view>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">{{ type == 'group' ? '拼团' : '秒杀' }}</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<course-list v-for="(item,index) in list" :key="index" :item="item"></course-list>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"active-list",
		props: {
			type: {
				type: String,
				default: 'group'
			},
		},
		data() {
			return {
				list:[]
			};
		},
		created() {
			let k = this.type == 'group' ? 'getGroup' : 'getFlashsale'
			this.$api[k]({
				usable:1
			}).then(res=>{
				this.list = res.rows
			})
		}
	}
</script>

<style>

</style>

```



## 五、登录注册模块开发

### 5.1 登录注册页开发

`common/common.css`

```css
/* 主色调 */
/* 主背景色 */
.bg-main{
	background-color: rgb(92, 204, 132);
}
.bg-main-hover{
	background-color: #4bc175;
}
.bg-main-disabled{
	background-color: #7be09f;
}
/* 主文字色 */
.text-main{
	color: rgb(92, 204, 132);
}
/* 分割线 */
.divider{
	height: 15rpx;
	background-color: #f5f5f3;
}
```

`pages/login/login.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" />
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md" />
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" />
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:"login"
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;
  top: 200rpx;
  left: 0;right: 0;
  background-color: #FFFFFF;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

```



### 5.2 注册功能交互实现

`pages/login/login.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" v-model="form.username"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md"  v-model="form.password"/>
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" v-model="form.repassword"/>
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				if(this.type == 'reg'){
					uni.showLoading({
						title: '提交中...',
						mask: false
					});
					let data = Object.assign(this.form,{})
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				}
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

```

`api/api.js`

```javascript
import api from './request.js';
export default {
	// 获取首页数据
	getIndexData(){
		return api.get("/mobile/index")
	},
	// 获取可用秒杀列表
	getFlashsale(params = {}){
		return api.get("/mobile/flashsale",params)
	},
	// 获取可用拼团列表
	getGroup(params = {}){
		return api.get("/mobile/group",params)
	},
	// 注册账号
	reg(data){
		return api.post('/mobile/reg',data)
	}
}
```



### 5.3 登录功能交互实现

`pages/login/login.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" v-model="form.username"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md"  v-model="form.password"/>
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" v-model="form.repassword"/>
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				if(this.type == 'reg'){
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user=>{
						this.$toast('登录成功')
						this.$store.dispatch('login',user)
						setTimeout(()=>{
							this.back()
						},350)
					}).finally(()=>{
						uni.hideLoading()
					})
				}
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

```

`api/api.js`

```javascript
import api from './request.js';
export default {
	// 获取首页数据
	getIndexData(){
		return api.get("/mobile/index")
	},
	// 获取可用秒杀列表
	getFlashsale(params = {}){
		return api.get("/mobile/flashsale",params)
	},
	// 获取可用拼团列表
	getGroup(params = {}){
		return api.get("/mobile/group",params)
	},
	// 注册账号
	reg(data){
		return api.post('/mobile/reg',data)
	},
	// 账号登录
	login(data){
		return api.post('/mobile/login',data)
	}
}
```



### 5.4 初始化用户功能实现

`store/index.js`

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		user:null,
		token:null
	},
	actions:{
		// 初始化
		init({ state }){
			let user = uni.getStorageSync('user')
			if(user){
				state.user = JSON.parse(user)
				state.token = state.user.token
			}
		},
		
		login({ state },user){
			state.user = user
			state.token = user.token
			
			uni.setStorageSync('user',JSON.stringify(user))
		}
	}
})
```

`pages/login/login.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" v-model="form.username"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md"  v-model="form.password"/>
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" v-model="form.repassword"/>
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				if(this.type == 'reg'){
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user=>{
						this.$toast('登录成功')
						this.$store.dispatch('login',user)
						setTimeout(()=>{
							this.back()
						},350)
					}).finally(()=>{
						uni.hideLoading()
					})
				}
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

```



### 5.5 验证同意隐私声明

`pages/login/login.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">{{ type == 'login' ? '登 录' : '注 册' }}</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入用户名" class="rounded font-md" v-model="form.username"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入密码" class="rounded font-md"  v-model="form.password"/>
			</view>
			<view class="login-form" v-if="type == 'reg'">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="请输入确认密码" class="rounded font-md" v-model="form.repassword"/>
			</view>
			
			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>
			
			<view class="flex align-center justify-between my-3 font">
				<text class="py-3 text-main" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			
			
			<view class="flex align-center justify-center wechatlogin">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			
			
			<checkbox-group v-if="type == 'login'" class="flex align-center justify-center mt-4" @change="handleCheckboxChange">
				<label class="text-light-muted">
					<checkbox value="1" color="#7fd49e" style="transform: scale(0.7);"/><text class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				confirm:false,
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			handleCheckboxChange(e){
				this.confirm = !!e.detail.value.length
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				if(!this.confirm && this.type == 'login'){
					return this.$toast('请先阅读并同意用户协议&隐私声明')
				}
				
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				if(this.type == 'reg'){
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user=>{
						this.$toast('登录成功')
						this.$store.dispatch('login',user)
						setTimeout(()=>{
							this.back()
						},350)
					}).finally(()=>{
						uni.hideLoading()
					})
				}
			}
		}
	}
</script>

<style>
.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

```



### 5.6 绑定手机号功能开发

`store/index.js`

```javascript
<script>
	export default {
		data() {
			return {
				confirm:false,
				type:"login",
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		methods: {
			handleCheckboxChange(e){
				this.confirm = !!e.detail.value.length
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			resetForm(){
				this.form = {
					username:"",
					password:"",
					repassword:""
				}
			},
			submit(){
				if(!this.confirm && this.type == 'login'){
					return this.$toast('请先阅读并同意用户协议&隐私声明')
				}
				
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				if(this.type == 'reg'){
					this.$api.reg(data).then(res=>{
						this.$toast('注册成功')
						this.resetForm()
						this.changeType()
					}).finally(()=>{
						uni.hideLoading()
					})
				} else {
					this.$api.login(data).then(user=>{
						this.$toast('登录成功')
						this.$store.dispatch('login',user)
						if(!user.phone){
							uni.redirectTo({
								url:"../bind-phone/bind-phone"
							})
							return
						}
						setTimeout(()=>{
							this.back()
						},350)
					}).finally(()=>{
						uni.hideLoading()
					})
				}
			}
		}
	}
</script>
```

`api/api.js`

```javascript
import api from './request.js';
export default {
	// 获取首页数据
	getIndexData(){
		return api.get("/mobile/index")
	},
	// 获取可用秒杀列表
	getFlashsale(params = {}){
		return api.get("/mobile/flashsale",params)
	},
	// 获取可用拼团列表
	getGroup(params = {}){
		return api.get("/mobile/group",params)
	},
	// 注册账号
	reg(data){
		return api.post('/mobile/reg',data)
	},
	// 账号登录
	login(data){
		return api.post('/mobile/login',data)
	},
	// 获取手机验证码
	getCaptcha(data){
		return api.post('/mobile/get_captcha',data)
	},
	// 绑定手机号
	bindMobile(data){
		return api.post('/mobile/bind_mobile',data)
	},
}
```

`common/common.css`

```css
/* 主色调 */
/* 主背景色 */
.bg-main{
	background-color: rgb(92, 204, 132);
}
.bg-main-hover{
	background-color: #4bc175;
}
.bg-main-disabled{
	background-color: #7be09f;
}
/* 主文字色 */
.text-main{
	color: rgb(92, 204, 132);
}
/* 分割线 */
.divider{
	height: 15rpx;
	background-color: #f5f5f3;
}


.login-bg{
	height: 220rpx;
	background-image: linear-gradient(120deg,#3BFDAF 0%,#70D6F2 100%);
}
.login-back{
	position: fixed;
	top: 0;
	left: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.login{
	position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;
	padding: 60rpx 70rpx 0 70rpx;
}
.login .title{
	font-size: 22px;
	margin-bottom: 50rpx;
	color: #35404b;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;
	left: 0;top: 0;
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #272727;
}
.login-form input{
	height: 100rpx;
	padding-left: 100rpx;
	padding-right: 20rpx;
	background-color: #f5f5f5;
}
.login .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-radius: 10rpx;
}
.wechatlogin .uni-icons{
	border: 1rpx solid #5ccc84;
	width: 47px;
	border-radius: 100%;
	height: 47px;
	display: flex;
	align-items: center;
	justify-content: center;
}
```

`pages/bind-phone/bind-phone.vue`

```vue
<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="login-bg"></view>
		
		<view class="login">
			<view class="flex">
				<text class="title">绑定手机号</text>
			</view>
			<view class="login-form">
				<uni-icons type="person"></uni-icons>
				<input type="text" placeholder="请输入手机号" class="rounded font-md" v-model="form.phone"/>
			</view>
			<view class="login-form">
				<uni-icons type="locked"></uni-icons>
				<input type="text" placeholder="验证码" class="rounded font-md"  v-model="form.code"/>
				<code-btn :phone="form.phone"></code-btn>
			</view>

			<view class="bg-main btn" hover-class="bg-main-hover" @click="submit">绑 定</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					phone:"",
					code:""
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				uni.showLoading({
					title: '提交中...',
					mask: false
				});
				let data = Object.assign(this.form,{})
				
				this.$api.bindMobile(data).then(res=>{
					this.$toast('绑定成功')
					this.$store.dispatch('updateInfo',data.phone)
					setTimeout(()=>{
						this.back()
					},350)
				}).finally(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>

</style>

```

`components/code-button.vue`

```vue
<template>
	<view class="code-btn bg-main" hover-class="bg-main-hover" @click="sendCode">
		{{ time > 0 ? (time + 's') : '发送' }}
	</view>
</template>

<script>
	let timer = null
	export default {
		name:"code-btn",
		props: {
			phone: {
				type: [Number,String],
				default: ''
			},
		},
		data() {
			return {
				time:0
			};
		},
		methods: {
			sendCode() {
				if(this.time > 0){
					return
				}
				
				this.$api.getCaptcha({
					phone:this.phone
				}).then(res=>{
					console.log(res);
					if(typeof res == 'number'){
						this.$toast('验证码：'+res)
					} else {
						this.$toast('发送成功')
					}
					this.time = 60
					timer = setInterval(()=>{
						this.time--
						if(this.time <= 0){
							clearInterval(timer)
						}
					},1000)
				})
				
				
			}
		},
	}
</script>

<style>
.code-btn{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 200rpx;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	border-top-right-radius: 8rpx;
	border-bottom-right-radius: 8rpx;
}
</style>

```



### 5.7 忘记密码功能开发

## 六、个人中心模块开发

### 6.1 个人中心页功能开发

### 6.2 个人设置页开发

### 6.3 退出登录功能实现

### 6.4 权限验证跳转

### 6.5 修改密码页功能开发

### 6.6 缓存计算和清除缓存

### 6.7 修改资料页开发

### 6.8 上传文件功能实现

### 6.9 修改资料功能开发

### 6.10 我的订单功能开发

## 七、优惠卷模块开发

### 7.1 首页优惠卷列表功能开发

### 7.2 领取优惠卷功能实现

### 7.3 登录退出后优惠卷状态处理

### 7.4 我的优惠卷列表功能开发

## 八、搜索页和列表页开发

### 8.1 搜索页功能开发

### 8.2 搜索结果页功能开发

## 九、图文、音频和视频课程模块开发

### 9.1 课程详情页功能开发

### 9.2 图文课程详情功能开发

### 9.3 视频课程详情功能开发

### 9.4 音频课程详情功能开发

## 十、专栏模块开发

### 10.1 专栏详情页开发

### 10.2 专栏详情页功能开发

## 十一、学习进度模块开发

## 十二、考试模块开发

## 十三、社区和电子书模块开发

## 十四、电子书与收藏模块开发

## 十五、拼团、秒杀与订单模块开发

## 十六、直播模块开发

## 十七、多端兼容与项目部署

### 17.1 兼容微信小程序端处理

### 17.2 兼容APP端处理

### 17.3 项目前端部署

### 17.4 项目服务端部署

### 17.5 小程序分包加载