<template>
	<view class="bigBox">
		<view class="top">
			<view class="top-l">
				<image src="/static/images/address.png" mode="aspectFit"></image>
				<view class="top-l-l">
					<text>深圳市</text>
					<text>晴 30℃</text>
				</view>
			</view>
			<view class="top-b">
				<uni-icons type="search" color="#ddd" size="25"></uni-icons>
				请输入搜索关键字
			</view>
			<image class="top-r" src="/static/images/search/icon2.png" mode="aspectFit"></image>
		</view>
		<swiper class="top-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/2.jpg" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/1.jpg" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
	<!-- 	<view class="navinfo">
			<view class="grid">
				<image src="../../static/images/图标1.png" mode="aspectFit"></image>
				<text>热销</text>
			</view>
			<view class="grid">
				<image src="../../static/images/coupon_center.png" mode="aspectFit"></image>
				<text>新品</text>
			</view>
			<view class="grid">
				<image src="../../static/images/图标1.png" mode="aspectFit"></image>
				<text>推荐</text>
			</view>
			<view class="grid">
				<image src="../../static/images/coupon_center.png" mode="aspectFit"></image>
				<text>分类</text>
			</view>
		</view> -->
		<view class="banner">
			<uni-plate-head></uni-plate-head>
			<uni-activity v-for="item in 3"></uni-activity>
		</view>
		<view class="banner2">
			<uni-plate-head @click="more">产品推荐</uni-plate-head>
			<uni-purchase :list="list"></uni-purchase>
		</view>
		<view class="banner3">
			<uni-plate-head>最新资讯</uni-plate-head>
			<uni-activity v-for="item in 3">
				<template #bottom>
					<text class="infoText">点赞：0</text>
					<text class="infoText">收藏：5</text>
				</template>
			</uni-activity>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onPullDownRefresh (){
			this.getShop()
			setTimeout(()=>uni.stopPullDownRefresh(),2000)
		},
		created() {
			this.getShop()
		},
		methods: {
			more(e){
				uni.switchTab({
					url:'../ticket/ticket'
				})
			},
			getShop(){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'order'
					}
				}).then(res=>{
					this.list=res.result.data
					console.log(res,this.list)
				}).catch(err=>{
					console.log(err,'err')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	margin-top: 10rpx;
	height: 80rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 20rpx;
	.top-l{
		width: 180rpx;
		display: flex;
		font-size: 30rpx;
		image{
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			margin-right: 10rpx;
		}
		.top-l-l{
			flex:1;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
		}
	}
	.top-b{
		flex:1;
		font-size: 30rpx;
		color:#ccc;
		background: #f4f4f4;
		height: 65rpx;
		border-radius: 40rpx;
		line-height: 65rpx;
		text-align: center;
	}
	.top-r{
		margin-left: 30rpx;
		width: 50rpx;
		height: 50rpx;
	}
}
.top-swiper{
	height: 380rpx;
	width: 100%;
	border-radius: 30rpx;
	overflow: hidden;
	.swiper-item{
		width: 100%;
		height: 100%;
		image{
			height: 100%;
			width: 100%;
		}
	}
	margin-bottom: 50rpx;
}
.banner{
	margin-top: 30rpx;
	border-top: 1rpx solid #ddd;
}
.banner2{
	margin-top: 30rpx;
}
.banner3{
	margin-top: 30rpx;
	padding-bottom:120rpx ;
}
.navinfo{
	width: 100%;
	height: 140rpx;
	display: flex;
	.grid{
		flex: 1;
		border: none;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:space-around;
		image{
			height: 60%;
			width: 100%;
		}
		text{
			text-align: center;
			width: 100%;
			font-size: $uni-font-size-base;
			color: $uni-color-primary;
		}
	}
}
</style>
