<template>
	<ui-sys title="浮动">
		<ui-fixed bg="bg-mask-20"><view class=" flex-center p-5">Top</view></ui-fixed>
		<view></view><view class="p-5 bg-blue" v-for="(item, index) in list" :key="index">{{ index + 1 }}</view>
		<ui-fixed bg="bg-red" sticky><view class=" flex-center p-5">sticky</view></ui-fixed>
		<view><view class="p-5 bg-cyan" v-for="(item, index) in 10" :key="index">{{ index + 1 }}</view></view>

		<ui-fixed bg="bg-red" sticky :val="100"><view class=" flex-center p-5">sticky</view></ui-fixed>
		<view><view class="p-5 bg-cyan" v-for="(item, index) in 10" :key="index">{{ index + 1 }}</view></view>
		<ui-fixed bg="bg-mask-20" bottom><view class=" flex-center p-5">bottom</view></ui-fixed>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			list: 10
		};
	},
	methods: {}
};
</script>

<style></style>
