<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang='scss'>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
page{
	background-color: #f4f4f4;
	display: flex;
	justify-content: center;
	height: 100%;
	.bigBox{
		width: 680rpx;
	}
}
.infoText{ //描述性文字
	color:$uni-text-color-grey ;
	font-size:$uni-font-size-sm ;
}
.titleText{//标题文字
	overflow:hidden;
	white-space:nowrap;
	text-overflow: ellipsis;
	font-size:$uni-font-size-lg;
	color: $uni-text-color;
	font-weight: $uni-font-weight;
}
.titleAllText{//标题文字详细
	font-size:$uni-font-size-lg;
	color: $uni-text-color;
	font-weight: $uni-font-weight;
}
.oldMoney{//原价
	margin: 10rpx;
	font-size:$uni-font-size-sm ;
	color:$uni-text-color-grey ;
	text-decoration:line-through;
}
</style>
