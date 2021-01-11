<template>
	<view class="colorui-head">
		<cu-navbar
			:back="back"
			:opacity="opacity"
			:opacityChange="opacityChange"
			:opacityBg="opacityBg"
			:custom="custom"
			:backtext="backtext"
			:fixed="fixed"
			:shadow="shadow"
			:status="status"
		>
			<block slot="left">
				<slot name="left"></slot>
				<match-media :min-width="1025" v-if="opacity ? sys_scrollTop > sys_navBar / 2 : true">
					<a href="/"><image src="https://image.weilanwl.com/web/u6d68.png" mode="widthFix" style="width: 150px;" class="mx-4"></image></a>
				</match-media>
			</block>
			<match-media :min-width="1025" slot="center">
				<view class="cu-tabbar-box">
					<view class="cu-tabbar">
						<block class="" v-for="(item, index) in tabbar" :key="index">
							<view
								class="tabbar-item"
								:class="[index == curr ? curTextClass : textClass, item.type, { cur: index == curr }]"
								:style="[{ color: index == curr ? curTextCss : textCss }]"
								@tap="changeTab(index)"
							>
								<view class="tabbar-icon"><image :src="index == curr ? item.curIcon : item.icon" mode="aspectFill"></image></view>
								<view class="tabbar-text">{{ item.name }}</view>
								<cu-tag :value="item.tag" v-if="item.tag" badge></cu-tag>
							</view>
						</block>
					</view>
				</view>
			</match-media>
			<view slot="right">
				<cu-popover :mask="true" v-if="opacity ? sys_scrollTop > sys_navBar / 2 : true">
					<view class="p-3 mx-3"><text class="cui-clothes icon-lg"></text></view>
					<block slot="content">
						<view class="change-theme">
							<view class="item">
								<view @tap="changeTheme('light')" :class="sys_theme == 'light' ? 'bg-main-a text-main-e' : 'box-bg-sub'">
									<view class="text-right text-lg mb-2"><text :class="sys_theme == 'light' ? 'cui-check-round' : 'cui-round'"></text></view>
									<view class="text-xs">雅白</view>
								</view>
							</view>
							<view class="item">
								<view @tap="changeTheme('dark')" :class="sys_theme == 'dark' ? 'bg-main-a text-main-e' : 'box-bg-sub'">
									<view class="text-right text-lg mb-2"><text :class="sys_theme == 'dark' ? 'cui-check-round' : 'cui-round'"></text></view>
									<view class="text-xs">酷黑</view>
								</view>
							</view>
							<view class="item">
								<view @tap="changeTheme('lightblue')" :class="sys_theme == 'lightblue' ? 'bg-main-a text-main-e' : 'box-bg-sub'">
									<view class="text-right text-lg mb-2"><text :class="sys_theme == 'lightblue' ? 'cui-check-round' : 'cui-round'"></text></view>
									<view class="text-xs">浅蓝</view>
								</view>
							</view>
							<view class="item">
								<view @tap="changeTheme('darkblue')" :class="sys_theme == 'darkblue' ? 'bg-main-a text-main-e' : 'box-bg-sub'">
									<view class="text-right text-lg mb-2"><text :class="sys_theme == 'darkblue' ? 'cui-check-round' : 'cui-round'"></text></view>
									<view class="text-xs">深蓝</view>
								</view>
							</view>
							<view class="item">
								<view @tap="changeTheme('auto')" :class="sys_theme == 'auto' ? 'bg-main-a text-main-e' : 'box-bg-sub'">
									<view class="text-right text-lg mb-2"><text :class="sys_theme == 'auto' ? 'cui-check-round' : 'cui-round'"></text></view>
									<view class="text-xs">自动</view>
								</view>
							</view>
						</view>
						<view class="change-main cu-grid cu-cols-6">
							<view class="cu-item" v-for="(item, index) in color" :key="index" @tap="changeMain(item)">
								<view :class="'bg-' + item" class="change-main-btn"><text class="text-main-e" :class="sys_main == item ? 'cui-check' : ''"></text></view>
							</view>
						</view>
					</block>
				</cu-popover>
			</view>
		</cu-navbar>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'appNav',
	data() {
		return {
			color: ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown']
		};
	},
	props: {
		back: {
			//是否返回上一页
			type: Boolean,
			default: true
		},
		backtext: {
			//返回文本
			type: String,
			default: ''
		},
		status: {
			//状态栏颜色 可以选择light dark/其他字符串视为黑色
			type: String,
			default: ''
		},
		opacity: {
			//是否开启滑动渐变
			type: Boolean,
			default: false
		},
		custom: {
			type: Boolean,
			default: false
		},
		opacityChange: {
			//开启滑动渐变后 文本样式是否翻转
			type: Boolean,
			default: false
		},
		opacityBg: {
			//开启滑动渐变后 返回按钮是否添加背景
			type: Boolean,
			default: false
		},
		fixed: {
			//是否浮动
			type: Boolean,
			default: false
		},
		shadow: {
			//是否开启阴影
			type: Boolean,
			default: false
		},
		capsule: {
			//是否开启胶囊返回
			type: Boolean,
			default: false
		},
		curr: {
			type: Number,
			default: 0
		}
	},
	computed: {
		...mapState(['tabbar'])
	},
	created() {
		uni.$on('_scrollTop_' + this.$root._uid, e => {
			this.sys_scrollTop = e;
		});
	},
	methods: {
		changeTheme(val) {
			this.$store.commit('setTheme', val);
		},
		changeMain(val) {
			this.$store.commit('setMain', val);
		}
	}
};
</script>

<style lang="scss">
.colorui-head {
	.change-theme {
		padding: 10rpx;
		display: flex;
		align-items: center;
		.item {
			padding: 10rpx;
			text-align: center;
			> view {
				border-radius: 10rpx;
				display: flex;
				padding: 20rpx;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.change-main {
		width: 520rpx;
		padding: 10rpx;
		.cu-item {
			text-align: center;
			padding: 4rpx 0;
			.change-main-btn {
				width: 45rpx;
				height: 45rpx;
				display: inline-block;
				overflow: hidden;
				border-radius: 50%;
				line-height: 45rpx;
			}
		}
	}
	.cu-tabbar-box {
		.tabbar-item {
			display: flex;
			flex-direction: row;
			position: relative;
			padding: 0 10px;
			margin: 0 20px;
			.tabbar-text {
				font-size: 15px;
				margin: 0 0 0 5px;
			}
		}
	}
	@media screen and (min-width: 1025px) {
		/deep/ .cu-navbar-box .cu-bar .back {
			display: none;
		}
	}
}
</style>
