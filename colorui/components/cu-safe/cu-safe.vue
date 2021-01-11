<template>
	<view class="cu-safe" :style="[{ height: safe + 'px' }]"></view>
</template>

<script>
var _this = null;
export default {
	name: 'cuSafe',
	data() {
		return {
			safe: 0
		};
	},
	props: {
		position: {
			type: String,
			default: 'bottom'
		}
	},
	created() {
		_this = this;
		//console.log('success created cuSafe');
		uni.getSystemInfo({
			success: res => {
				//console.log(_this.position);
				//console.log(res.safeAreaInsets.top);
				//console.log(res.safeAreaInsets.bottom);
				if (_this.position == 'bottom') {
					_this.safe = res.safeAreaInsets.bottom;
				}
				if (_this.position == 'top') {
					_this.safe = res.safeAreaInsets.top;
				}
			}
		});
	},
	methods: {}
};
</script>

<style lang="scss">
.cu-fixed {
}
</style>
