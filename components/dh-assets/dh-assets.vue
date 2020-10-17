<template>
	<view>
		<view class="assetsBox">
			<view class="iconBox" @click="iconClick('冰箱')">
				<image :src="list.indexOf('冰箱')>-1 ? '../../static/images/assetsIcon/bx1.png' : '../../static/images/assetsIcon/bx.png'" mode=""></image>
				<text :style="{'color': list.indexOf('冰箱')>-1 ? '#1296db':'#bfbfbf'}">冰箱</text>
			</view>
			<view class="iconBox" @click="iconClick('电视')">
				<image :src="list.indexOf('电视')>-1 ? '../../static/images/assetsIcon/tv1.png' : '../../static/images/assetsIcon/tv.png'" mode=""></image>
				<text :style="{'color': list.indexOf('电视')>-1 ? '#1296db':'#bfbfbf'}">电视</text>
			</view>
			<view class="iconBox" @click="iconClick('空调')">
				<image :src="list.indexOf('空调')>-1 ? '../../static/images/assetsIcon/kt1.png' : '../../static/images/assetsIcon/kt.png'" mode=""></image>
				<text :style="{'color': list.indexOf('空调')>-1 ? '#1296db':'#bfbfbf'}">空调</text>
			</view>
			<view class="iconBox" @click="iconClick('床')">
				<image :src="list.indexOf('床')>-1 ? '../../static/images/assetsIcon/bed1.png' : '../../static/images/assetsIcon/bed.png'" mode=""></image>
				<text :style="{'color': list.indexOf('床')>-1 ? '#1296db':'#bfbfbf'}">床</text>
			</view>
			<view class="iconBox" @click="iconClick('凳子')">
				<image :src="list.indexOf('凳子')>-1 ? '../../static/images/assetsIcon/dz1.png' : '../../static/images/assetsIcon/dz.png'" mode=""></image>
				<text :style="{'color': list.indexOf('凳子')>-1 ? '#1296db':'#bfbfbf'}">凳子</text>
			</view>
			<view class="iconBox" @click="iconClick('衣柜')">
				<image :src="list.indexOf('衣柜')>-1 ? '../../static/images/assetsIcon/yg1.png' : '../../static/images/assetsIcon/yg.png'" mode=""></image>
				<text :style="{'color': list.indexOf('衣柜')>-1 ? '#1296db':'#bfbfbf'}">衣柜</text>
			</view>
			<view class="iconBox" @click="iconClick('桌子')">
				<image :src="list.indexOf('桌子')>-1 ? '../../static/images/assetsIcon/zz1.png' : '../../static/images/assetsIcon/zz.png'" mode=""></image>
				<text :style="{'color': list.indexOf('桌子')>-1 ? '#1296db':'#bfbfbf'}">桌子</text>
			</view>
			<view class="iconBox" @click="iconClick('热水器')">
				<image :src="list.indexOf('热水器')>-1 ? '../../static/images/assetsIcon/rsq1.png' : '../../static/images/assetsIcon/rsq.png'" mode=""></image>
				<text :style="{'color': list.indexOf('热水器')>-1 ? '#1296db':'#bfbfbf'}">热水器</text>
			</view>
			<view class="iconBox" @click="iconClick('WiFi')">
				<image :src="list.indexOf('WiFi')>-1 ? '../../static/images/assetsIcon/wifi1.png' : '../../static/images/assetsIcon/wifi.png'" mode=""></image>
				<text :style="{'color': list.indexOf('WiFi')>-1 ? '#1296db':'#bfbfbf'}">WiFi</text>
			</view>
			<view class="iconBox" @click="iconClick('沙发')">
				<image :src="list.indexOf('沙发')>-1 ? '../../static/images/assetsIcon/sf1.png' : '../../static/images/assetsIcon/sf.png'" mode=""></image>
				<text :style="{'color': list.indexOf('沙发')>-1 ? '#1296db':'#bfbfbf'}">沙发</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'dhAssets',
		props: {
			list: {
				type: Array,
				default: ()=>[]
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		},
		created() {
		},
		methods:{
			iconClick(type){
				if(this.disabled) return
				console.log(this.list.indexOf(type),type,21321321)
				if(this.list.indexOf(type)==-1){
					this.list.push(type)
				}else{
					this.list.splice(this.list.indexOf(type),1)
				}
				this.$emit('change',this.list)
			}
		}
	}
</script>

<style lang="scss" scoped>
.assetsBox{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.iconBox{
		margin: 10rpx 0;
		width: 17%;
		height: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		image{
			width: 80%;
			height: 100rpx;
		}
		text{
			font-size: 28rpx;
			color:#bfbfbf
		}
	}
}
</style>
