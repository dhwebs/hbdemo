<template>
	<view>
		<view class="tuijian" v-for="item in 3">
			<image src="/static/images/0.jpg"></image>
			<view class="t-right">
				<text class="titleText">推荐火锅活动</text>
				<text class="infoText">2020-08-01至2020-09-01</text>
				<text>坂田</text>
				<view class="t-tag">
					<text class="tag">新品</text>
				</view>
				<view class="t-bottom">
					<text>￥990</text>
					<text class="oldMoney">￥99</text>
					<slot name='button'>
						<button type="success">购买</button>
					</slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//购买商品板块
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.tuijian{
		width: 100%;
		height: 280rpx;
		border-radius: 25rpx;
		overflow: hidden;
		margin-top: 20rpx;
		background: $uni-bg-color;
		display: flex;
		image{
			width: 230rpx;
			height: 100%;
			margin-right: 20rpx;
		}
		.t-right{
			flex: 1;
			font-size: 30rpx;
			height: 100%;
			display: flex;
			line-height: 50rpx;
			flex-direction: column;
			text:nth-child(1){
				color:red
			}
			.t-tag{
				width: 100%;
				flex: 1;
			}
			.t-bottom{
				display: flex;
				button{
					width: 120rpx;
					margin-left: 120rpx;
					height: 50rpx;
					line-height: 50rpx;
					border-radius: 25rpx;
					color: #fff;
					font-size:$uni-font-size-sm ;
					background: $uni-color-primary;
				}
			}
		}
	}
</style>
