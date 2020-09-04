<template>
	<view>
		<view class="top">
			<text>支付成功</text>
			<view >
				<text style="font-size: 26rpx;">支付金额：</text>
				<text style="color: red;">￥100</text>
			</view>
			<view class="t-footer">
				<button type="default" @click="back">返回首页</button>
				<button type="default">查看订单</button>
			</view>
		</view>
		<text class="line">
			好物推荐
		</text>
		<view class="box">
			<uni-purchase type="column"></uni-purchase>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.switchTab({
				    url: '../index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	margin-bottom: 60rpx;
}
.top{
	margin: 50rpx 0 ;
	width: 95vw;
	height: 300rpx;
	border-radius:40rpx ;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: center;
	.t-footer{
		display: flex;
		button{
			font-size: 16rpx;
		}
	}
}
.line{
	margin: 20rpx 0;
	width: 95vw;
	font-size: 14px;
	color: red;
	display: flex;
	align-items: center;
	&::after , &::before{
		color: #ccc;
		content: '';
		white-space: nowrap;
		flex: 1;
		// margin:0 20rpx;
		overflow: hidden;
		height: 1rpx;
		border-top:1rpx dashed #ccc ;
	}
}
</style>
