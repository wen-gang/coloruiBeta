<template>
	<cu-sys :loading="loading" title="步骤条" doc>
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">步骤条</view>

			<!-- 图标 -->
			<cu-title title="图标" depth="2" isIcon toc></cu-title>
			<button class="cu-btn bg-green shadow" @tap="basics = basics == basicsList.length - 1 ? 0 : basics + 1">下一步</button>
			<cu-steps :cur="basics" :info="basicsList"></cu-steps>
			<cu-steps :cur="basics" :info="basicsList" arrow curtext="text-red"></cu-steps>
			
			
			<!-- 数字 -->
			<cu-title title="数字" depth="2" isIcon toc></cu-title>
			<button class="cu-btn bg-green shadow" @tap="num = num == numList.length - 1 ? 0 : num + 1">下一步</button>
			<cu-steps :cur="num" :info="numList" number :err="3"></cu-steps>
			<cu-steps :cur="num" :info="numList" number :err="3" arrow></cu-steps>
			
			<!-- 竖向 -->
			<cu-title title="竖向" depth="2" isIcon toc></cu-title>
			<cu-steps :cur="basics" :info="basicsList" column></cu-steps>
			<cu-steps :cur="num" :info="numList" number :err="3" column></cu-steps>
		</view>
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			numList: [
				{
					title: '开始',
					desc:'二〇二〇年十二月十七日'
				},
				{
					title: '等待',
					desc:'二〇二〇年十二月十七日'
				},
				{
					title: '错误',
					desc:'二〇二〇年十二月十七日'
				},
				{
					title: '完成',
					desc:'二〇二〇年十二月十七日'
				}
			],
			num: 0,
			basicsList: [
				{
					icon: 'cui-play-circle',
					title: '开始',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cui-countdown',
					title: '等待',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cui-close-round',
					title: '错误',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cui-check-round',
					title: '完成',
					desc:'二〇二〇年十二月十七日'
				}
			],
			basics: 0,
			column: 0
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		_this.loading = false;
	},
	methods: {
		BasicsSteps() {
			this.basics = this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1;
		},
		NumSteps() {
			this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1;
		},
		ScrollSteps() {
			this.column = this.column == 9 ? 0 : this.column + 1;
		}
	}
};
</script>

<style></style>
