<template>
	<view class="box">
		<!-- <uni-ball></uni-ball> -->
		<swiper class="top-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/2.jpg" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/1.jpg" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="top-info">
			<text class="titleAllText ">【暑期限时特惠】三亚大小洞天单门票+彩虹滑道体验票</text>
			<view class="money">
				<text class="realmoney">￥100</text>
				<text class="infoText oldMoney">￥120</text>	
			</view>
			<view class="t-i-bottom infoText">
				<view class="left" @click="likeClick"><text>点赞</text><image :src="like?'../../static/images/likes.png':'../../static/images/like.png'"></image></view>
				<view class="right" @click="starClick"><image :src="star?'../../static/images/shoucanged.png':'../../static/images/shoucang.png'"></image><text>收藏</text></view>
			</view>
		</view>
		<view class="buy">
			<text>100</text>
			<button type="primary" size="mini" @click="buy" >购买</button>
		</view>
		<uni-chose v-model='show' :show='show'>
		
		</uni-chose>
		<view class="bottom">
			<uni-tabs :title='title' :active="active" @change='activeChagne' :isSticky='false'>
				<view class="slot1" slot="a0" v-html="info">
					213123123213213
				</view>
			</uni-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				active:0,
				info:'',
				star:true,
				like:true,
				title:['详情','评论(0)'],
				show:false,
			};
		},
		methods:{
			buy(){
				this.show=true
			},
			activeChagne(t){
				console.log(t)
				this.active=t
			},
			likeClick(){//点赞
				this.like=!this.like
			},
			starClick(){//收藏
				this.star=!this.star
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100%;
	width: 100%;
	overflow-y: auto;
	background:$uni-bg-color-grey ;
	.box{
		height: 100%;
		width: 100%;
	}
}
.top-swiper{
	height: 550rpx;
	width: 100%;
	.swiper-item{
		width: 100%;
		height: 100%;
		image{
			height: 100%;
			width: 100%;
		}
	}
}
.top-info{
	// height: 200rpx;
	width:100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	.money{
		width: 95%;
		margin: 10rpx 0;
		.realmoney{
			color:red;
		}
	}
	.t-i-bottom{
		// z-index: 100;
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: $uni-font-size-lg;
		.left{
			margin-left:10rpx;
			height: 50rpx;
			image{
				margin-left:10rpx ;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.right{
			margin-right:10rpx;
			height: 50rpx;
			image{
				margin-right:10rpx ;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
}
.buy{
	margin: 30rpx 0;
	width: 100%;
	height: 120rpx;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button{
		width: 150rpx;
		border-radius: 40rpx;
		margin-right: 40rpx;
	}
	text{
		color: red;
		flex:1;
		margin-left:40rpx;
		&::before{
			content: '￥';
			font-size: $uni-font-size-sm;
			color: red;
		}
		
	}
}
.bottom{
	width: 100%;
	height: 100%;
	.slot1{
		width: 100%;
		height: 100%;
		background-color: red;
	}
}

</style>
