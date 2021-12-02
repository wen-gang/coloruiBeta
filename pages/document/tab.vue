<template>
	<ui-sys title="选项卡">
		<!-- 简介 -->

		<ui-title title="简介" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="paragraph mx-4" ui="sm">选项卡</view>

		<ui-title title="默认" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" ui="sm"></ui-tab>
		

		<ui-title title="标记在上" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" tpl="topline" ui="sm"></ui-tab>
		
		<ui-title title="点标记" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" tpl="dot" ui="sm"></ui-tab>
		
		<ui-title title="短划线标记" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" tpl="long" ui="sm"></ui-tab>
		
		<ui-title title="梯形标记" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" tpl="trapezoid" ui="sm"></ui-tab>
		
		<ui-title title="按钮标记" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1','选项卡2','选项卡3']" tpl="btn" mark="bg-red round" curColor="text-white" ui="sm"></ui-tab>
		
		<ui-title title="分段器1" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="ui-BG-3 p-3 text-center">			
			<ui-tab :tab="['选项卡1','选项卡2','选项卡3','选项卡4']" tpl="btn" mark="bg-red radius" ui="radius" curColor="text-white" inline></ui-tab>
		</view>
		<ui-title title="分段器2" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-3 text-center">			
			<ui-tab :tab="['选项卡1','选项卡2','选项卡3','选项卡4']" tpl="btn" mark="ui-BG radius" ui="radius ui-BG-4" inline></ui-tab>
		</view>

		<ui-title title="分段器3" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-3 text-center">			
			<ui-tab :tab="['选项卡1','选项卡2','选项卡3','选项卡4','选项卡5','选项卡6','选项卡7']" tpl="btn" mark="ui-BG radius" ui="radius ui-BG-4 sm" inline scroll width="100%"></ui-tab>
		</view>
		
		<ui-title title="分段器4" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-3 text-center">			
			<ui-tab :tab="['选项卡1','选项卡2','选项卡3','选项卡4']" tpl="btn" mark="bg-white radius" ui="bg-red radius sm" curColor="text-red" inline></ui-tab>
		</view>
		
		
		<ui-title title="等分" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="px-5"><ui-tab :tab="['选项卡1', '选项卡2', '选项卡3', '选项卡4']" :value="2" align="flex-bar" ui="sm"></ui-tab></view>

		<ui-title title="居中" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1', '选项卡2', '选项卡3']" align="flex-center" ui="sm"></ui-tab>

		<ui-title title="滚动" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab :tab="['选项卡1', '选项卡2', '选项卡3', '选项卡4', '选项卡5', '选项卡6']" scroll ui="sm"></ui-tab>

		<ui-title title="背景" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-tab ui="bg-red sm" mark="text-white" :tab="['选项卡1', '选项卡2', '选项卡3']" curColor="text-white"></ui-tab>

		<ui-title title="绑定值" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-4">data => NavCur:{{ NavCur }}</view>
		<ui-tab :tab="['选项卡1', '选项卡2', '选项卡3']" v-model="NavCur" ui="sm"></ui-tab>

		<ui-title title="事件/多数据" depth="2" isIcon ui="mx-4"></ui-title>

		<view class="p-4">@change => 输出 {{ change }}</view>
		<ui-tab :tab="[{name:'选项卡1',icon:'cicon-github text-red'},{name:'选项卡2',tag:''},{name:'选项卡3',tag:'hot'}]" @change="tabChange" ui="sm"></ui-tab>
		
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			NavCur: 0,
			change: ''
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		_this.loading = false;
	},
	methods: {
		tabChange(data) {
			this.change = JSON.stringify(data);
		}
	}
};
</script>

<style></style>
