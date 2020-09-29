<template>
	<view style="width: 100vw;">
		<view class="top">
			<input type="text" v-model="word" placeholder="搜索房间" @confirm="search"/>
			<image class="top-r" src="/static/images/search/icon2.png" mode="aspectFit" @click="drawerClick"></image>
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
		<uni-drawer ref="drawer" mode="right">
			<view style="padding:30rpx;" class="drawer">
				<view class="uni-title">筛选条件<text @click="gotoLogin" style="display: inline-block;width:220rpx;color:#007AFF;text-align: right;">切换后台</text></view>
				<view class="uni-title">用途</view>
				<view class="button">
					<button :type="purpose=='长租'?'primary':'default'" @click="searchChange('purpose','长租')">长租</button>
					<button :type="purpose=='短租'?'primary':'default'" @click="searchChange('purpose','短租')">短租</button>
				</view>
				<view class="uni-title">排序</view>
				<view class="button">
					<button :type="order=='asc'?'primary':'default'" @click="searchChange('order','asc')">正序</button>
					<button :type="order=='desc'?'primary':'default'" @click="searchChange('order','desc')">倒序</button>
				</view>
			</view>
			<button type="primary" class="drawerButton" @click="searchCheck">确定</button>
		</uni-drawer>
		<view class="banner">
			<view class="b-box" v-for="(item,i) in houseList" :key="i" @click="gotoInfo(item)">
				<image src="https://7368-shop-886748-1302750918.tcb.qcloud.la/image/listing01.jpg" mode=""></image>
				<view class="b-b-right">
					<view>{{item.building}} {{item.houseNumber}} {{item.houseType}}</view>
					<view>{{item.renovation}}</view>
					<view>{{item.pledge}}</view>
					<view class="b-b-b">
						<view>{{item.purpose}}</view>
						<view style="color:red">{{item.rent}}元/{{item.purpose=='长租'?'月':'日'}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:'',
				houseList:[],
				cursor:1,
				purpose:'',
				order:'asc',
			};
		},
		onLoad() {
			this.getHouse()
		},
		onPullDownRefresh() {//下拉刷新
			this.cursor=1
			this.houseList=[]
			this.getHouse()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			},1500)
		},
		onReachBottom() {//触底加载更多
			let data={
				houseNumber:this.word,
				purpose:this.purpose,
				order:this.order,
			}
			this.getHouse(data)
		},
		methods:{
			getHouse(data={}){//分页查询房源
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				data.cloud='house'
				data.sort='houseNumber'
				data.cursor=this.cursor
				data.state='未租'
				uniCloud.callFunction({
					name:'get',
					data:data
				}).then(res=>{
					console.log(res)
					this.houseList=[...this.houseList,...res.result.data]
					console.log(this.houseList)
					wx.hideLoading()
					this.cursor++
				}).catch(err=>{
					console.log(err,'err')
					wx.hideLoading()
				})
			},
			drawerClick(){//打开抽屉
				this.$refs.drawer.open()
				console.log(213)
			},
			addHouse(){//添加房源
				uni.navigateTo({
					url:'../addHouse/addHouse'
				})
			},
			search(){//搜索
				let data={
					houseNumber:this.word
				}
				this.cursor=1
				this.houseList=[]
				this.getHouse(data)
			},
			searchChange(type,result){//筛选条件
				console.log(this[type],result)
				this[type]=this[type]==result?'':result
			},
			searchCheck(){
				this.$refs.drawer.close()
				let data={
					houseNumber:this.word,
					state:this.state,
					purpose:this.purpose,
					order:this.order,
				}
				this.cursor=1
				this.houseList=[]
				this.getHouse(data)
			},
			gotoInfo(item){//跳转详情
				console.log(item,1111)
				uni.navigateTo({
					url:'../notRentInfo/notRentInfo?id='+item._id
				})
			},
			gotoLogin(){//切换至后台
				console.log(111)
				if(!uni.getStorageSync('user')._id){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					uni.switchTab({
						url:'../main/main'
					})
				}
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
	input{
		/* #ifndef MP */
			flex: 1;
		/* #endif */
		/* #ifdef MP */
			width: 62%;
		/* #endif */
		height: 60rpx;
		border-radius: 10rpx;
		margin: 0 15rpx 15rpx;
		border: 1rpx solid #0099ff;
	}
	.top-r{
		margin:0 20rpx 25rpx 0;
		width: 50rpx;
		height: 50rpx;
	}
}
.swiper{
	width: 100%;
	height: 400rpx;
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
.drawer{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.uni-title{
		margin: 20rpx 0;
	}
	.button{
		display: flex;
		justify-content: space-around;
		button{
			width: 150rpx;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 28rpx;
		}
	}
}
.drawerButton{
	position: fixed;
	bottom: 60rpx;
	left: 10%;
	width: 80%;
}
.drawerButton2{
	position: fixed;
	bottom:0rpx;
	left: 10%;
	width: 80%;
}
.banner{
	// height: 2000rpx;
	width: 100%;
	display: flex;
	padding-bottom: 100rpx;
	// justify-content: space-around;
	flex-wrap: wrap;
	.b-box{
		width: 96%;
		height: 250rpx;
		background: #fff;
		margin: 20rpx 2% 0;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		image{
			width: 250rpx;
			height: 100%;
			border-radius: 15rpx;
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
	}
}
</style>
