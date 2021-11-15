<template>
	<ui-sys img="https://cos.color-ui.com/img/4put2.png" tabbar>
		<ui-navbar :back="false" opacity><view class="flex-center flex-sub" v-if="sys_scrollTop > sys_navBar">我的</view></ui-navbar>
		<view class="ui-container">
			<view class="flex-bar my-4" @click="_to('/pages/login/login')">
				<ui-avatar ui="xxl ellipse" src="/static/logo.png"></ui-avatar>
				<view class="flex-sub pl-3"><view class="text-xl">登录,享受更多服务。</view></view>
			</view>
			<ui-menu ui="mt-5 radius border">
				<ui-menu-item arrow title="Github" icon="cicon-github"></ui-menu-item>
				<ui-menu-item arrow title="关于Colorui组件库">
					<block slot="icon"><image src="/static/logo.png" mode="aspectFill" class="ui-menu-item-image"></image></block>
				</ui-menu-item>
				<ui-menu-item arrow title="设置" icon="cicon-set" @click.native="_to('/pages/my/set')"></ui-menu-item>
			</ui-menu>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			swiperList: [
				{
					img: 'https://cos.color-ui.com/img/8v2yr.png'
				},
				{
					img: 'https://cos.color-ui.com/img/qhgtb.png'
				},
				{
					img: 'https://cos.color-ui.com/img/qhgtb.png'
				}
			]
		};
	},
	onLoad() {
		_this = this;
	},
	methods: {}
};
</script>

<style lang="scss"></style>
