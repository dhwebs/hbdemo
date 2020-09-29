<template>
	<view class="box">
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
				<dh-assets :list="submitData.assets" disabled></dh-assets>
			</uni-collapse-item>
		</uni-collapse>
		<view class="banner box">
			<uni-list>
				<uni-list-item title="修改房源" @click="changeHouse"></uni-list-item>
			</uni-list>
		</view>
		<uni-collapse class="box">
			<uni-collapse-item title="添加出租" v-if="submitData.state=='未租'">
				<view class="uni-form-item">
					<view class="title">租客姓名</view>
					<input class="uni-input" v-model="addRent.rentName" placeholder-class="infoText" placeholder="输入租客姓名" />
				</view>
				<view class="uni-form-item">
					<view class="title">身份证号</view>
					<input class="uni-input" type="idcard" v-model="addRent.rentIdCard" placeholder-class="infoText" placeholder="输入身份证号" />
				</view>
				<view class="uni-form-item">
					<view class="title">手机号</view>
					<input class="uni-input" type="number" v-model="addRent.rentPhone" placeholder-class="infoText" placeholder="输入手机号" />
				</view>
				<picker mode = date @change="checkTime($event,'beginTime')">
					<view class="uni-form-item">
						<view class="title">开始时间</view>
						<text class="uni-input">{{addRent.beginTime}}</text>
					</view>
				</picker>
				<picker mode = date @change="checkTime($event,'endTime')">
					<view class="uni-form-item">
						<view class="title">结束时间</view>
						<text class="uni-input">{{addRent.endTime}}</text>
					</view>
				</picker>
				<view class="uni-form-item">
					<view class="title">押金总额</view>
					<input class="uni-input" type="digit" v-model="addRent.deposit" placeholder-class="infoText" placeholder="输入押金总额" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="haveRent">提交</button>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="维修安装">
				<view class="uni-form-item">
					<view class="title">维修费用</view>
					<input class="uni-input" type="digit" v-model="repairMoney" placeholder-class="infoText" placeholder="输入维修费用" />
				</view>
				<view class="uni-form-item">
					<view class="title">维修备注</view>
					<input class="uni-input" v-model="repairRemark" placeholder-class="infoText" placeholder="输入维修备注" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="addRepair">提交</button>
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
					<input class="uni-input" type="digit" v-model="power.waterNum" placeholder-class="infoText" placeholder="输入本次水度读数" />
				</view>
				<view class="uni-form-item">
					<view class="title">上次电</view>
					<view class="uni-input">{{submitData.electricityNum}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">本次电</view>
					<input class="uni-input" type="digit" v-model="power.electricityNum" placeholder-class="infoText" placeholder="输入本次电度读数" />
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="checkPower">提交</button>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="本月账单" v-if="submitData.state=='已租'">
				<view class="uni-form-item">
					<view class="title">房租</view>
					<view class="uni-input">{{billObj.rent}}</view>
				</view>
				<view class="uni-form-item" v-if="billObj.deposit">
					<view class="title">押金</view>
					<view class="uni-input">{{billObj.deposit}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">水费</view>
					<view class="uni-input">{{billObj.waterFree}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">电费</view>
					<view class="uni-input">{{billObj.electricityFree}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title">应收</view>
					<view class="uni-input">{{billObj.money}}</view>
				</view>
				<view class="uni-form-item">
					<view class="title"></view>
					<button type="primary" @click="outOfAcc('confirm')" v-if="!billObj.confirm">出账</button>
					<button type="primary" @click="outOfAcc('state')" v-else-if="!billObj.state">收租</button>
					<button type="primary" v-else>已收</button>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="所有账单" v-if="submitData.state=='已租'">
				<uni-collapse>
					<uni-collapse-item :title="item.month+'月'" v-for="(item,i) in submitData.billList" :key="i">
						<view class="uni-form-item">
							<view class="title">房租</view>
							<view class="uni-input">{{item.rent}}</view>
						</view>
						<view class="uni-form-item" v-if="item.deposit">
							<view class="title">押金</view>
							<view class="uni-input">{{item.deposit}}</view>
						</view>
						<view class="uni-form-item">
							<view class="title">水费</view>
							<view class="uni-input">{{item.waterFree}}</view>
						</view>
						<view class="uni-form-item">
							<view class="title">电费</view>
							<view class="uni-input">{{item.electricityFree}}</view>
						</view>
						<view class="uni-form-item">
							<view class="title">应收</view>
							<view class="uni-input">{{item.money}}</view>
						</view>
						<view class="uni-form-item">
							<view class="title"></view>
							<button type="primary" v-if="!item.confirm">待出账</button>
							<button type="primary" v-else-if="!item.state">待收租</button>
							<button type="primary" v-else>已收</button>
						</view>
					</uni-collapse-item>
				</uni-collapse>
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
	import utils from '../../static/utils/index.js'
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
				},
				billObj:{
					month : '',
					state :'',
					rent:'',
					money:'',
					deposit:0,
					waterFree:'', 
					electricityFree:'',
					confirm:false
				},
				repairMoney:'',
				repairRemark:''
			};
		},
		onLoad(option) {
			this.getHouse(option.id)
			console.log(utils)
		},
		methods:{
			//计算日期之间的月数
			datemonth(date1,date2){
				let data = new Date(date1);
				// 拆分年月日
				date1 = date1.split('-');
				// 得到月数
				date1 = parseInt(date1[0]) * 12 + parseInt(date1[1]);
				// 拆分年月日
				date2 = date2.split('-');
				// 得到月数
				date2 = parseInt(date2[0]) * 12 + parseInt(date2[1]);
				let m = Math.abs(date1 - date2);
				let dataArr = [];
				//data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
				let month1 = data.getMonth() + 1;
				dataArr.push({
						month : month1,
						state :true,
						rent:this.submitData.rent,
						deposit:this.addRent.deposit,
						waterFree:0, 
						electricityFree:0,
						confirm:true,
						money:utils.accAdd(this.submitData.rent,this.addRent.deposit)
				})
				for (let i = 1; i < m; i++) {
					data.setMonth(data.getMonth() + 1); //每次循环一次 月份值加1
					let month = data.getMonth() + 1;
					let obj={
						month : month,
						confirm:false,
						state :false
					}
					dataArr.push(obj);
				}
				return dataArr;
			},
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
					this.submitData.assets=this.submitData.assets.split(',')
					if(this.submitData.state=='已租'){
						this.getRent(id)
						this.billObj={
							month : '',
							state :'',
							rent:this.submitData.rent,
							deposit:0,
							waterFree:utils.accMul(this.submitData.waterDiff,this.submitData.waterPrice), 
							electricityFree:utils.accMul(this.submitData.electricityDiff,this.submitData.electricityPrice)
						}
						this.billObj.money=utils.accAdd(this.submitData.rent,utils.accAdd(this.billObj.waterFree,this.billObj.electricityFree))
						let data = new Date();
						let month = data.getMonth() + 1;
						this.submitData.billList.forEach(list=>{
							if(list.month == month) Object.assign(this.billObj,list)
						})
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
				let user=uni.getStorageSync('user')
				this.addRent.cloud='rent'
				this.addRent.createdId=user._id
				this.addRent.hsId=this.submitData._id
				this.addRent.purpose=this.submitData.purpose
				this.addRent.waterNum=this.submitData.waterNum
				this.addRent.electricityNum=this.submitData.electricityNum
				this.addRent.building=this.submitData.building
				this.addRent.houseNumber=this.submitData.houseNumber
				this.addRent.billList=this.datemonth(this.addRent.beginTime.toString(),this.addRent.endTime.toString())
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
					this.addMoney(utils.accAdd(this.addRent.deposit,this.submitData.rent),'收入','租金+押金')
					let data={
						cloud:'house',
						_id:this.submitData._id,
						state:'已租',
						endTime:this.addRent.endTime,
						billList:this.addRent.billList
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
				this.power.waterDiff=utils.accSub(this.power.waterNum,this.submitData.waterNum)
				this.power.electricityDiff=utils.accSub(this.power.electricityNum,this.submitData.electricityNum) 
				this.power.lastWaterNum = this.submitData.waterNum
				this.power.lastElectricityNum = this.submitData.electricityNum
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
			outOfAcc(type){//出账
				let data = new Date();
				let month = data.getMonth() + 1;
				this.billObj[type]=true
				this.submitData.billList.forEach(list=>{
					if(list.month == month) Object.assign(list,this.billObj)
				})
				if(type=='state'){
					this.addMoney(this.billObj.money,'收入','租金')
				}
				let obj={
					cloud:'house',
					_id:this.submitData._id,
					billList:this.submitData.billList
				}
				this.changeState(obj)
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
					this.addMoney(this.outRent.backDeposit,'支出','退还押金')
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
			},
			addRepair(){//添加维修
				uni.showLoading({
					title:'正在提交'
				})
				let time = new Date()
				let year=time.getFullYear()
				let month=(time.getMonth() + 1).toString().padStart("2", "0")
				let day=time.getDate().toString().padStart("2", "0")
				let creatTime = year + '-' + month + '-' + day
				let user=uni.getStorageSync('user')
				uniCloud.callFunction({
					name:'add',
					data:{
						cloud:'repair',
						creatTime,
						repairMoney:this.repairMoney,
						repairRemark:this.repairRemark,
						houseNumber:this.submitData.houseNumber,
						building:this.submitData.building,
						purpose:this.submitData.purpose,
						hsId:this.submitData._id,
						createdId:user._id
					}
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:'添加成功'
					})
					this.addMoney(this.repairMoney,'支出','维修安装')
					this.repairMoney=''
					this.repairRemark=''
				}).catch(err=>{
					uni.showToast({
						title:'添加失败',
						icon:'none'
					})
					console.log(err,'err')
				})
			},
			addMoney(money,income,type){//添加收支
				let time = new Date()
				let year=time.getFullYear()
				let month=(time.getMonth() + 1).toString().padStart("2", "0")
				let day=time.getDate().toString().padStart("2", "0")
				let creatTime = year + '-' + month + '-' + day
				let user=uni.getStorageSync('user')
				uniCloud.callFunction({
					name:'add',
					data:{
						cloud:'money',
						creatTime,
						money:money,
						type:type,
						income:income,
						houseNumber:this.submitData.houseNumber,
						building:this.submitData.building,
						purpose:this.submitData.purpose,
						hsId:this.submitData._id,
						createdId:user._id
					}
				}).then(res=>{
					console.log(res)
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
}
.banner{
	margin: 30rpx 0;
}
</style>
