<template>
	<view class="box">
		<uni-collapse class="box">
			<uni-collapse-item v-for="(item,i) in list" :title="item.purpose +' '+ item.building +' '+ item.houseNumber" >
				<view class="uni-form-item">
					<view class="title">租客姓名</view>
					<view class="uni-input">{{item.rentName}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">身份证号</view>
					<view class="uni-input">{{item.rentIdCard}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">手机号</view>
					<view class="uni-input">{{item.rentPhone}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">开始时间</view>
					<view class="uni-input">{{item.beginTime}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">结束时间</view>
					<view class="uni-input">{{item.endTime}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">押金总额</view>
					<view class="uni-input">{{item.deposit}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">状态</view>
					<view class="uni-input">{{item.state?'在住':'退房'}}</view>
				</view>
				<view class="uni-form-item" v-if="!item.state">
					<view class="title">退还押金</view>
					<view class="uni-input">{{item.backDeposit}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">{{item.state?'创建时间':'退房时间'}}</view>
					<view class="uni-input">{{item.creatTime}}</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				cursor:1,
				state:''
			};
		},
		onLoad(option) {
			this.state=option.state?false:''
			this.getList()
		},
		onPullDownRefresh() {//下拉刷新
			this.cursor=1
			this.list=[]
			this.getList()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			},1500)
		},
		onReachBottom() {//触底加载更多
			this.getList()
		},
		methods:{
			getList(){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'rent',
						cursor:this.cursor,
						state:this.state,
						order:'desc'
					}
				}).then(res=>{
					console.log(res)
					this.list=[...this.list,...res.result.data]
					this.cursor++
				}).catch(err=>{
					console.log(err,'err')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
}

</style>
