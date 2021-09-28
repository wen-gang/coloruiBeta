<template>
	<ui-sys title="步骤条">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">步骤条</view>

			<!-- 图标 -->
			<ui-title title="图标" depth="2" isIcon></ui-title>
			<button class="ui-btn bg-green shadow" @tap="basics = basics == basicsList.length - 1 ? 0 : basics + 1">下一步</button>
			<ui-steps :cur="basics" :info="basicsList"></ui-steps>
			<ui-steps :cur="basics" :info="basicsList" arrow curtext="text-red"></ui-steps>
			
			
			<!-- 数字 -->
			<ui-title title="数字" depth="2" isIcon></ui-title>
			<button class="ui-btn bg-green shadow" @tap="num = num == numList.length - 1 ? 0 : num + 1">下一步</button>
			<ui-steps :cur="num" :info="numList" number :err="3"></ui-steps>
			<ui-steps :cur="num" :info="numList" number :err="3" arrow></ui-steps>
			
			<!-- 竖向 -->
			<ui-title title="竖向" depth="2" isIcon></ui-title>
			<ui-steps :cur="basics" :info="basicsList" column></ui-steps>
			<ui-steps :cur="num" :info="numList" number :err="3" column></ui-steps>
		</view>
	</ui-sys>
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
					icon: 'cicon-play-circle',
					title: '开始',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cicon-countdown',
					title: '等待',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cicon-close-round',
					title: '错误',
					desc:'二〇二〇年十二月十七日'
				},
				{
					icon: 'cicon-check-round',
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
