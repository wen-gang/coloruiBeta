<template>
	<ui-sys tabbar>
		<ui-navbar :back="false" opacity :placeholder="false">
			<view class="flex-bar p-3" v-if="sys_scrollTop > sys_navBar">
				<text class="text-lg cicon-goods-o text-red mx-3"></text>
				<text class="text-lg text-bold">模板市场</text>
			</view>
			<view class="p-3 flex-bar flex-sub" v-if="sys_scrollTop > sys_navBar">
				<view url="/pages/search/search" class="flex-sub flex-bar">
					<view class="p-2 bg-blur-1 w-100 round flex-center" :style="{ height: `35px` }">
						<text class="cicon-search-line mx-2"></text>
						<view class="text-c text-sm">搜索关键词查找模板</view>
					</view>
				</view>
			</view>
			<view class="flex-bar">
				<!-- #ifdef MP -->
				<view :style="{ width: `${sys_capsule.width + 10}px`, height: `${sys_capsule.height}px` }"></view>
				<!-- #endif -->
			</view>
		</ui-navbar>
		<image src="https://cos.color-ui.com/img/uqlh4.png" mode="widthFix" class="w-100"></image>
		<view class="ui-container">
			<ui-title title="热门模板" depth="2" isIcon class="ml-3"></ui-title>
			<view class="ui-cards goods col-goods">
				<view class="ui-item" v-for="(item, index) in list" :key="index" @tap="toProductDetail(item.id)">
					<image :src="item.img" class="image" mode="aspectFill"></image>
					<view class="content">
						<view class="text-cut text-lg text-bold">{{ item.title }}</view>
						<view class="ui-TC-3 mt-2 text-linecut-2">{{ item.desc }}</view>
						<view class="flex-bar mt-2">
							<view class="text-price text-red text-xxl ">{{ item.price }}</view>
							<view class="flex-bar ui-TC-3">
								<view class="flex-bar mx-3">
									<text class="cicon-favorite mx-2"></text>
									{{ item.like }}
								</view>
								<view class="flex-bar mx-3">
									<text class="cicon-comment mx-2"></text>
									{{ item.comment }}
								</view>
							</view>
						</view>
					</view>
				</view>
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
					img: 'https://cos.color-ui.com/img/qtrr8.png',
					title: 'ColorStore - 个人小店',
					desc: '个人开店首选！有分类，有物流。包含多种活动，优惠券页面。',
					price: '799',
					like: 306,
					comment: 55
				},
				{
					img: 'https://cos.color-ui.com/img/beptn.png',
					title: 'ColorShop - 多用户商城',
					desc: '适配多语言,会员、商家多用户角色。对接国际物流，跨境电商立马搞定！',
					price: '2799',
					like: 156,
					comment: 24
				},
				{
					img: 'https://cos.color-ui.com/img/dkarj.png',
					title: 'ColorTakeaway - 外卖与骑手',
					desc: '多商家，多用户，另有骑手端。可做区域配送。',
					price: '4799',
					like: 173,
					comment: 32
				},
				{
					img: 'https://cos.color-ui.com/img/7grzo.png',
					title: 'ColorFinance - 金融钱包',
					desc: '',
					price: '4799',
					like: 316,
					comment: 46
				}
			]
		};
	},
	onLoad() {
		_this = this;
		this.$Modal.dialog({
			content: '模板都还没有，需要的可以QQ（1273753708）找我定制。后续慢慢上',
			success: res => {
				console.log(res);
			}
		});
	},
	methods: {}
};
</script>

<style lang="scss"></style>
