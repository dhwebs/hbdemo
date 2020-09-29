<template>
	<view class="box">
		<uni-list>
			<uni-list-item title="租房记录" @click="goto('../rentRecord/rentRecord')"></uni-list-item>
			<uni-list-item title="退房记录" @click="goto('../rentRecord/rentRecord?state=false')"></uni-list-item>
			<uni-list-item title="维修记录" @click="goto('../repairRecord/repairRecord')"></uni-list-item>
			<uni-list-item title="收支记录" @click="goto('../moneyRecord/moneyRecord')"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goto(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	width: 100vw;
	.box{
		width: 100%;
	}
}
</style>
