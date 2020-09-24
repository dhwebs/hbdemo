<template>
	<view>
		<view class="top">
			<input type="text" v-mode="word" placeholder="搜索房间"/>
			<image class="top-r" src="/static/images/search/icon2.png" mode="aspectFit" @click="drawerClick"></image>
		</view>
		<uni-drawer ref="drawer" mode="right">
		    <view style="padding:30rpx;">
		        <view class="uni-title">抽屉式导航</view>
		    </view>
		</uni-drawer>
		<view class="banner">
			<view class="b-box" v-for="item in houseList" :key="item._id">
				<text class="b-b-top1">{{item.state=='未租'?'空':'租'}}</text>
				<text class="b-b-top2">{{item.houseNumber}}</text>
				<text class="b-b-top3">{{item.purpose}}</text>
				<text class="b-b-top5">租金：{{item.rent}}元/{{item.purpose=='长租'?'月':'日'}}</text>
				<text class="b-b-top4">到期时间 : {{item.state=='未租'?'空置未租':'2020-09-30'}}</text>
			</view>
			
			<view class="b-box" @click="addHouse">
				<image src="../../static/images/plus.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word:'',
				houseList:[]
			};
		},
		created() {
			this.getHouse()
		},
		methods:{
			getHouse(){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'house',
						limit:10,
						cursor:1
					}
				}).then(res=>{
					console.log(res)
					this.houseList=res.result.data
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			drawerClick(){
				this.$refs.drawer.open()
				console.log(213)
			},
			addHouse(){
				uni.navigateTo({
					url:'../addHouse/addHouse'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	top: 0;
	position: sticky;
	display: flex;
	width: 100vw;
	align-items: center;
	height: 80rpx;
	background: #fff;
	input{
		flex: 1;
		height: 60rpx;
		border-radius: 10rpx;
		margin-left: 1rpx;
		border: 1rpx solid #ccc;
	}
	.top-r{
		margin:0 20rpx;
		width: 50rpx;
		height: 50rpx;
	}
}
.banner{
	// height: 2000rpx;
	width: 100%;
	display: flex;
	// justify-content: space-around;
	flex-wrap: wrap;
	.b-box{
		// color:#fff;
		width: 46%;
		height: 280rpx;
		// background: orange;
		// background: red;
		// background: #00aa99;
		background: #fff;
		margin: 20rpx 2% 0;
		
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.b-b-top1{
			text-align: right;
			margin-right: 15rpx;
		}
		.b-b-top2{
			text-align: center;
			font-size:56rpx;
		}
		.b-b-top3{
			font-size: 33rpx;
			text-align: center;
		}
		.b-b-top4{
			font-size: 26rpx;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.b-b-top5{
			font-size: 26rpx;
			text-align: center;
		}
		image{
			width: 50%;
			height: 70%;
			opacity: 0.1;
			margin: 15% auto;
		}
	}
}
</style>
