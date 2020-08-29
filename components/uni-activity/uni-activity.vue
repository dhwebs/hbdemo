<template>
	<view>
		<view class="b-b">
			<image src="/static/images/1.jpg" mode="aspectFill"></image>
			<view class="titleText">拔河比赛</view>
			<view class="text">
				<slot name="bottom">
					<text class="infoText">时间：2020-09-10</text>
					<text class="infoText">地点：坂田</text>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	//首页大图板块
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.b-b{
		margin-top: 30rpx;
		width: 100%;
		image{
			width: 100%;
			height: 300rpx;
			border-radius: 30rpx;
			margin-right: 10rpx;
		}
		.text{
			color: #aaa;
			display: flex;
			width: 100%;
			justify-content: space-between;
			font-size: 30rpx;
		}
	}
</style>
