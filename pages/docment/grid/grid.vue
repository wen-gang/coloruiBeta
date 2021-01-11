<template>
	<cu-sys :loading="loading" title="栅栏" doc>
		<view class="cu-grid p-3">
			<view class="cu-col-6 cu-col-lg-4"  v-for="(item,index) in 6" :key="index">
				<view class="p-5 bg-blue m-2">{{index+1}}</view>
			</view>
		</view>
		<view class="cu-grid cu-cols-4 cu-cols-lg-6 p-3">
			<view class="cu-item" v-for="(item,index) in 12" :key="index">
				<view class="p-5 bg-green m-2">{{index+1}}</view>
			</view>
		</view>
		<view class="cu-grid grid-square cu-cols-6 p-3">
			<view class="cu-item bg-red radius " v-for="(item,index) in 12" :key="index">
				 <view class="flex-center position-center ">
				 	{{index+1}}
				 </view> 
			</view>
		</view>
		
		
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		_this.loading = false;
	},
	methods: {}
};
</script>

<style></style>
