<template>
	<view class="bigbox">
		<uni-tabs :title='title' :active="active" position='top' @change="activeChagne">
			<scroll-view class="red" v-for="(item,i) in title" :scroll-y='true' :slot="`a${i}`">
				<uni-purchase type='row' :list="list"></uni-purchase>
			</scroll-view>
		</uni-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:[],
				active:0,
				list:[]
			};
		},
		created() {
			this.getTitle()
			this.getShop()
		},
		methods:{
			activeChagne(t){
				console.log(t)
				this.active=t
				this.getShop()
			},
			getTitle(){
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'orderType'
					}
				}).then(res=>{
					this.title=res.result.data
					this.title.unshift({type:'全部'})
					console.log(res,this.title)
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getShop(){
				let orderType=''
				if(this.active){
					orderType=this.title[this.active].type
				}
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'order',
						orderType
					}
				}).then(res=>{
					this.list=res.result.data
					console.log(res,this.list)
				}).catch(err=>{
					console.log(err,'err')
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100%;
	width: 100%;
}
.bigbox{
	width: 100%;
	height:100%;
}
.red{
	height:100%;
	width: calc(100% - 40rpx);
	margin-left: 20rpx;
}
</style>
