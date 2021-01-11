<template>
	<cu-sys bg="bg-square" :styles="{minHeight:'200vh'}">
		<cu-navbar backtext="浮动" bg="bg-none"></cu-navbar>
		<block v-if="type == 1">
			<cu-fixed><view class="p-3 bg-blue text-center">固定在顶部</view></cu-fixed>
			<cu-fixed noNav><view class="p-3 bg-blue text-center">固定在顶部（不包含导航栏）</view></cu-fixed>
			<cu-fixed val="100"><view class="p-3 bg-blue text-center">固定在顶部（100px）</view></cu-fixed>
			<cu-fixed bottom val="100"><view class="p-3 bg-blue text-center">固定在底部（100px）</view></cu-fixed>
			<cu-fixed bottom><view class="p-3 bg-blue text-center">固定在底部</view></cu-fixed>
		</block>
		<block v-if="type == 2">
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<cu-fixed sticky><view class="p-3 bg-blue text-center">固定在顶部1</view></cu-fixed>
			<cu-fixed sticky><view class="p-3 bg-green text-center">固定在顶部2</view></cu-fixed>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<cu-fixed sticky bottom><view class="p-3 bg-blue text-center">固定在底部1</view></cu-fixed>
			<cu-fixed sticky bottom><view class="p-3 bg-green text-center">固定在底部2</view></cu-fixed>
			<cu-fixed sticky bottom val="100"><view class="p-3 bg-red text-center">固定在底部3（100px）</view></cu-fixed>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
			<view class="p-5 bg-bray-a text-center">占位</view>
		</block>
		<!-- 		<cu-fixed val="-1">
			<view class="cu-bar bg-white justify-center">
				顶部（val="-1"）
			</view>
		</cu-fixed>
		<cu-fixed>
			<view class="cu-bar bg-blue justify-center">
				默认 (会扣除导航栏的高度)
			</view>
		</cu-fixed>
		<cu-fixed val="100">
			<view class="cu-bar bg-blue justify-center">
				距离顶部100px (会扣除导航栏的高度)
			</view>
		</cu-fixed>
		<cu-fixed position="bottom">
			<view class="cu-bar bg-red justify-center">
				底部
			</view>
		</cu-fixed>
		<cu-fixed position="bottom" val="100">
			<view class="cu-bar bg-red justify-center">
				距离底部100px (会扣除导航栏的高度)
			</view>
		</cu-fixed> -->
	</cu-sys>
</template>

<script>
export default {
	data() {
		return {
			type: 0
		};
	},
	onLoad(e) {
		this.type = e.type;
	},
	methods: {}
};
</script>

<style></style>
