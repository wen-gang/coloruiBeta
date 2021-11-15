<template>
	<ui-sys img="https://cos.color-ui.com/img/4put2.png" tabbar>
		<ui-navbar :back="false" opacity><view class="flex-center flex-sub" v-if="sys_scrollTop > sys_navBar">社区</view></ui-navbar>
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
	methods: {}
};
</script>

<style lang="scss"></style>
