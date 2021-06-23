<template>
	<ui-sys :title="title">
		<ui-card>
			<view class="p-4 border-bottom flex-bar">
				<view class="text-xl text-bold">styles</view>
				<view class="ui-table-td">Object</view>
				<view class="ui-table-td">{}</view>
			</view>
			<view class="p-4">
				<view class="p-2">参数说明:</view>
				<view class="p-2">内部样式</view>
			</view>
		</ui-card>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			title: '参数'
		};
	},
	methods: {}
};
</script>

<style></style>
