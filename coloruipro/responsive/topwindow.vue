<template>
	<view class="rgbui-head box-bg" v-if="windowLaunch && isLogin">
		<view class="text-xl flex-bar text-light nav-bg-dark px-3 nav-head pc-head" :style="{ width: (sys_left ? 260 : 60) + 'px' }">
			<a href="/" class="px-3 flex-bar" v-if="sys_left">管理控制台</a>
			<view class="icon ui-btn" :class="[{ 'nav-bg-sub': sys_left }]" @tap="toggleNav()"><text class="cui-sort text-xl"></text></view>
		</view>
		<view class="text-xl flex-bar px-3 nav-head mobile-head">
			<view class="icon ui-btn" :class="[{ 'nav-bg-sub': sys_left }]" @tap="toggleNav()"><text class="cui-sort text-xl"></text></view>
		</view>
		<view class="tab-box" :style="{ width: 'calc(100vw - ' + (sys_left ? 260 : 60) + 'px - 200px)' }">
			<view class="tab-ul">
				<view @tap="navto(item.url)" :data-url="item.url" class="tab-li" v-for="(item, index) in sys_router" :key="index">
					<view class="tab-li-box" :class="[{ cur: item.title == sys_title }]">
						<a href="javascript:void(0);" :title="item.title"><text :class="['icon-lg', item.icon, { 'mr-3': sys_left }]" v-if="item.icon"></text></a>
						{{ item.title }}
						<view class="tab-li-icon"><text class="cui-close text-lg nav-text" @tap.stop="delRouter(index, item.title == sys_title)"></text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex-center">
			<ui-popover :mask="true">
				<view class="p-3 mx-3"><text class="cui-notice-active icon-xl"></text></view>
				<block slot="content"><view class="p-4">暂无通知</view></block>
			</ui-popover>

			<ui-popover :mask="true" :index="100">
				<view class="p-3 "><text class="cui-settings icon-xl"></text></view>
				<block slot="content">
					<view class="change-theme">
						<view class="item" v-for="(item, index) in theme" :key="index">
							<view @tap="changeTheme(item.name)" :class="sys_theme == item.name ? 'main-a-bg main-e-text' : 'menu-bg-sub'">
								<view class="text-right text-lg mb-2"><text :class="sys_theme == item.name ? 'cui-check-round' : 'cui-round'"></text></view>
								<view class="text-xs">{{ item.title }}</view>
							</view>
						</view>
					</view>
					<view class="change-main ui-grid ui-col-6">
						<view class="item" v-for="(item, index) in color" :key="index" @tap="changeMain(item)">
							<view :class="'bg-' + item" class="change-main-btn"><text class="main-e-text" :class="sys_main == item ? 'cui-check' : ''"></text></view>
						</view>
					</view>
				</block>
			</ui-popover>

			<ui-popover :mask="true">
				<view class="p-3 mx-3">
					<view class="ui-avatar round box-bg border"><image src="/static/tab_icon/my_cur.png" mode="aspectFill"></image></view>
				</view>
				<block slot="content">
					<view class="ui-list menu sm-border ">
						<navigator url="" hover-class="none" class="ui-item arrow">
							<view class="content">
								<text class="cui-crown-o text-orange mr-3"></text>
								个人资料
							</view>
						</navigator>
						<view @tap="loginOut" class="ui-item arrow ui-link">
							<view class="content">
								<text class="cui-logout text-red mr-3"></text>
								退出登录
							</view>
						</view>
					</view>
				</block>
			</ui-popover>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			windowLaunch: false,
			theme: [
				{
					name: 'light',
					title: '雅白'
				},
				{
					name: 'dark',
					title: '酷黑'
				},
				{
					name: 'lightblue',
					title: '浅蓝'
				},
				{
					name: 'darkblue',
					title: '深蓝'
				},
				{
					name: 'auto',
					title: '自动'
				}
			],
			color: ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'],
			title: ''
		};
	},
	computed: {
		...mapState(['sys_router', 'sys_left', 'sys_title'])
	},
	created() {
		uni.$on('_scrollTop_' + this.$root._uid, e => {
			this.sys_scrollTop = e;
		});
	},
	mounted() {
		uni.$on('windowLaunch', data => {
			if (data) {
				this.windowLaunch = true;
			}
		});
		uni.onWindowResize((res) => {
			if (res.size.windowWidth < 768) {
				this.setNav(false);
			}
		})
		if (uni.getSystemInfoSync().windowWidth < 768) {
				this.setNav(false);
		}
	},
	methods: {
		_onHide() {
			console.log('onhide');
		},

		toggleNav() {
			this.$store.commit('setLeft', !this.sys_left);
			// #ifdef H5
			document.getElementsByTagName('uni-left-window')[0].className = this.sys_left ? 'show' : 'hide';
			// #endif
		},
		setNav(val) {
			this.$store.commit('setLeft', val);
			// #ifdef H5
			document.getElementsByTagName('uni-left-window')[0].className = val ? 'show' : 'hide';
			// #endif
		},
		changeTheme(val) {
			this.$store.commit('setTheme', val);
		},
		changeMain(val) {
			this.$store.commit('setMain', val);
		},
		navto(url) {
			uni.navigateTo({
				url: '/' + url,
				complete: res => {
					console.log(url, res);
				}
			});
		},
		delRouter(index, cur) {
			this.$store.commit('delRouter', index);
			if (cur) {
				uni.navigateTo({
					url: this.sys_homePage
				});
			}
		},
		loginOut() {
			uni.showModal({
				title: '',
				content: '确定要退出登录吗？',
				success: res => {
					if (res.confirm) {
						this.$store.commit('setLogin', false);
						uni.reLaunch({
							url: '/pages/login/login'
						});
						this.$store.commit('setRouter', []);
					}
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="scss">
.rgbui-head {
	display: flex;
	justify-content: space-between;
	height: 60px;
	.mobile-head {
		display: none;
	}
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
		.item {
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
}
.tab-box {
	overflow: hidden;
	padding-right: 100px;
	.tab-ul {
		display: flex;
		width: 100%;
		height: 60px;
		.tab-li {
			position: relative;
			width: 130px;
			z-index: 0;
			.tab-li-box {
				position: absolute;
				width: 120px;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 40px;
				margin: 10px;
				border-radius: 5px;
				border: 1px solid var(--border-color);
				background-color: var(--box-bg);
				cursor: pointer;
				.tab-li-icon {
					position: absolute;
					right: 0px;
					top: 0px;
					bottom: 0px;
					display: flex;
					align-items: center;
					opacity: 0;
					cursor: pointer;
					visibility: hidden;
					z-index: 1;
					padding: 0 5px 0 50px;
					background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
					border-radius: 0px 5px 5px 0;
					text {
						position: relative;
						z-index: 1;
						padding: 5px;
						border-radius: 5px;
						background-color: var(--page-bg);
						color: var(--text-a);
						// text-shadow: 0px 0px 5px rgba(0,0,0,.5);
						// right: -5px;
					}
				}
				&:hover {
					.tab-li-icon {
						opacity: 1;
						visibility: visible;
						text:hover {
							position: relative;
							z-index: 1;
							background-color: var(--box-bg);
							padding: 5px;
							border-radius: 5px;
							// right: -5px;
						}
					}
				}
				&.cur {
					border: 0px solid var(--border-color);
					background-color: var(--text-a);
					color: var(--box-bg);

					&:hover {
						// border: 1px solid var(--main-e);
					}
				}
			}
			&:hover {
				z-index: 1;
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.rgbui-head {
		.pc-head,
		.tab-box {
			display: none;
		}

		.mobile-head {
			display: flex;
			width: 60px;
		}
	}
}
</style>
