<template>
	<view class="box">
		<movable-area>
			<movable-view :x="x" :y="y" direction="all" @change="onChange" disabled>
				<view class="view" @click="show=!show">
					<uni-icons type='plusempty' size="35" color="#007aff"></uni-icons>
				</view>
				<view class="hid" v-show="show">
					<text>顶部</text>
					<text>推荐</text>
					<text>转发</text>
					<text>分享</text>
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
				y:400,
				show:false
			};
		},
		methods:{
			onChange(e){
				this.x = e.detail.x
				this.y = e.detail.y
				console.log(this.x,this.y)
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	position: fixed;
}
movable-area{
	width: 100vw;
	height: 90vh;
	z-index: 5;
	// background-color: green;
	.hid{
		// position: absolute;
		color:#007aff;
		height: 320rpx;
		width: 80rpx;
		// background: #f1f1f1;
		display: flex;
		font-size: $uni-font-size-lg;
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		text{
			flex:1;
			border-radius: 50%;
			line-height: 80rpx;
			background-color: #f1f1f1;
		}
	}
	.view{
		opacity: 0.4;
		width: 80rpx;
		height:80rpx;
		border-radius: 50%;
		background-color: #f1f1f1;
		text-align: center;
		// z-index: 9;
	}
}
</style>
