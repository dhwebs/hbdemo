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
					<input class="uni-input" v-model="submitData.floor" placeholder-class="infoText" placeholder="输入楼层" />
				</view>
				<view class="uni-form-item">
					<view class="title">门牌号</view>
					<input class="uni-input" v-model="submitData.houseNumber" placeholder-class="infoText" placeholder="输入门牌号" />
				</view>
				<view class="uni-form-item">
					<view class="title">面积</view>
					<input class="uni-input" v-model="submitData.area" placeholder-class="infoText" placeholder="输入面积" />
				</view>
				<view class="uni-form-item">
					<view class="title">户型</view>
					<picker class="uni-input" @change="bindPickerChange($event,'typeIndex')" :value="typeIndex" :range="houseType">
						<view class="uni-input">{{houseType[typeIndex]}}</view>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">朝向</view>
					<picker class="uni-input" @change="bindPickerChange($event,'direIndex')" :value="direIndex" :range="direction">
						<view class="uni-input">{{direction[direIndex]}}</view>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">装修</view>
					<picker class="uni-input" @change="bindPickerChange($event,'renIndex')" :value="renIndex" :range="renovation">
						<text class="uni-input">{{renovation[renIndex]}}</text>
					</picker>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="租赁信息">
				<view class="uni-form-item">
					<view class="title">用途</view>
					<picker class="uni-input" @change="bindPickerChange($event,'index')" :value="index" :range="array">
						<text class="uni-input">{{array[index]}}</text>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">状态</view>
					<picker class="uni-input" @change="bindPickerChange($event,'stateIndex')" :value="stateIndex" :range="state">
						<text class="uni-input">{{state[stateIndex]}}</text>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">租金</view>
					<input class="uni-input" v-model="submitData.rent" placeholder-class="infoText" placeholder="输入租金" />
				</view>
				<view class="uni-form-item">
					<view class="title">水单价</view>
					<input class="uni-input" v-model="submitData.waterPrice" placeholder-class="infoText" placeholder="输入水单价(元/吨)" />
				</view>
				<view class="uni-form-item">
					<view class="title">电单价</view>
					<input class="uni-input" v-model="submitData.electricityPrice" placeholder-class="infoText" placeholder="输入电单价(元/度)" />
				</view>
				<view class="uni-form-item">
					<view class="title">押付</view>
					<picker class="uni-input" @change="bindPickerChange($event,'depIndex')" :value="depIndex" :range="deposit">
						<text class="uni-input">{{deposit[depIndex]}}</text>
					</picker>
				</view>
				<view class="uni-form-item">
					<view class="title">门卡押金</view>
					<input class="uni-input" v-model="submitData.cardDeposit" placeholder-class="infoText" placeholder="输入押金" />
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="能源底数">
				<view class="uni-form-item">
					<view class="title">水底数</view>
					<input class="uni-input" v-model="submitData.waterNum" placeholder-class="infoText" placeholder="输入水底数" />
				</view>
				<view class="uni-form-item">
					<view class="title">电底数</view>
					<input class="uni-input" v-model="submitData.electricityNum" placeholder-class="infoText" placeholder="输入电底数" />
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
				
				submitData:{
					building:'',
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
					assets:'空调,热水器,床'
				}
			}
		},
		methods: {
			change(){
				
			},
			bindPickerChange(e,type) {
				console.log(e)
				this[type] = e.target.value
			},
			submitHouse(){
				this.submitData.cloud='house'
				this.submitData.houseType =this.houseType[this.typeIndex]
				this.submitData.orientation =this.direction[this.direIndex]
				this.submitData.state =this.state[this.stateIndex]
				this.submitData.renovation =this.renovation[this.renIndex]
				this.submitData.purpose =this.array[this.index]
				this.submitData.pledge =this.deposit[this.depIndex]
				uniCloud.callFunction({
					name:'add',
					data:this.submitData
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
.uni-form-item{
	background: #fff;
	display: flex;
	height: 80rpx;
	border-bottom: 1rpx solid #f4f4f4;
	font-size: 30rpx;
	.title{
		width: 120rpx;
		margin:0 10rpx;
		line-height: 80rpx;
	}
	.uni-input{
		flex: 1;
		height: 60rpx;
		margin-top: 10rpx;
	}
}
.button{
	width: 90%;
	margin-top: 40rpx;
}
</style>
