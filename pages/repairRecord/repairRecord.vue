<template>
	<view class="box">
		<uni-collapse>
			<uni-collapse-item v-for="(item,i) in list" :title="item.purpose +' '+ item.building +' '+ item.houseNumber" >
				<view class="uni-form-item">
					<view class="title">维修金额</view>
					<view class="uni-input">{{item.repairMoney}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">维修备注</view>
					<view class="uni-input">{{item.repairRemark}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">添加时间</view>
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
			};
		},
		onLoad() {
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
				let user=uni.getStorageSync('user')
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'repair',
						cursor:this.cursor,
						order:'desc',
						createdId:user._id
					}
				}).then(res=>{
					console.log(res)
					this.list=[...this.list,...res.result.data]
					this.cursor++
				}).catch(err=>{
					console.log(err,'err')
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
}
</style>
