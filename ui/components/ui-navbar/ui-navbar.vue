<template>
	<ui-fixed :noFixed="noFixed" :val="0" :index="1000" noNav :bg="bg" :ui="ui" :opacity="opacity" :opacityVal="opacityVal" :placeholder="placeholder">
		<view class="ui-navbar-box" :class="[{'border-bottom':!opacity&&bg!='bg-none'}]" :style="{ paddingTop: sys_statusBar + 'px', height: sys_navBar + 'px' }">
			<view class="ui-bar" :class="status == '' ? `text-a` : status == 'light' ? 'text-white' : 'text-black'" :style="[{ height: sys_navBar - sys_statusBar + 'px' }]">
				<block v-if="slots.default"><slot></slot></block>
				<block v-else>
					<view class="left">
						<view class="back" @tap="_navback" v-if="back && !capsule">
							<view class="back-icon icon-fw text-xl" :class="[sys_isFirstPage ? '_icon-home-o' : '_icon-back', statusCur, { opacityIcon: opacityBg }]"></view>
							<view>{{ backtext }}</view>
						</view>
						<view class="capsule" :style="[capsuleBack]" v-if="capsule" :class="[{ isFristPage: sys_isFirstPage }, statusCur]">
							<view class="capsule-back" @tap="_navback"><text class="icon-fw text-xl _icon-back"></text></view>
							<view class="capsule-home" @tap="_toHome"><text class="icon-fw text-xl" :class="sys_isFirstPage ? '_icon-home' : '_icon-home-o'"></text></view>
						</view>
						<slot name="left"></slot>
					</view>
					<view class="center" v-if="slots.center"><slot name="center"></slot></view>
					<view class="right" v-if="slots.center && !slots.right"></view>
					<view class="right" v-if="slots.right">
						<view class="right-content"><slot name="right"></slot></view>
						<!-- #ifdef MP -->
						<view :style="[capsuleStyle]"></view>
						<!-- #endif -->
					</view>
				</block>
			</view>
		</view>
	</ui-fixed>
</template>
<script>
export default {
	name: 'UiNavbar',
	data() {
		return {
			statusCur: '',
			capsuleStyle: {},
			capsuleBack: {}, 
			opacityVal: 0
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
		bg: {
			type: String,
			default: 'bg-blur'
		},
		status: {
			//状态栏颜色 可以选择light dark/其他字符串视为黑色
			type: String,
			default: ''
		},
		img: {
			//如果bg == bg-img 则加载对应的图片
			type: String,
			default: ''
		},
		opacity: {
			//是否开启滑动渐变
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
		noFixed: {
			//是否浮动
			type: Boolean,
			default: false
		},
		ui: {
			type: String,
			default: ''
		},
		capsule: {
			//是否开启胶囊返回
			type: Boolean,
			default: false
		},
		stopBack: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: [Boolean],
			default: true
		}
	},
	created() {
		this.sys_layer = 1000;
		// #ifdef MP-ALIPAY
		my.hideAllFavoriteMenu();
		// #endif
		uni.$on('_scrollTop_' + this.$root._uid, e => {
			this.sys_scrollTop = e;
			this.opacityChangeStatus();
		});
		// #ifdef MP
		this.capsuleStyle = {
			width: this.sys_capsule.width + 'px',
			height: this.sys_capsule.height + 'px',
			margin: '0 ' + (this.sys_info.windowWidth - this.sys_capsule.right) + 'px'
		};
		if (this.sys_isFirstPage) {
			this.capsuleBack = {
				width: this.sys_capsule.height + 'px',
				height: this.sys_capsule.height + 'px',
				margin: '0 ' + (this.sys_info.windowWidth - this.sys_capsule.right) + 'px'
			};
		} else {
			this.capsuleBack = this.capsuleStyle;
		}
		// #endif

	},
	mounted() { 
		// //设置 statusBarStyle App端必须在渲染后
		this.changeStatus();
	},
	destroyed() {
		uni.$off('_scrollTop_' + this.$root._uid);
	},
	watch: {
		status: {
			handler(val) {
				if (val!='') {
					this.$store.commit('setStatusStyle',val);
				}
			},
			immediate: true
		},
	},
	methods: {
		_onShow(){
			this.changeStatus();	
		},
		_navback() {
			if (this.stopBack) {
				this.$emit('navback');
			} else {
				this._backPage();
			}
		},
		changeStatus() {
			if (this.status == '') {
				if(this.sys_theme == 'auto'){
					// #ifdef MP
					this.$store.commit('setStatusStyle',uni.getSystemInfoSync().theme == 'light' ? 'dark' : 'light')
					// #endif
				} else {
					this.$store.commit('setStatusStyle',this.sys_theme == 'light' ? 'dark' : 'light');
				}				
			} else {
				this.$store.commit('setStatusStyle',this.status);
			}
		},
		opacityChangeStatus() {
			let e = this.sys_scrollTop;
			this.opacityVal = e > this.sys_navBar ? 1 : e * 0.01;
			// if (e > this.sys_navBar / 2) {
			// 	if ((this.bg == 'ui-BG' || this.bg == 'bg-blur') && this.status == '') {
			// 		this.$store.commit('setStatusStyle',this.sys_theme == 'light' ? 'dark' : 'light');
			// 	} else {
			// 		this.$store.commit('setStatusStyle',this.status == 'light' ? 'dark' : 'light');
			// 	}
			// } 
		},
	}
};
</script>

<style lang="scss">
.ui-navbar-box {
	background-color: transparent;
	width: 100%;
	.ui-bar {
		position: relative;
		z-index: 2;
		white-space: nowrap;
		display: flex;
		position: relative;
		align-items: center;
		justify-content: space-between;
		.left {
			@include flex-bar;
			flex: 1;
			.back {
				@include flex-bar;
				.back-icon {
					@include flex-center;
					width: 56rpx;
					height: 56rpx;
					margin: 0 10rpx;
					&.opacityIcon {
						position: relative;
						border-radius: 50%;
						background-color: rgba(127, 127, 127, 0.5);
						&::after {
							content: '';
							display: block;
							position: absolute;
							height: 200%;
							width: 200%;
							left: 0;
							top: 0;
							border-radius: inherit;
							transform: scale(0.5);
							transform-origin: 0 0;
							opacity: 0.1;
							border: 1px solid currentColor;
							pointer-events: none;
						}
						&::before {
							transform: scale(0.9);
						}
					}
				}
				/* #ifdef  MP-ALIPAY */
				._icon-back {
					opacity: 0;
				}
				/* #endif */
			}
			.capsule {
				@include flex-bar;
				border-radius: 100px;
				position: relative;
				&.dark {
					background-color: rgba(255, 255, 255, 0.5);
				}
				&.light {
					background-color: rgba(0, 0, 0, 0.15);
				}
				&::after {
					content: '';
					display: block;
					position: absolute;
					height: 60%;
					width: 1px;
					left: 50%;
					top: 20%;
					background-color: currentColor;
					opacity: 0.1;
					pointer-events: none;
				}
				&::before {
					content: '';
					display: block;
					position: absolute;
					height: 200%;
					width: 200%;
					left: 0;
					top: 0;
					border-radius: inherit;
					transform: scale(0.5);
					transform-origin: 0 0;
					opacity: 0.1;
					border: 1px solid currentColor;
					pointer-events: none;
				}
				.capsule-back,
				.capsule-home {
					@include flex-center;
					flex: 1;
				}
				&.isFristPage {
					.capsule-back,
					&::after {
						display: none;
					}
				}
			}
		}
		.right {
			@include flex-bar;
			flex: 1;
			.right-content {
				@include flex;
				flex-direction: row-reverse;
				flex: 1;
			}
		}
		.center {
			@include flex-center;
			text-overflow: ellipsis;
			text-align: center;
			flex: 2;
			.image {
				display: block;
				height: 36px;
				max-width: calc(100vw - 200px);
			}
		}
	}
	.ui-bar-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 1;
		pointer-events: none;
	}
}
</style>
