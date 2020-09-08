<template>
	<view :class="position=='top' ? 'tabBox' : 'tabBox2'">
		<scroll-view :scroll-x="position=='top'" :scroll-y="position!='top'" :class="{'sticky':isSticky,'scroll2':position!='top','scroll':true}" :show-scrollbar="true" :scroll-into-view="intoIndex">
			<text 
				:class="{'active' :intoIndex==`a${i}`}" 
				v-for="(item,i) in title"
				:key="i"
				:id="`a${i}`"
				@click="indexChange(i)"
				>{{item}}</text>
		</scroll-view>
		<view class="bottom">
			<swiper @change="activeChagne2" class="swiper" :current='active' :vertical="position!='top'">
				<swiper-item class="red" v-for="(item,i) in title">
					<slot :name="`a${i}`"></slot>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	/**
	 * tabs组件使用方法
	 * 引入tabs组件，uni-tabs父传子两个参数 
	 * 1.title 标题数组，展示在tabs头部
	 * 2.active 激活项，默认0，即第一项
	 * 3.position 标题位置 默认在上 可选top 及left
	 * uni-tabs @change 返回参数为当前显示项的下标
	 * 
	 * uni-tabs 内嵌标签设置slot='a'+下标 将展示激活项对应的标签，这是由于swiper无法放slot
	 * 
	 * 
	 * */
	export default {
		props:{
			title: {
				type: Array,
				default: ''
			},
			active: {
				type: [Number , String],
				default: 0
			},
			isSticky:{
				type: Boolean,
				default: true
			},
			position:{
				type:String,
				default:'top'
			}
		},
		data() {
			return {
				intoIndex:'a0',
			};
		},
		created(){
			this.intoIndex=`a${this.active}`
		},
		watch:{
			active(val){
				console.log(val)
				this.intoIndex=`a${val}`
				console.log(this.isSticky,'isSticky')
			}
		},
		methods:{
			indexChange(i){
				this.intoIndex=`a${i}`
				this.$emit('change',i)
			},
			activeChagne2(t){
				this.active=t.detail.current
				this.$emit('change',this.active)
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	padding: 0;
	margin: 0;
}
.tabBox{
	height: 100%;
	display: flex;
	flex-direction: column;
	// overflow: hidden;
}
.tabBox2{
	height: 100%;
	display: flex;
}

.scroll{
	width: 100%;
	white-space: nowrap;
	background: #fff;
	.active{
		border-bottom: 2px solid $uni-color-primary;
	}
	/* 隐藏滚动条 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}
	text{
		display: inline-block;
		padding: 0 30rpx;
		margin: 0 10rpx;
		height: 100rpx;
		line-height: 50px;
	}
}
.scroll2{
	width: 150rpx;
	white-space:pre-wrap;
	text-align: center;
	text{
		display: block;
		padding: 0;
		margin:10rpx;
		line-height: 50px;
	}
	.active{
		border: none;
		border-right: 2px solid $uni-color-primary;
	}
}
.sticky{
	position: sticky;
	// top:90rpx;
	z-index: 999;
	padding-bottom: 5rpx;
}

.bottom{
	margin-top:  20rpx;
	flex: 1;
	.swiper{
		z-index: 1;
		height: 100%;
		overflow: hidden;
	}
	.red{
		height: 100%;
	}
	.empty{
		height: 100%;
		background-color:$uni-bg-color-grey ;
	}
}
</style>
