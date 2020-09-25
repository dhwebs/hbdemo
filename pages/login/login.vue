<template>
	<view class="box">
		<view class="banner">
			<view class="uni-form-item">
				<view class="title">账号</view>
				<input class="uni-input" v-model="submitData.account" placeholder-class="infoText" placeholder="输入账号" />
			</view>
			<view class="uni-form-item">
				<view class="title">密码</view>
				<input class="uni-input" password v-model="submitData.password" placeholder-class="infoText" placeholder="输入密码" />
			</view>
			<button type="primary" class="button" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitData:{
					password:'',
					account:''
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
	height: calc(100vh - 90rpx);
	overflow: hidden;
	background: url(../../static/images/login.jpg);
	background-size: 100% 100%;
	display: flex;
	flex-direction: column;
}
.button{
	width: 90%;
	margin-top: 40rpx;
}
.banner{
	margin-top: 300rpx;
	.uni-form-item{
		padding: 15rpx 0;
		margin-top: 10rpx;
		background: rgba(255,255,255,0.1);
		border: none;
	}
	button{
		background: rgba(255,255,255,0.1);
		border: none;
	}
}
</style>
