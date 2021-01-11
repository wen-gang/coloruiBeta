<template>
	<cu-sys :loading="loading" title="浮动" doc>
		<cu-title class="mt-4" title="固定位置"  isIcon toc>
			<block slot="more">
				<navigator url="demo?type=1" class="pl-3">
					<text class="cui-angle"></text>
				</navigator>
			</block>
		</cu-title>
		<cu-title class="mt-4" title="滚动定位模式"  isIcon toc>
			<block slot="more">
				<navigator url="demo?type=2" class="pl-3">
					<text class="cui-angle"></text>
				</navigator>
			</block>
		</cu-title>
	</cu-sys>
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
