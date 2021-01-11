<template>
	<cu-sys :loading="loading" title="主题" doc>
		<view class="cu-container">
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				Colorui支持多款配色的主题方案,也支持根据系统来适配暗色主题。 如果你项目中不需要多主题,你可以在
				<cu-code>coloui/scss/_var.scss</cu-code>
				中设置
				<cu-code>$enable-theme</cu-code>
				来关闭多主题的编译,以减少冗余代码。
			</view>
			
			<cu-code tag="pre" lang="html" :content="code1"></cu-code>
			<view class="page-bg p-3">
				<view class="box-bg radius m-3">
					<view class="p-4 flex">
						<view class="bg-main-a p-4 mr-2 radius flex-sub"></view>
						<view class="main-b-bg p-4 mx-2 radius flex-sub"></view>
						<view class="main-c-bg p-4 mx-2 radius flex-sub"></view>
						<view class="main-d-bg p-4 ml-2 radius flex-sub"></view>
					</view>
					<view class="p-4 box-bg-sub text-center">
						<text class="text-a text-sm m-3">Aa</text>
						<text class="text-b text-sm m-3">Bb</text>
						<text class="text-c text-sm m-3">Cc</text>
						<text class="text-d text-sm m-3">Dd</text>
						<text class="text-e text-sm m-3">Ee</text>
					</view>
				</view>
				<view class="box-bg radius m-3 mt-4">
					<view class="p-5 flex"></view>
					<view class="p-4 flex box-bg-sub"></view>
				</view>
				<view class="p-3 flex justify-center flex-sub">
					<view class="p-3 box-bg-sub radius text-xs">
						<text class="text-main-a">Current</text>
						<text class="main-d-text ml-3">Disabled</text>
						<text class="text-a ml-3">Default</text>
					</view>
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
			loading: true,
			code1: '<template>\n  <cu-sys>\n    ...业务代码\n  </cu-sys>\n</template>',
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

<style lang="scss">
.change-theme {
	.item {
		padding: 10rpx;
		.box-bg {
			border-radius: 10rpx;
			display: flex;
			padding: 20rpx;
			flex-direction: column;
		}
	}
}
</style>
