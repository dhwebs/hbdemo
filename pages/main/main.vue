<template>
	<view class="box">
		<view class="top">
			<view class="t-left" @click="gotoLogin">
				<image src="../../static/images/fj4.jpg" mode=""></image>
				<view class="topTitle">
					<view>{{user.co}}</view>
					<view class="text">管理员</view>
				</view>
			</view>
			<view class="button" @click="gotoClient">去客户端</view>
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
					<view>{{((longNotRent+shortNotRent)*100/allHouse).toFixed(2)>0?((longNotRent+shortNotRent)*100/allHouse).toFixed(2) : 0}}%</view>
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
				user:{},
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
			this.user=uni.getStorageSync('user')
		},
		onPullDownRefresh() {//下拉刷新
			if(!uni.getStorageSync('user')._id){
				uni.showModal({
					title:'请先登录',
					success: (res) => {
						uni.navigateTo({
							url:'../login/login'
						})
					}
				})
				return
			}
			this.getMain()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			},1500)
		},
		onShow() {
			this.user=uni.getStorageSync('user')
			if(!uni.getStorageSync('user')._id){
				uni.showModal({
					title:'请先登录',
					success: (res) => {
						uni.navigateTo({
							url:'../login/login'
						})
					}
				})
				return
			}
			this.getMain()
		},
		methods:{
			addHouse(){
				console.log(123)
				uni.navigateTo({
					url:'../addHouse/addHouse'
				})
			},
			getHouse(cloud,type,state,result,creatTime){
				let user=uni.getStorageSync('user')
				uniCloud.callFunction({
					name:'count',
					data:{
						cloud:cloud,
						purpose:type,
						state:state,
						creatTime:creatTime,
						createdId:user._id
					}
				}).then(res=>{
					console.log(res,11111)
					this[result]=res.result.total
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getMain(){
				let time = new Date()
				let year=time.getFullYear()
				let month=(time.getMonth() + 1).toString().padStart("2", "0")
				let day=time.getDate().toString().padStart("2", "0")
				time = year + '-' + month + '-' + day
				this.getHouse('house','','','allHouse')
				this.getHouse('house','长租','未租','longNotRent')
				this.getHouse('house','短租','未租','shortNotRent')
				this.getHouse('house','长租','','longRent')
				this.getHouse('house','短租','','shortRent')
				this.getHouse('rent','长租',true,'todayLong',time)
				this.getHouse('rent','短租',true,'todayShort',time)
				this.getHouse('rent','',false,'todayOut',time)
			},
			gotoClient(){//跳转客户端
				uni.navigateTo({
					url:'../notRent/notRent'
				})
			},
			gotoLogin(){//退出登录
				uni.showModal({
					title:'是否退出登录？',
					success: (res) => {
						if(res.confirm){
							uni.navigateTo({
								url:'../login/login'
							})
						}else{
							wx.showToast({
								icon:'none',
								title:'已取消'
							})
						}
					}
				})
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
