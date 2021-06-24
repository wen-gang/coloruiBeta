<template>
	<ui-sys title="模态框">
		<view class="ui-container">
			<ui-title depth="2" title="默认 系统调用" isIcon></ui-title>
			<button class="ui-btn" @tap="show">modal</button>
		</view>
		<view class="ui-container">
			<ui-title depth="2" title="自定义" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('customize')">modal</button>
		</view>

		<ui-modal name="customize" dialog="width:auto" :option="false">
			<view class="p-4">
				<ui-loading color img="/static/logo.png"> </ui-loading>
			</view>
		</ui-modal>
		<view class="ui-container">
			<ui-title depth="2" title="自定义2" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('customize2')">modal</button>
		</view>

		<ui-modal name="customize2">
			<view class="p-5 flex-center">
				<ui-loading color img="/static/logo.png"> </ui-loading>
			</view>
		</ui-modal>

		<view class="ui-container">
			<ui-title depth="2" title="不显示取消" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('btn1')">modal</button>
			<button class="ui-btn" @tap="show2()">系统调用</button>
		</view>

		<ui-modal name="btn1" :showCancel="false">
			<view class="p-5 flex-center">
				<ui-loading color img="/static/logo.png"> </ui-loading>
			</view>
		</ui-modal>
		
		<view class="ui-container">
			<ui-title depth="2" title="更改文字" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('text1')">modal</button>
			<button class="ui-btn" @tap="show3()">系统调用</button>
		</view>
		
		<ui-modal name="text1" cancelText="再见" confirmText="好的">
			<view class="p-5 flex-center">
				<ui-loading color img="/static/logo.png"> </ui-loading>
			</view>
		</ui-modal>
		
		<view class="ui-container">
			<ui-title depth="2" title="透明" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('transparent1')">modal</button>
			<button class="ui-btn" @tap="$Modal.show('transparent2')">modal</button>
		</view>
		<view class="ui-container">
			<ui-title depth="2" title="抽屉" isIcon></ui-title>
			<button class="ui-btn" @tap="$Modal.show('drawer')">drawer</button> 
			<button class="ui-btn" @tap="$Modal.show('top')">top</button> 
		</view>
		
		<ui-modal name="top" mask="40" align="top">
			<view class="p-5 flex-center">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</ui-modal>
		<ui-modal name="drawer" mask="40" align="bottom">
			<view class="p-5 flex-center">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</ui-modal>
		<ui-modal name="transparent1" transparent mask="40" iconCancel>
			<view class="p-5 flex-center">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</ui-modal>
		<ui-modal name="transparent2" cancelText="再见" confirmText="好的" transparent mask="40">
			<view class="p-5 flex-center">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</ui-modal>
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
	methods: {
		show() {
			this.$Modal.dialog({
				content: '这是一个模态弹窗',
				success: res => {
					console.log(res);
				}
			});
		},
		show2() {
			this.$Modal.dialog({
				content: '这是一个模态弹窗',
				showCancel: false,
				success: res => {
					console.log(res);
				}
			});
		},
		show3() {
			this.$Modal.dialog({
				content: '您好',
				cancelText: '再见',
				confirmText: '好的',
				success: res => {
					console.log(res);
				}
			});
		}
	}
};
</script>

<style></style>
