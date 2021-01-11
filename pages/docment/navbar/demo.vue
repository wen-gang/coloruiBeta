<template>
	<cu-sys :styles="{minHeight:'200vh'}">
		<block v-if="id==1">
			<cu-navbar> </cu-navbar>
		</block>
		<block v-if="id==2">
			<cu-navbar backtext="返回"> </cu-navbar>
		</block>
		<block v-if="id==3">
			<cu-navbar :shadow="shadow"> </cu-navbar>
			<view class="p-4 mt-3 flex flex-between">
				<button class="cu-btn round border text-blue" @tap="shadow = false" :class="{'bg-main-a':shadow == false}">无阴影</button>
				<button class="cu-btn round border text-blue" @tap="shadow = 'sm'" :class="{'bg-main-a':shadow == 'sm'}">小阴影</button>
				<button class="cu-btn round border text-blue" @tap="shadow = true" :class="{'bg-main-a':shadow == true}">默认阴影</button>
				<button class="cu-btn round border text-blue" @tap="shadow = 'lg'" :class="{'bg-main-a':shadow == 'lg'}">长阴影</button>
			</view>
		</block>
<!-- 		<cu-navbar :back="false" custom>
			大标题
		</cu-navbar> -->
		<!-- <cu-navbar backtext="透明过渡" status="dark" opacity opacityBg></cu-navbar> -->
		<!-- <cu-navbar backtext="透明过渡" status="light" opacity opacityChange opacityBg></cu-navbar> -->

	</cu-sys>
</template>

<script>
export default {
	data() {
		return {
			id:0,
			shadow:true
		};
	},
	onLoad(e) {
		this.id = e.id;
	},
	methods: {}
};
</script>

<style></style>
