<template>
	<ui-sys title="菜单">
		<view class="ui-container">
			<ui-title depth="2" title="菜单" isIcon></ui-title> 
			<ui-menu class="mt-5 border sm-border radius"  >
				<ui-menu-item arrow title="Github" icon="uicon-github"></ui-menu-item>
				<ui-menu-item arrow title="关于Colorui组件库">
					<block slot="icon"><image src="/static/logo.png" mode="aspectFill" class="ui-menu-item-image"></image></block>
				</ui-menu-item>
				<ui-menu-item arrow title="按钮" icon="uicon-ellipse">
					<block slot="action">
						<button class="ui-btn border sm">
							<text class="uicon-cloud-upload"></text>
							上传
						</button>
					</block>
				</ui-menu-item>
				<ui-menu-item arrow title="标签" icon="uicon-tag text-orange">
					<block slot="action">
						<view class="ui-tag bg-red img">
							<image src="https://oss.color-ui.com/avatar/lol-avatar/1009.jpg" mode="aspectFill" class="tag-img"></image>
							bg-red
						</view>

						<view class="ui-tag bg-red-thin sm">bg-red-thin</view>
					</block>
				</ui-menu-item>
				<ui-menu-item arrow title="头像组" icon="uicon-tag text-orange">
					<block slot="action">
						<view class="ui-avatar-stack mx-3">
							<view class="ui-avatar xs round borderss border-white"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
							<view class="ui-avatar xs round borderss border-white"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
							<view class="ui-avatar xs round borderss border-white"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
						</view>
					</block>
				</ui-menu-item>
			</ui-menu>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {};
	},
	onLoad() {
		_this = this;
	},
	onReady() {},
	methods: {}
};
</script>

<style></style>
