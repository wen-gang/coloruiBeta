<template>
	<ui-sys title="输入框">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">输入框</view>
			 <ui-form>
				 <ui-form-group title="文本">
					 <ui-input></ui-input>
				 </ui-form-group>
				 <ui-form-group>
					 <ui-input cleared></ui-input>
				 </ui-form-group>
			 </ui-form>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
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

<style></style>
