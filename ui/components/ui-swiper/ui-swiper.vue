<template>
	<view>
		<view class="ui-swiper" :class="[mode,bg,ui]">
			<swiper :circular="circular" :autoplay="true" :interval="interval" duration="500" :style="{height: height}"
				@change="swiperChange">
				<swiper-item v-for="(item, index) in info" :key="index" :class="{ cur: cur == index }" @tap="_to(item.url,item.urlType)">
					<view class="ui-swiper-main radius">
						<image :src="item.img" :style="{height: imgHeight}" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="ui-swiper-dot" :class="dotStyle" v-if="dotStyle != 'tag'">
				<view v-for="(item, index) in info" :key="index" :class="[cur == index ? 'cur' : '', dotCur]"></view>
			</view>
			<view class="ui-swiper-dot" :class="dotStyle" v-if="dotStyle == 'tag'">
				<view class="ui-tag radius" :class="[dotCur]">
					<view>{{ cur + 1 }} / {{ info.length }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UiSwiper',
		data() {
			return {
				cur: 0,
			}
		},
		props: {
			circular: {
				type: Boolean,
				default: true
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 5000
			},
			duration: {
				type: Number,
				default: 500
			},
			info: {
				type: Array,
				default () {
					return [];
				}
			},
			ui: {
				type: String,
				default: ''
			},
			mode: {
				//default
				type: String,
				default: 'default'
			},
			dotStyle: {
				//default long tag
				type: String,
				default: 'default'
			},
			dotCur: {
				type: String,
				default: 'bg-black'
			},
			bg: {
				type: String,
				default: 'bg-none'
			},
			height: {
				type: String,
				default: '40vw'
			},
			imgHeight: {
				type: String,
				default: '40vw'
			},
		},
		methods: {
			swiperChange(e) {
				this.cur = e.detail.current;
			},
		}
	};
</script>

<style lang="scss">
	/deep/ .ui-swiper {
		position: relative;

		.ui-swiper-main {
			width: 100%;
			height: 100%;
		}

		.ui-swiper-main image {
			width: 100%;
			height: 100%;
		}

		.ui-swiper-dot {
			position: absolute;
			width: 100%;
			bottom: 20rpx;
			height: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			&.default view {
				display: inline-flex;
				border-radius: 50rpx;
				width: 6px;
				height: 6px;
				border: 2px solid transparent;
				margin: 0 10rpx;
				opacity: 0.3;
				position: relative;
				justify-content: center;
				align-items: center;

				&.cur {
					width: 8px;
					height: 8px;
					opacity: 1;
					border: 0px solid transparent;
				}

				&.cur::after {
					content: '';
					border-radius: 50rpx;
					width: 4px;
					height: 4px;
					background-color: #fff;
				}
			}

			&.long view {
				display: inline-block;
				border-radius: 100rpx;
				width: 6px;
				height: 6px;
				margin: 0 10rpx;
				opacity: 0.3;
				position: relative;

				&.cur {
					width: 24rpx;
					opacity: 1;
				}

				&.cur::after {}
			}

			&.line {
				bottom: 20rpx;

				view {
					display: inline-block;
					width: 30px;
					height: 3px;
					opacity: 0.3;
					position: relative;

					&.cur {
						opacity: 1;
					}
				}
			}

			&.tag {
				justify-content: flex-end;
				position: absolute;
				bottom: 20rpx;
				right: 20rpx;
			}
		}

		&.card {
			swiper-item {
				width: 610rpx !important;
				left: 70rpx;
				box-sizing: border-box;
				padding: 20rpx 0rpx 60rpx;
				overflow: initial;
			}

			swiper-item .ui-swiper-main {
				width: 100%;
				display: block;
				height: 100%;
				border-radius: 10rpx;
				transform: scale(0.9);
				transition: all 0.2s ease-in 0s;
				position: relative;
				background-size: cover;

				image {
					height: 100%;
					border-radius: inherit;
				}
			}

			swiper-item .ui-swiper-main::before {
				content: '';
				display: block;
				background: inherit;
				filter: blur(5px);
				position: absolute;
				width: 100%;
				height: 100%;
				top: 10rpx;
				left: 10rpx;
				z-index: -1;
				opacity: 0.3;
				transform-origin: 0 0;
				border-radius: inherit;
				transform: scale(1, 1);
			}

			swiper-item.cur .ui-swiper-main {
				transform: scale(1);
				transition: all 0.2s ease-in 0s;
			}

			.ui-swiper-dot.tag {
				position: absolute;
				bottom: 85rpx;
				right: 75rpx;
			}
		}

		&.hotelCard {
			swiper-item {
				width: 650rpx !important;
				left: 30rpx;
				box-sizing: border-box;
				padding: 0rpx 0rpx 50rpx;
				overflow: initial;
			}

			swiper-item .ui-swiper-main {
				width: 100%;
				display: block;
				height: 100%;
				border-radius: 10rpx;
				transform: scale(0.9);
				opacity: 0.8;
				transition: all 0.2s ease-in 0s;
				position: relative;
				background-size: cover;

				image {
					width: 100%;
					height: 400rpx;
					border-radius: 10rpx 10rpx 0 0;
				}
			}

			swiper-item .ui-swiper-main::before {
				content: '';
				display: block;
				background: inherit;
				filter: blur(5px);
				position: absolute;
				width: 100%;
				height: 100%;
				top: 10rpx;
				left: 10rpx;
				z-index: -1;
				opacity: 0.3;
				transform-origin: 0 0;
				border-radius: inherit;
				transform: scale(1, 1);
			}

			swiper-item.cur .ui-swiper-main {
				transform: scale(1);
				transition: all 0.2s ease-in 0s;
				opacity: 1;
			}

			.ui-swiper-dot {
				display: none;
			}
		}

		&.hotelDetail {
			swiper-item {
				width: 690rpx !important;
				left: 30rpx;
				box-sizing: border-box;
				padding: 20rpx 0rpx;
				overflow: initial;
			}

			swiper-item .ui-swiper-main {
				width: 100%;
				display: block;
				height: 100%;
				transform: scale(0.96);
				transition: all 0.2s ease-in 0s;
				position: relative;
				background-size: cover;

				image {
					height: 100%;
				}
			}

			swiper-item.cur .ui-swiper-main {
				transform: scale(0.96);
				transition: all 0.2s ease-in 0s;
			}
		}
	}
</style>
