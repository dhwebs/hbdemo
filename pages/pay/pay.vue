<template>
	<view>
		<view class="ttbox">
			
		</view>
		<view class="topbox">
			<view class="t-top">
				<image src="../../static/images/fj5.jpg" mode=""></image>
				<view class="t-t-right">
					<text class="titleText">【暑期限时特惠】三亚大小洞天单门票+彩虹滑道体验票</text>
					<text class="infoText">颜色:鸭屎绿 尺寸:XXL</text>
					<view class="num">
						<text class="money">￥2304</text>
						<uni-number-box :min="1" :max="9" @change="numChange"></uni-number-box>
					</view>
				</view>
			</view>
			<view class="t-footer">
				<uni-list>
					<uni-list-item  title="配送方式" rightText="自提" note="9:00-20:00"></uni-list-item>
				</uni-list>
			</view>
		</view>
		<view class="banner">
			<uni-list>
				<uni-list-item  title="商品金额" rightText="￥111" :showArrow='false'></uni-list-item>
				<uni-list-item  title="重量" rightText="1.0kg" :showArrow='false'></uni-list-item>
				<uni-list-item  title="优惠券" rightText="无可用"></uni-list-item>
				<uni-list-item  title="积分 (共1000分)" rightText="去选择"></uni-list-item>
				<uni-list-item  title="礼品卡" rightText="无可用"></uni-list-item>
			</uni-list>
			<view class="b-footer">
				合计：<text>￥111</text>
			</view>
		</view>
		<view class="footer">
			<button type="warn" @click="pay" :disabled='disabled'>提交订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled:false,
				num:1
			};
		},
		onLoad(option) {
			console.log(option,'asdsdas')
		},
		methods:{
			numChange(val){
				this.num=val
			},
			pay(){//提交订单
				this.disabled=true
				setTimeout(()=>{
					this.disabled=false
					uni.navigateTo({
						url:'../afterPay/afterPay'
					})
				},2000)
				uni.showToast({
					title:'购买成功'
				})
			}
		}
	}
</script>

<style lang="scss">
.topbox{
	background-color: #fff;
	height: 320rpx;
	margin-top: 50rpx;
	border-radius: 40rpx;
	width: 90vw;
	.t-top{
		height: 180rpx;
		display: flex;
		overflow: hidden;
		image{
			width: 150rpx;
			height: 100%;
			margin-right: 20rpx;
			border-radius: 10rpx;
		}
		.t-t-right{
			flex:1;
			overflow: hidden;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			.money{
				color: red;
			}
			.num{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
}
.banner{
	margin-top:50rpx;
	border-radius: 40rpx;
	background-color: #fff;
	.b-footer{
		width: 100%;
		height: 50rpx;
		line-height: 50rpx;
		padding: 30rpx 0;
		border-top: 1px solid #f4f4f4;
		text-align: right;
		text{
			color: red;
			margin-right: 40rpx;
		}
	}
}
.footer{
	margin-top: 50rpx;
	button{
		background: red;
	}
}
</style>
