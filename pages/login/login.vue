<template>
	<view class="box">
		<view class="banner">
			<view class="uni-form-item">
				<view class="title">账号</view>
				<input class="uni-input" v-model="account" placeholder-class="infoText" placeholder="输入账号" />
			</view>
			<view class="uni-form-item">
				<view class="title">密码</view>
				<input class="uni-input" password v-model="password" placeholder-class="infoText" placeholder="输入密码" />
			</view>
			<button type="primary" class="button" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password:'',
				account:''
			};
		},
		methods:{
			login(){
				if(!this.account){
					uni.showToast({
						title:'请输入账号',
							icon:'none'
					})
					return
				}
				if(!this.password){
					uni.showToast({
						title:'请输入密码',
							icon:'none'
					})
					return
				}
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'user',
						password:this.password,
						account:this.account
					}
				}).then(res=>{
					console.log(res)
					if(!res.result.data || res.result.data.length==0){
						uni.showToast({
							title:'账号密码错误',
							icon:'none'
						})
						return
					}
					uni.showToast({
						title:'登录成功'
					})
					uni.setStorageSync('user',res.result.data[0])
					uni.switchTab({
						url:'../main/main'
					})
				}).catch(err=>{
					console.log(err,'err')
				})
			}
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
