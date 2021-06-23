<template>
	<ui-sys title="卡片">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">卡片</view>
		</view>
		<!-- <ui-card :margin="false"><ui-card-item :img="item.img" :title="item.title" :desc="item.desc" v-for="(item, index) in list" :key="index"></ui-card-item></ui-card> -->
		<view class="ui-grid ui-cols-2">
			<view class="ui-item" v-for="(item, index) in list" :key="index">
				<ui-card shadow imgHeight="180rpx" :img="item.img" :title="item.title" :desc="item.desc">
					<block slot="tag">
						<view class="ui-tag bg-mask-20 radius-lr">
							<view class="">
								<text class="uicon-favorite mx-2"></text>{{item.like}}
							</view>
						</view>
					</block>
				</ui-card>
			</view>
		</view>
		<view class="ui-grid ui-cols-1">
			<view class="ui-item" v-for="(item, index) in list" :key="index">
				<ui-card shadow :img="item.img" :title="item.title" :desc="item.desc" fixedTitle></ui-card>
			</view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			list: [
				{
					img: 'https://oss.color-ui.com/img/qtrr8.png',
					title: 'ColorStore - 个人小店',
					desc: '个人开店首选！有分类，有物流。包含多种活动，优惠券页面。',
					price: '799',
					like: 306,
					comment: 55
				},
				{
					img: 'https://oss.color-ui.com/img/beptn.png',
					title: 'ColorShop - 多用户商城',
					desc: '适配多语言,会员、商家多用户角色。对接国际物流，跨境电商立马搞定！',
					price: '2799',
					like: 156,
					comment: 24
				},
				{
					img: 'https://oss.color-ui.com/img/dkarj.png',
					title: 'ColorTakeaway - 外卖与骑手',
					desc: '多商家，多用户，另有骑手端。可做区域配送。',
					price: '4799',
					like: 173,
					comment: 32
				},
				{
					img: 'https://oss.color-ui.com/img/7grzo.png',
					title: 'ColorFinance - 金融钱包',
					desc: ' ',
					price: '4799',
					like: 316,
					comment: 46
				}
			]
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
