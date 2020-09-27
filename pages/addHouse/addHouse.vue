<template>
	<view class="box">
		<uni-collapse class="box" @change="change">
			<uni-collapse-item title="基本信息" :open="true">
				<view class="uni-form-item">
					<view class="title">楼栋</view>
					<input class="uni-input" v-model="submitData.building" placeholder-class="infoText" placeholder="输入楼栋" />
				</view>
				<view class="uni-form-item">
					<view class="title">楼层</view>
					<input class="uni-input" type="number" v-model="submitData.floor" placeholder-class="infoText" placeholder="输入楼层" />
				</view>
				<view class="uni-form-item">
					<view class="title">门牌号</view>
					<input class="uni-input" v-model="submitData.houseNumber" placeholder-class="infoText" placeholder="输入门牌号" />
				</view>
				<view class="uni-form-item">
					<view class="title">面积</view>
					<input class="uni-input" type="digit" v-model="submitData.area" placeholder-class="infoText" placeholder="输入面积" />
				</view>
				<picker class="uni-input" @change="bindPickerChange($event,'typeIndex','houseType','houseType')" :value="typeIndex" :range="houseType">
					<view class="uni-form-item">
						<view class="title">户型</view>
						<view class="uni-input">{{submitData.houseType}}</view>
					</view>
				</picker>
				<picker class="uni-input" @change="bindPickerChange($event,'direIndex','orientation','direction')" :value="direIndex" :range="direction">
					<view class="uni-form-item">
						<view class="title">朝向</view>
						<view class="uni-input">{{submitData.orientation}}</view>
					</view>
				</picker>
				<picker @change="bindPickerChange($event,'renIndex','renovation','renovation')" :value="renIndex" :range="renovation">
					<view class="uni-form-item">
						<view class="title">装修</view>
						<text class="uni-input">{{submitData.renovation}}</text>
					</view>
				</picker>
			</uni-collapse-item>
			<uni-collapse-item title="租赁信息">
				<picker class="uni-input" @change="bindPickerChange($event,'index','purpose','array')" :value="index" :range="array">
					<view class="uni-form-item">
						<view class="title">用途</view>
						<text class="uni-input">{{submitData.purpose}}</text>
					</view>
				</picker>
				<picker @change="bindPickerChange($event,'stateIndex','state','state')" :value="stateIndex" :range="state">
					<view class="uni-form-item">
						<view class="title">状态</view>
						<text class="uni-input">{{submitData.state}}</text>
					</view>
				</picker>
				<view class="uni-form-item">
					<view class="title">租金</view>
					<input class="uni-input" type="digit" v-model="submitData.rent" placeholder-class="infoText" placeholder="输入租金" />
				</view>
				<view class="uni-form-item">
					<view class="title">水单价</view>
					<input class="uni-input" type="digit" v-model="submitData.waterPrice" placeholder-class="infoText" placeholder="输入水单价(元/吨)" />
				</view>
				<view class="uni-form-item">
					<view class="title">电单价</view>
					<input class="uni-input" type="digit" v-model="submitData.electricityPrice" placeholder-class="infoText" placeholder="输入电单价(元/度)" />
				</view>
				<picker @change="bindPickerChange($event,'depIndex','pledge','deposit')" :value="depIndex" :range="deposit">
					<view class="uni-form-item">
						<view class="title">押付</view>
						<text class="uni-input">{{submitData.pledge}}</text>
					</view>
				</picker>
				<view class="uni-form-item">
					<view class="title">门卡押金</view>
					<input class="uni-input" type="digit" v-model="submitData.cardDeposit" placeholder-class="infoText" placeholder="输入押金" />
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="能源底数">
				<view class="uni-form-item">
					<view class="title">水底数</view>
					<input class="uni-input" type="digit" v-model="submitData.waterNum" placeholder-class="infoText" placeholder="输入水底数" />
				</view>
				<view class="uni-form-item">
					<view class="title">电底数</view>
					<input class="uni-input" type="digit" v-model="submitData.electricityNum" placeholder-class="infoText" placeholder="输入电底数" />
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="资产">
				<dh-assets :list="assets" @change="assetsChange"></dh-assets>
			</uni-collapse-item>
		</uni-collapse>
		<button type="primary" class="button" @click="submitHouse">保存</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				array:['长租','短租'],
				index:'',
				houseType:['单间','1室1厅1卫','2室1厅1卫','3室1厅1卫'],
				typeIndex:'',
				direction:['东','西','南','北','东北','东南','西南','西北'],
				direIndex:'',
				renovation:['毛坯房','简单装修','精装修'],
				renIndex:'',
				deposit:['押一付一','押二付一','押三付一'],
				depIndex:'',
				state:['未租','已租'],
				stateIndex:'',
				update:false,
				assets:[],
				submitData:{
					building:'村头公寓',
					floor:'',
					houseNumber:'',
					area:'',
					houseType:'',
					orientation:'',
					renovation:'',
					purpose:'',
					state:'',
					rent:'',
					waterPrice:'',
					electricityPrice:'',
					pledge:'',
					cardDeposit:'',
					waterNum:'',
					electricityNum:'',
					assets:''
				}
			}
		},
		onLoad(option) {
			if(option.item){
				let item=JSON.parse(option.item)
				console.log(item)
				Object.assign(this.submitData,item)
				this.assets=item.assets
				this.update=true
			}
		},
		methods: {
			change(){
				
			},
			bindPickerChange(e,type,sbm,arr) {
				console.log(e)
				this[type] = e.target.value
				this.submitData[sbm]=this[arr][e.target.value]
			},
			submitHouse(){//添加房源
				if(this.update){
					this.updateHouse()
					return
				}
				uni.showLoading({
					title:'正在提交'
				})
				let user=uni.getStorageSync('user')
				this.submitData.landlordId=user._id
				this.submitData.cloud='house'
				uniCloud.callFunction({
					name:'add',
					data:this.submitData
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:'添加成功'
					})
				}).catch(err=>{
					uni.showToast({
						title:'添加失败',
						icon:'none'
					})
					console.log(err,'err')
				})
			},
			updateHouse(){//修改房源
				uni.showLoading({
					title:'正在提交'
				})
				this.submitData.cloud='house'
				uniCloud.callFunction({
					name:'update',
					data:this.submitData
				}).then(res=>{
					console.log(res)
					uni.showToast({
						title:'修改成功'
					})
				}).catch(err=>{
					uni.showToast({
						title:'修改失败',
						icon:'none'
					})
					console.log(err,'err')
				})
			},
			assetsChange(item){
				this.assets=item
				this.submitData.assets = item.join(',')
				console.log(this.submitData.assets)
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width: 100vw;
}
.button{
	width: 90%;
	margin-top: 40rpx;
}

</style>
