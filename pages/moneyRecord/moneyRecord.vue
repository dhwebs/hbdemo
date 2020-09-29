<template>
	<view class="box">
		<uni-collapse>
			<uni-collapse-item v-for="(item,i) in list" :title="item.purpose +' '+ item.building +' '+ item.houseNumber" >
				<view class="uni-form-item">
					<view class="title">金额</view>
					<view class="uni-input">{{item.money}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">收支</view>
					<view class="uni-input">{{item.income}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">类型</view>
					<view class="uni-input">{{item.type}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">记账日期</view>
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
						cloud:'money',
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
