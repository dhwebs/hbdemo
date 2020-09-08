<template>
	<view class="bigbox">
		<uni-tabs :title='title' :active="active" position='left' @change="activeChagne">
			<scroll-view class="red" v-for="(item,i) in title" :scroll-y='true' :slot="`a${i}`">
				<uni-purchase type='column'></uni-purchase>
				<!-- <uni-purchase type='column'></uni-purchase> -->
				<!-- <uni-purchase type='column'></uni-purchase> -->
			</scroll-view>
		</uni-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:['全部','景区','演出','其他'],
				active:0
			};
		},
		methods:{
			activeChagne(t){
				console.log(t)
				this.active=t
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
