<template>
	<view>
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange">
				<view class="">
					sadsaddssad
				</view>
				<view class="view">
					<uni-icons type='plusempty' size="35" color="#007aff"></uni-icons>
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x:0,
				y:0,
			};
		},
		methods:{
			onChange(e){
				this.x = e.detail.x
				this.y = e.detail.y
			}
		}
	}
</script>

<style lang="scss" scoped>
movable-area{
	width: 100vw;
	height: 90vh;
	// background-color: green;
	.view{
		width: 80rpx;
		height:80rpx;
		border-radius: 50%;
		background-color: #f1f1f1;
		text-align: center;
	}
}
</style>
