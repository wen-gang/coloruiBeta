<template>
	<ui-sys title="卡片">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">卡片</view>
		</view>
		<!-- <ui-card :margin="false"><ui-card-item :img="item.img" :title="item.title" :desc="item.desc" v-for="(item, index) in list" :key="index"></ui-card-item></ui-card> -->
		<view class="ui-grid multi-column">
			<view class="ui-item" v-for="(item, index) in shop" :key="index">
				<ui-card ui="shadow m-3 radius" imgHeight="auto" :img="item.imgUrl" :title="item.title"
					:desc="item.desc">
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
		<view class="ui-grid ui-cols-2">
			<view class="ui-item" v-for="(item, index) in list" :key="index">
				<ui-card ui="shadow m-3 radius" imgHeight="180rpx" :img="item.img" :title="item.title"
					:desc="item.desc">
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
				<ui-card ui="shadow m-3 radius" :img="item.img" :title="item.title" :desc="item.desc" fixedTitle>
				</ui-card>
			</view>
		</view>
	</ui-sys>
</template>

<script>
	let _this = null;
	export default {
		data() {
			return {
				shop: [{
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: false,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://oss.color-ui.com/img/qtrr8.png',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				},{
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: false,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://oss.color-ui.com/img/qtrr8.png',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				},{
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://oss.color-ui.com/img/qtrr8.png',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				},{
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://oss.color-ui.com/img/qtrr8.png',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				}, {
					title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
					imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
					avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
					name: '盒子芥末',
					isFavor: true,
					favor: 333
				},],
				list: [{
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
