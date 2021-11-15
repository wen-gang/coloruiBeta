<template>
	<ui-sys title="标题" doc>
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">标题组件可以快速构建一个等级标题。包含多种样式。</view>
			<ui-menu class="mt-4 radius border">
				<ui-menu-item icon="cicon-equalizer" title="参数" @click.native="_to('/pages/parameter/parameter?component=ui-navbar')"></ui-menu-item>
			</ui-menu>

			<ui-title title="默认" depth="2" isIcon></ui-title>
			<view class="ui-BG radius">
				<ui-title class="mt-3" title="默认" desc="basic">
					<block slot="icon"><view class="text-green cui-title"></view></block>
				</ui-title>
			</view>

			<ui-title title="显示图标" depth="2" isIcon></ui-title>
			<view class="ui-BG radius"><ui-title class="mt-3" title="基础" desc="basic" isIcon></ui-title></view> 
			
			<ui-title title="显示圆点" depth="2" isIcon></ui-title>
			<view class="ui-BG radius"><ui-title class="mt-3" title="圆点" desc="dot" hasDot></ui-title></view>
			<ui-title title="显示短线" depth="2" isIcon></ui-title>
			<view class="ui-BG radius"><ui-title class="mt-3" title="短线" desc="line" hasLine></ui-title></view>  
			<ui-title title="对齐" depth="2" isIcon></ui-title>
			<view class="ui-BG radius"><ui-title class="mt-3" title="基础" desc="basic" align="center"></ui-title></view>
			<view class="ui-BG radius"><ui-title class="mt-3" title="圆点" desc="dot" align="center" hasDot></ui-title></view>
			<view class="ui-BG radius"><ui-title class="mt-3" title="短线" desc="line" align="center" hasLine></ui-title></view>
			<ui-title title="特殊模板" depth="2" isIcon></ui-title> 
			<view class="paragraph"><ui-code>tpl="center-column"</ui-code></view>
			
			<view class="ui-BG radius">
				<ui-title class="mt-3" title="精选推荐" titleColor="text-blue" descColor="text-cyan" desc="Carefully chosen" tpl="center-column" hasDot></ui-title>
			</view>
			<view class="ui-BG radius"><ui-title class="mt-3" title="精选推荐" titleColor="text-blue" tpl="center-column" hasDot></ui-title></view>
			<view class="ui-BG radius">
				<ui-title class="mt-3" title="猜你喜欢" titleColor="text-red" descColor="text-orange" desc="Guess you like" tpl="center-column" hasLine></ui-title>
			</view>
			<view class="ui-BG radius"><ui-title class="mt-3" title="猜你喜欢" titleColor="text-red" tpl="center-column" hasLine></ui-title></view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			demo: false,
			loading: true
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

<style lang="scss"></style>
