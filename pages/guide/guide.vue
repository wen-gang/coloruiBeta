<template>
	<ui-sys :footer="false">
		<view class="guide-page" style="height: 60vh">
			<view class="p-5">
				<ui-loading color img="/static/logo.png"></ui-loading>
			</view>
		</view>
	</ui-sys>
</template>

<script>
	var _this = null;
	export default {
		data() {
			return {};
		},
		onLoad() {
			_this = this;
		},
		onReady() {
			setTimeout(()=>{
				this._toHome();
			},1500)
		},
		methods: {}
	};
</script>

<style lang="scss">
	.guide-page {
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
