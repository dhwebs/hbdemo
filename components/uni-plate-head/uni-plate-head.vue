<template>
	<view>
		<view class="b-top">
			<image src="/static/images/line.png" mode="aspectFit"></image>
			<text>推荐活动</text>
			<view class="b-t-right infoText">
				更多<uni-icons type="arrowright"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	//首页小标题
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.b-top{
	margin-top: 40rpx;
	display: flex;
	align-items: center;
	width: 100%;
	image{
		width: 20rpx;
		height: 50rpx;
		margin-right: 10rpx;
	}
	.b-t-right{
		flex: 1;
		font-size: 30rpx;
		text-align: right;
		text{
			line-height: 40rpx;
		}
	}
}
</style>
