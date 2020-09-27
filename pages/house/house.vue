<template>
	<view>
		<view class="top">
			<input type="text" v-model="word" placeholder="搜索房间" @confirm="search"/>
			<image class="top-r" src="/static/images/search/icon2.png" mode="aspectFit" @click="drawerClick"></image>
		</view>
		<uni-drawer ref="drawer" mode="right">
			<view style="padding:30rpx;" class="drawer">
				<view class="uni-title">筛选条件</view>
				<view class="uni-title">用途</view>
				<view class="button">
					<button :type="purpose=='长租'?'primary':'default'" @click="searchChange('purpose','长租')">长租</button>
					<button :type="purpose=='短租'?'primary':'default'" @click="searchChange('purpose','短租')">短租</button>
				</view>
				<view class="uni-title">状态</view>
				<view class="button">
					<button :type="state=='未租'?'primary':'default'" @click="searchChange('state','未租')">未租</button>
					<button :type="state=='已租'?'primary':'default'" @click="searchChange('state','已租')">已租</button>
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
			<view class="b-box" :class="(item.state=='已租' && item.payState && !item.later)?'b-box2':(item.state=='已租' && !item.payState && !item.later)?'b-box3':item.later?'b-box4':''" v-for="(item,i) in houseList" :key="i" @click="gotoHouse(item)">
				<text class="b-b-top1">{{item.state=='未租'?'空':item.later?'逾':'租'}}</text>
				<text class="b-b-top2">{{item.houseNumber}}</text>
				<text class="b-b-top3">{{item.purpose}}</text>
				<text class="b-b-top5">租金：{{item.rent}}元/{{item.purpose=='长租'?'月':'日'}}</text>
				<text class="b-b-top4">到期时间 : {{item.state=='未租'?'空置未租':item.endTime}}</text>
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
				houseList:[],
				cursor:1,
				state:'',
				purpose:'',
				order:'asc',
			};
		},
		created() {
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
				state:this.state,
				purpose:this.purpose,
				order:this.order,
			}
			this.getHouse(data)
		},
		methods:{
			getHouse(data={}){//分页查询房源
				data.cloud='house'
				data.sort='houseNumber'
				data.cursor=this.cursor
				uniCloud.callFunction({
					name:'get',
					data:data
				}).then(res=>{
					console.log(res)
					let data = new Date();
					let month = data.getMonth() + 1;
					res.result.data.forEach(item=>{
						if(item.state=='已租'){
							if(data>new Date(item.endTime)) item.later=true
							item.billList.forEach(list=>{
								if(list.month == month) item.payState=list.state
							})
						}
					})
					this.houseList=[...this.houseList,...res.result.data]
					console.log(this.houseList)
					this.cursor++
				}).catch(err=>{
					console.log(err,'err')
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
			gotoHouse(item){//调整详情
				uni.navigateTo({
					url:'../houseInfo/houseInfo?id='+item._id
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
			}
		}
	}
</script>

<style lang="scss" scoped>
.top{
	top:0;
	position: sticky;
	display: flex;
	width: 100vw;
	align-items: flex-end;
	height: 130rpx;
	background: #fc5380;
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
		border: 1rpx solid #f04d7e;
	}
	.top-r{
		margin:0 20rpx 25rpx 0;
		width: 50rpx;
		height: 50rpx;
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
.banner{
	// height: 2000rpx;
	width: 100%;
	display: flex;
	padding-bottom: 100rpx;
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
	.b-box2{
		color: #fff;
		background: #00aa99;
	}
	.b-box3{
		color: #fff;
		background: orange;
	}
	.b-box4{
		color: #fff;
		background: red;
	}
}
</style>
