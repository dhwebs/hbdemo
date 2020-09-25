<template>
	<view>
		<uni-collapse class="box">
			<uni-collapse-item title="基本信息" :open="true">
				<view class="uni-form-item">
					<view class="title">楼栋</view>
					<view class="uni-input">{{submitData.building}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">楼层</view>
					<view class="uni-input">{{submitData.floor}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">门牌号</view>
					<view class="uni-input">{{submitData.houseNumber}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">面积</view>
					<view class="uni-input">{{submitData.area}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">户型</view>
					<view class="uni-input">{{submitData.houseType}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">朝向</view>
					<view class="uni-input">{{submitData.orientation}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">装修</view>
					<view class="uni-input">{{submitData.renovation}}</view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="租赁信息">
				<view class="uni-form-item">
					<view class="title">用途</view>
					<view class="uni-input">{{submitData.purpose}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">状态</view>
					<view class="uni-input">{{submitData.state}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">租金</view>
					<view class="uni-input">{{submitData.rent}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">水单价</view>
					<view class="uni-input">{{submitData.waterPrice}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">电单价</view>
					<view class="uni-input">{{submitData.electricityPrice}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">押付</view>
					<view class="uni-input">{{submitData.pledge}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">门卡押金</view>
					<view class="uni-input">{{submitData.cardDeposit}}</view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="能源底数">
				<view class="uni-form-item">
					<view class="title">水底数</view>
					<view class="uni-input">{{submitData.waterNum}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">电底数</view>
					<view class="uni-input">{{submitData.electricityNum}}</view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="资产">
				<uni-list>
					<uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
					<uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
					<uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>
		<uni-list>
			<uni-list-item title="修改房源" @click="changeHouse"></uni-list-item>
		</uni-list>
		<uni-collapse class="banner">
			<uni-collapse-item title="添加出租" v-if="submitData.state=='未租'">
				<view class="uni-form-item">
					<view class="title">租客姓名</view>
					<input class="uni-input" v-model="addRent.rentName" placeholder-class="infoText" placeholder="输入租客姓名" />
				</view>
				<view class="uni-form-item">
					<view class="title">身份证号</view>
					<input class="uni-input" v-model="addRent.rentIdCard" placeholder-class="infoText" placeholder="输入身份证号" />
				</view>
				<view class="uni-form-item">
					<view class="title">手机号</view>
					<input class="uni-input" v-model="addRent.rentPhone" placeholder-class="infoText" placeholder="输入手机号" />
				</view>
				<view class="uni-form-item">
					<view class="title">开始时间</view>
					<picker class="uni-input" mode = date @change="checkTime($event,'beginTime')">
						<text class="uni-input">{{addRent.beginTime}}</text>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">结束时间</view>
					<picker class="uni-input" mode = date @change="checkTime($event,'endTime')">
						<text class="uni-input">{{addRent.endTime}}</text>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">押金总额</view>
					<input class="uni-input" v-model="addRent.deposit" placeholder-class="infoText" placeholder="输入押金总额" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="haveRent">提交</button>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="租客信息" v-if="submitData.state=='已租'">
				<view class="uni-form-item">
					<view class="title">租客姓名</view>
					<view class="uni-input">{{addRent.rentName}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">身份证号</view>
					<view class="uni-input">{{addRent.rentIdCard}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">手机号</view>
					<view class="uni-input">{{addRent.rentPhone}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">开始时间</view>
					<view class="uni-input">{{addRent.beginTime}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">结束时间</view>
					<view class="uni-input">{{addRent.endTime}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">押金总额</view>
					<view class="uni-input">{{addRent.deposit}}</view>
				</view>
			</uni-collapse-item>
			
			<uni-collapse-item title="能源抄表" v-if="submitData.state=='已租'">
				<view class="uni-form-item">
					<view class="title">上次水</view>
					<view class="uni-input">{{submitData.waterNum}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">本次水</view>
					<input class="uni-input" v-model="power.waterNum" placeholder-class="infoText" placeholder="输入本次水度读数" />
				</view>
				<view class="uni-form-item">
					<view class="title">上次电</view>
					<view class="uni-input">{{submitData.electricityNum}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">本次电</view>
					<input class="uni-input" v-model="power.electricityNum" placeholder-class="infoText" placeholder="输入本次电度读数" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="checkPower">提交</button>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="退房办理" v-if="submitData.state=='已租'">
				<view class="uni-form-item">
					<view class="title">退还押金</view>
					<input class="uni-input" v-model="outRent.backDeposit" placeholder-class="infoText" placeholder="输入押金总额" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="checkOutRent">提交</button>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitData:{},
				addRent:{
					state:true,
					rentName:'',
					rentIdCard:'',
					rentPhone:'',
					beginTime:'',
					endTime:'',
					deposit:'',
					waterNum:'',
					electricityNum:'',
				},
				outRent:{
					backDeposit:0
				},
				power:{
					waterNum:'',
					electricityNum:'',
					waterDiff:'',
					electricityDiff:'',
				}
			};
		},
		onLoad(option) {
			this.getHouse(option.id)
		},
		methods:{
			getHouse(id){//查询房屋信息
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'house',
						_id:id
					}
				}).then(res=>{
					console.log(res)
					this.submitData=res.result.data[0]
					if(this.submitData.state=='已租'){
						this.getRent(id)
					}
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			getRent(id){//查询租客信息
				uniCloud.callFunction({
					name:'get',
					data:{
						cloud:'rent',
						state:true,
						hsId:id
					}
				}).then(res=>{
					console.log(res)
					this.addRent=res.result.data[0]
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			changeHouse(){//修改房源资料
				let item=JSON.stringify(this.submitData)
				uni.navigateTo({
					url:'../addHouse/addHouse?item='+item
				})
			},
			checkTime(e,str){//选择日期
				console.log(e)
				this.addRent[str]=e.target.value
			},
			haveRent(){//添加出租
				uni.showLoading({
					title:'正在提交'
				})
				this.addRent.cloud='rent'
				this.addRent.hsId=this.submitData._id
				this.addRent.purpose=this.submitData.purpose
				this.addRent.waterNum=this.submitData.waterNum
				this.addRent.electricityNum=this.submitData.electricityNum
				this.addRent.building=this.submitData.building
				this.addRent.houseNumber=this.submitData.houseNumber
				let time = new Date()
				let year=time.getFullYear()
				let month=(time.getMonth() + 1).toString().padStart("2", "0")
				let day=time.getDate().toString().padStart("2", "0")
				this.addRent.creatTime = year + '-' + month + '-' + day
				uniCloud.callFunction({
					name:'add',
					data:this.addRent
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:'添加成功'
					})
					let data={
						cloud:'house',
						_id:this.submitData._id,
						state:'已租',
						endTime:this.addRent.endTime,
					}
					this.changeState(data)
				}).catch(err=>{
					uni.showToast({
						title:'添加失败',
						icon:'none'
					})
					console.log(err,'err')
				})
			},
			changeState(data){//修改房屋状态
				uniCloud.callFunction({
					name:'update',
					data:data
				}).then(res=>{
					this.getHouse(this.submitData._id)
					console.log(res)
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			checkPower(){//抄表
				let data={
					cloud:'house',
					_id:this.submitData._id,
				}
				this.power.waterDiff=this.power.waterNum-this.submitData.waterNum
				this.power.electricityDiff=this.power.electricityNum-this.submitData.electricityNum
				Object.assign(this.power,data)
				uniCloud.callFunction({
					name:'update',
					data:this.power
				}).then(res=>{
					this.getHouse(this.submitData._id)
					this.power={
						waterNum:'',
						electricityNum:'',
						waterDiff:'',
						electricityDiff:'',
					}
					console.log(res)
				}).catch(err=>{
					console.log(err,'err')
				})
			},
			checkOutRent(){//退房
				uni.showLoading({
					title:'正在提交'
				})
				let time = new Date()
				let year=time.getFullYear()
				let month=(time.getMonth() + 1).toString().padStart("2", "0")
				let day=time.getDate().toString().padStart("2", "0")
				let creatTime = year + '-' + month + '-' + day
				uniCloud.callFunction({
					name:'update',
					data:{
						cloud:'rent',
						creatTime,
						state:false,
						_id:this.addRent._id,
						backDeposit:this.outRent.backDeposit
					}
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:'退房办理成功'
					})
					let data={
						cloud:'house',
						_id:this.submitData._id,
						state:'未租',
						endTime:'',
					}
					this.changeState(data)
				}).catch(err=>{
					uni.showToast({
						title:'退房办理失败',
						icon:'none'
					})
					console.log(err,'err')
				})
			}	
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
}
.banner{
	margin: 30rpx 0;
}
</style>
