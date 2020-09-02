<template>
	<view>
		<uni-popup ref="popup" type="bottom" @change="popChange">
			<view class="popup">
				<view class="top">
					<image src="../../static/images/fj7.jpg" mode=""></image>
					<view class="t-middle">
						<text class="text">￥4532.00</text>
						<view class="infoText">
							<text style="margin-right: 20rpx;">重量：2.4kg </text>
							<text> 编号：21312312321</text>
						</view>
					</view>
					<uni-icons type="close" size="22" @click="closePop"></uni-icons>
				</view>
				<scroll-view scroll-y="true" class="banner">
					<slot>
						<view class="box">
							<text class="titleText">颜色</text>
							<view class="color">
								<uni-tag class="tag" v-for="item in list" :key='item.id' :text="item.keyName" :inverted='item.check' size="small" :type="item.check?'error':'default'" :circle="true" @click="checkColor(item,list)"></uni-tag>
							</view>
							<text class="titleText">尺寸</text>
							<view class="color">
								<uni-tag class="tag" v-for="item in list2" :key='item.id' :text="item.keyName" :inverted='item.check' size="small" :type="item.check?'error':'default'" :circle="true" @click="checkColor(item,list2)"></uni-tag>
							</view>
							<view class="num">
								<text class="titleText">数量</text>
								<uni-number-box :min="0" :max="9"></uni-number-box>
							</view>
						</view>
					</slot>
				</scroll-view>
				<view class="bottom">
					<button type="warn" @click="btnClick">确定</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		props:['show'],
		data() {
			return {
				list:[
					{keyName:'杏色',check:true,id:1},
					{keyName:'亮白',check:false,id:2},
					{keyName:'中国红',check:false,id:3},
					{keyName:'鸭屎绿',check:false,id:4},
					{keyName:'基佬紫',check:false,id:5},
					{keyName:'少女粉',check:false,id:6},
					{keyName:'尼格黑',check:false,id:7},
				],
				list2:[
					{keyName:'XS',check:true,id:1},
					{keyName:'S',check:false,id:2},
					{keyName:'M',check:false,id:3},
					{keyName:'L',check:false,id:4},
					{keyName:'XL',check:false,id:5},
					{keyName:'XXL',check:false,id:6},
					{keyName:'XXXL',check:false,id:7},
				]
			};
		},
		watch:{
			show(val){
				console.log(val,'show')
				if(val){
					this.$refs.popup.open()
				}
			}
		},
		methods:{
			popChange(e){
				this.$emit('input',e.show)
			},
			closePop(){
				this.$refs.popup.close()
			},
			btnClick(){
				this.$emit('click',1)
				this.$refs.popup.close()
			},
			checkColor(item,list){
				list.forEach(res=>{
					if(item.id==res.id){
						item.check=!item.check
					}else{
						res.check=false
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.popup{
	width: 100%;
	height: 80vh;
	background-color: #fff;
	border-radius: 40rpx 40rpx 0 0;
	display: flex;
	flex-direction: column;
	.top{
		width: 90%;
		height: 200rpx;
		margin-left:5%;
		padding-top: 20rpx;
		display: flex;
		image{
			width: 180rpx;
			height: 200rpx;
			margin-right: 20rpx;
		}
		.t-middle{
			flex:1;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			.text{
				color: red;
			}
		}
	}
	.banner{
		flex:1;
		margin-top: 20rpx;
		width: 90%;
		margin-left: 5%;
		overflow-y: auto;
		.box{
			// height: 100vh;
			.color{
				margin-bottom:30rpx ;
				.tag{
					margin: 15rpx;
				}
			}
			.num{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
	.bottom{
		height: 100rpx;
		border-top: 1rpx solid #f1f1f1;
		button{
			height: 80rpx;
			line-height: 80rpx;
			width: 90%;
			margin:10rpx 0 0 5%;
			border-radius: 50rpx;
			background-color: red;
		}
	}
}
</style>
