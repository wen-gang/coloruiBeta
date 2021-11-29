<template>
	<ui-sys title="主题">
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">
				Colorui支持多款配色的主题方案,也支持根据系统来适配暗色主题。
			</view>

			<ui-title title="配色展示" depth="2" isIcon></ui-title>
			<view class="ui-BG-1 p-3 border radius">
				<view class="ui-BG radius border m-3">
					<view class="p-4 flex">
						<view class="ui-BG-Main p-4 mr-2 radius flex-sub"></view>
						<view class="ui-BG-Main-1 p-4 mx-2 radius flex-sub"></view>
						<view class="ui-BG-Main-2 p-4 mx-2 radius flex-sub"></view>
						<view class="ui-BG-Main-3 p-4 mx-2 radius flex-sub"></view>
						<view class="ui-BG-Main-4 p-4 ml-2 radius flex-sub"></view>
					</view>
					<view class="p-4 ui-BG-3 text-center">
						<text class="ui-TC text-sm m-3">Aa</text>
						<text class="ui-TC-1 text-sm m-3">Bb</text>
						<text class="ui-TC-2 text-sm m-3">Cc</text>
						<text class="ui-TC-3 text-sm m-3">Dd</text>
						<text class="ui-TC-4 text-sm m-3">Ee</text>
					</view>
				</view>
				<view class="ui-BG radius border m-3 mt-4">
					<view class="p-5 flex"></view>
					<view class="p-4 flex ui-BG-3"></view>
				</view>
				<view class="p-3 flex justify-center flex-sub">
					<view class="p-3 ui-BG-1 radius text-xs">
						<text class="ui-TC-Main">Current</text>
						<text class="ui-TC-Main-2 ml-3">Disabled</text>
						<text class="ui-TC ml-3">Default</text>
					</view>
				</view>
			</view>

			<ui-title title="主题切换组件" depth="2" isIcon></ui-title>
			<view class="paragraph">引用组件来切换系统的主题以及强调色</view> 
			<ui-code tag="pre" lang="html" title :content="code1"></ui-code>
			<view class="my-4 text-d">演示：</view>
			<ui-change-theme ui="radius border"/>
			<ui-menu ui="mt-4 radius border">
				<ui-menu-item icon="cicon-equalizer" title="参数" arrow @click.native="_to('/pages/parameter/parameter?component=ui-theme')"></ui-menu-item>
			</ui-menu>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			code1: '...\n<ui-change-theme/>'
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
		.ui-BG {
			border-radius: 10rpx;
			display: flex;
			padding: 20rpx;
			flex-direction: column;
		}
	}
}
</style>
