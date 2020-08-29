<template>
	<view class="bigbox">
		<uni-tabs :title='title' :active="active" @change="activeChagne">
			<scroll-view class="red" v-for="(item,i) in title" :scroll-y='true' :key='i' :slot="`a${i}`">
				<uni-purchase v-for="k in 3" :key='k'>
					<button type="success" slot="button" @click="signUp">报名</button>
				</uni-purchase>
			</scroll-view>
		</uni-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:['全部','赛事','活动','其他'],
				active:0
			};
		},
		methods:{
			activeChagne(t){
				console.log(t)
				this.active=t
			},
			signUp(i){
				uni.navigateTo({
					url:'../info/info'
				})
			}
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
button{
	width: 120rpx;
	margin-left: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	border-radius: 25rpx;
	color: #fff;
	font-size:$uni-font-size-sm ;
	background: $uni-color-primary;
}
</style>
