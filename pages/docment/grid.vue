<template>
	<ui-sys title="栅栏">
		<view class="ui-grid p-3">
			<view class="ui-col-6 ui-col-lg-4"  v-for="(item,index) in 6" :key="index">
				<view class="p-5 bg-blue m-2">{{index+1}}</view>
			</view>
		</view>
		<view class="ui-grid ui-cols-4 ui-cols-lg-6 p-3">
			<view class="ui-item" v-for="(item,index) in 12" :key="index">
				<view class="p-5 bg-green m-2">{{index+1}}</view>
			</view>
		</view>
		<view class="ui-grid grid-square ui-cols-6 p-3">
			<view class="ui-item bg-red radius " v-for="(item,index) in 12" :key="index">
				 <view class="flex-center position-center ">
				 	{{index+1}}
				 </view> 
			</view>
		</view>
		
		
	</ui-sys>
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
