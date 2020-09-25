<template>
	<view class="box">
		<view class="top">
			<view class="t-left">
				<image src="../../static/images/fj4.jpg" mode=""></image>
				<view class="topTitle">
					<view>村头公寓</view>
					<view class="text">管理员</view>
				</view>
			</view>
			<!-- <view class="button">办理业务</view> -->
		</view>
		<view class="banner">
			<view class="b-top">空置房屋</view>
			<view class="b-bottom">
				<view class="b-b-banner">
					<view>{{longNotRent}}</view>
					<view class="b-little">长租</view>
				</view>
				<view class="b-b-banner">
					<view>{{shortNotRent}}</view>
					<view class="b-little">短租</view>
				</view>
				<view class="b-b-banner">
					<view>{{((longNotRent+shortNotRent)*100/allHouse).toFixed(2)}}%</view>
					<view class="b-little">空房率</view>
				</view>
			</view>
		</view>
		<view class="banner">
			<view class="b-top">今日数据</view>
			<view class="b-bottom">
				<view class="b-b-banner">
					<view>{{todayLong}}</view>
					<view class="b-little">长租</view>
				</view>
				<view class="b-b-banner">
					<view>{{todayShort}}</view>
					<view class="b-little">短租</view>
				</view>
				<view class="b-b-banner">
					<view>{{todayOut}}</view>
					<view class="b-little">退房</view>
				</view>
			</view>
		</view>
		<view class="banner">
			<view class="b-top">我的房源</view>
			<view class="b-bottom">
				<view class="b-b-banner">
					<view>{{longRent}}</view>
					<view class="b-little">长租</view>
				</view>
				<view class="b-b-banner">
					<view>{{shortRent}}</view>
					<view class="b-little">短租</view>
				</view>
				<view class="b-b-banner" @click="addHouse">
					<view>+</view>
					<view class="b-little">添加</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allHouse:0,
				longNotRent:0,
				shortNotRent:0,
				longRent:0,
				shortRent:0,
				todayLong:0,
				todayShort:0,
				todayOut:0
			};
		},
		created() {
		},
		onPullDownRefresh() {//下拉刷新
			this.getMain()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			},1500)
		},
		onShow() {
			this.getMain()
		},
		methods:{
			addHouse(){
				console.log(123)
				uni.navigateTo({
					url:'../addHouse/addHouse'
				})
			},
			getHouse(cloud,type,state,result){
				uniCloud.callFunction({
					name:'count',
					data:{
						cloud:cloud,
						purpose:type,
						state:state
					}
				}).then(res=>{
					console.log(res,11111)
					this[result]=res.result.total
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getRent(type,state,result){
				uniCloud.callFunction({
					name:'count',
					data:{
						cloud:'rent',
						purpose:type,
					}
				}).then(res=>{
					this[result]=res.result.total
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getMain(){
				this.getHouse('house','','','allHouse')
				this.getHouse('house','长租','未租','longNotRent')
				this.getHouse('house','短租','未租','shortNotRent')
				this.getHouse('house','长租','','longRent')
				this.getHouse('house','短租','','shortRent')
				this.getHouse('rent','长租','','todayLong')
				this.getHouse('rent','短租','','todayShort')
				this.getHouse('rent','',false,'todayOut')
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	flex-direction: column;
	align-items: center;
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
.banner{
	margin-top: -80rpx;
	margin-bottom: 100rpx;
	width: 95%;
	height: 250rpx;
	background: #fff;
	border-radius: 20rpx;
	padding: 10rpx 0;
	.b-top{
		margin:20rpx 0 0 20rpx;
	}
	.b-bottom{
		width: 100%;
		display: flex;
		margin-top: 40rpx;
		justify-content: space-around;
		.b-b-banner{
			display: flex;
			flex-direction: column;
			justify-content:center;
			align-items: center;
			.b-little{
				color: #ccc;
				font-size: 32rpx;
				margin-top: 10rpx;
			}
		}
	}
}
</style>
