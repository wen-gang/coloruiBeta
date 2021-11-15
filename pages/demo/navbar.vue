<template>
	<ui-sys>
		<block v-if="id == 1">
			<ui-navbar></ui-navbar>
			<view class="ui-container">
				<ui-menu class="mt-4 radius">
					<ui-menu-item icon="cicon-home-o" title="重定向为首页" @click.native="_to('/pages/demo/navbar?id=1','reLaunch')"></ui-menu-item>
				</ui-menu>
			</view>
		</block>
		<block v-if="id == 2"><ui-navbar backtext="返回"></ui-navbar></block>
		<block v-if="id == 3">
			<ui-navbar :ui="ui"></ui-navbar>
			<view class="p-4 mt-3 flex-center">
				<button class="ui-btn sm m-2 round borde" @tap="ui = ''" :class="{ 'ui-BG-Main': ui == '' }">无阴影</button>
				<button class="ui-btn sm m-2 round border" @tap="ui = 'shadow-sm'" :class="{ 'ui-BG-Main': ui == 'shadow-sm' }">小阴影</button>
				<button class="ui-btn sm m-2 round border" @tap="ui = 'shadow'" :class="{ 'ui-BG-Main': ui == 'shadow' }">默认阴影</button>
				<button class="ui-btn sm m-2 round border" @tap="ui = 'shadow-lg'" :class="{ 'ui-BG-Main': ui == 'shadow-lg' }">长阴影</button>
			</view>
		</block>
		<view class="">
			<view class="p-5 m-5 radius ui-BG border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-1 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-2 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-3 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-Main border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-Main-1 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-Main-2 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-Main-3 border"><view class="p-5 m-5"></view></view>
			<view class="p-5 m-5 radius ui-BG-Main-4 border"><view class="p-5 m-5"></view></view>
		</view>
		<!-- 		<ui-navbar :back="false" custom>
			大标题
		</ui-navbar> -->
		<!-- <ui-navbar backtext="透明过渡" status="dark" opacity opacityBg></ui-navbar> -->
		<!-- <ui-navbar backtext="透明过渡" status="light" opacity opacityChange opacityBg></ui-navbar> -->
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			ui: ''
		};
	},
	onLoad(e) {
		this.id = e.id;
	},
	methods: {}
};
</script>

<style></style>
