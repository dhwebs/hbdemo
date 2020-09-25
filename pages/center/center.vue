<template>
	<view>
		<!-- <view class="top">
			<view class="t-left">
				<image src="../../static/images/fj4.jpg" mode=""></image>
				<view class="topTitle">
					<view>村头公寓</view>
					<view class="text">管理员</view>
				</view>
			</view>
			<view class="button">办理业务</view>
		</view> -->
		<uni-list class="box">
			<uni-list-item title="租房记录" @click="goto('../rentRecord/rentRecord')"></uni-list-item>
			<uni-list-item title="退房记录" @click="goto('../rentRecord/rentRecord?state=false')"></uni-list-item>
			<uni-list-item title="维修记录" link to="/pages/index/index"></uni-list-item>
			<uni-list-item title="收支记录" link to="/pages/index/index"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goto(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
	// margin-top: 40rpx;
}
.top{
	background: #ff557f;
	height: 400rpx;
	width: 100vw;
	display: flex;
	align-items: center;
	.button{
		border-radius: 30rpx;
		margin-right: 40rpx;
		font-size: 30rpx;
		color: #fff;
		border: none;
		padding:20rpx;
		background: #fc5380;
	}
	.t-left{
		flex: 1;
		display: flex;
		image{
			margin-left: 50rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius:50% ;
		}
		.topTitle{
			color: #fff;
			margin-left: 20rpx;
			.text{
				font-size: 28rpx;
			}
		}
	}
}
</style>
