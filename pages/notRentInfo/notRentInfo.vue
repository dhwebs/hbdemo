<template>
	<view style="width: 100vw;">
		<view class="top">
			<uni-icons type="back" class="top-r" size="26" @click="gotoPrv"></uni-icons>
			<view class="input" @click="callLand">联系房东</view>
		</view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper_item">
				<image src="../../static/images/fj3.jpg" mode=""></image>
			</swiper-item>
			<swiper-item class="swiper_item">
				<image src="../../static/images/fj4.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="swiper_item">
				<image src="../../static/images/fj8.jpg" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="b-b-right">
			<view class="titleAllText">{{item.building}} {{item.houseNumber}} </view>
			<view style="color:gray">{{item.houseType}} | {{item.renovation}} | {{item.pledge}}</view>
			<view></view>
			<view class="b-b-b">
				<view>{{item.purpose}}</view>
				<view style="color:red">{{item.rent}}元/{{item.purpose=='长租'?'月':'日'}}</view>
			</view>
		</view>
		<view class="titleAllText" style="margin-left: 20rpx;">房源参数</view>
		<view class="box">
			<view class="uni-form-item">
				<view class="title">楼栋</view>
				<view class="uni-input">{{item.building}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">楼层</view>
				<view class="uni-input">{{item.floor}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">门牌号</view>
				<view class="uni-input">{{item.houseNumber}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">面积</view>
				<view class="uni-input">{{item.area}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">户型</view>
				<view class="uni-input">{{item.houseType}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">朝向</view>
				<view class="uni-input">{{item.orientation}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">装修</view>
				<view class="uni-input">{{item.renovation}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">类型</view>
				<view class="uni-input">{{item.purpose}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">租金</view>
				<view class="uni-input">{{item.rent}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">水单价</view>
				<view class="uni-input">{{item.waterPrice}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">电单价</view>
				<view class="uni-input">{{item.electricityPrice}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">押付</view>
				<view class="uni-input">{{item.pledge}}</view>
			</view>
			<view class="uni-form-item">
				<view class="title">门卡押金</view>
				<view class="uni-input">{{item.cardDeposit}}</view>
			</view>
			<view class="uni-form-item" @click="gotoAddress">
				<view class="title">房源地址</view>
				<view class="uni-input" style="color:#007AFF">{{item.addressName}}</view>
			</view>
		</view>
		<view class="titleAllText" style="margin-left: 20rpx;">房源资产</view>
		<dh-assets style="margin-left:-20rpx;" :list="item.assets" disabled></dh-assets>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{},
				userPhone:''
			};
		},
		onLoad(option) {
			this.getHouseInfo(option.id)
		},
		methods:{
			getHouseInfo(id){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'house',
						_id:id
					}
				}).then(res=>{
					this.item=res.result.data[0]
					this.item.assets=this.item.assets.split(',')
					this.getUser(this.item.createdId)
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getUser(_id){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'user',
						_id:_id
					}
				}).then(res=>{
					this.userPhone=res.result.data[0].phone
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			gotoAddress(){//跳转地图
				uni.openLocation({
					latitude: this.item.latitude,
					longitude: this.item.longitude,
					name: this.item.addressName,
					address:this.item.address,
					scale: 18
				})
			},
			gotoPrv(){//后退
				uni.navigateBack()
			},
			callLand(){//联系房东
				if(!this.userPhone){
					uni.showToast({
						title:'暂无房东电话',
						icon:'none'
					})
					return
				}
				console.log(this.userPhone)
				uni.makePhoneCall({
					phoneNumber: this.userPhone.toString(),
					success: (res) => {
						console.log(res)
					},
					fail:(err)=>{
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	top:0;
	z-index: 999;
	position: sticky;
	display: flex;
	width: 100vw;
	align-items: flex-end;
	height: 130rpx;
	background: #55aaff;
	.input{
		/* #ifndef MP */
			flex: 1;
		/* #endif */
		/* #ifdef MP */
			width: 62%;
		/* #endif */
		height: 60rpx;
		border-radius: 10rpx;
		margin: 0 65rpx 15rpx 0;
		text-align: right;
		color: #fff;
	}
	.top-r{
		margin:0 20rpx 25rpx 0rpx;
		width: 50rpx;
		height: 50rpx;
	}
}
.swiper{
	width: 100%;
	height: 500rpx;
	z-index: -1;
	.swiper_item{
		width: 100%;
		image{
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}
}
.b-b-right{
	flex: 1;
	margin-left: 20rpx;
	line-height: 60rpx;
	.b-b-b{
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
}
.box{
	width: 93%;
	margin:10rpx auto;
	.uni-form-item{
		width: 100%;
	}
}
</style>
