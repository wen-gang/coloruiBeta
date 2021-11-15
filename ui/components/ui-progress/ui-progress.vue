<template>
	<view class="ui-progress" :class="[{ 'active': active },{ 'striped': striped },{ 'lg': lg },{ 'sm': sm },ui]">
		<block v-if="progressArray.length > 0">
			<view class="ui-progress-bar" v-for="(item, index) in progressArray" :key="index" :class="bgArray[index]"
				:style="[{ width: item + '%' }]">
				<text v-if="item > 5 && !sm">{{ item }}%</text>
			</view>
		</block>
		<view class="ui-progress-bar" :class="bg" :style="[{ width: progress + '%' }]" v-else>
			<text v-if="progress > 5 && !sm">{{ progress }}%</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UiProgress',
		data() {
			return { 
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
			progress: {
				type: [String, Number],
				default: 0
			},
			progressArray: {
				type: Array,
				default () {
					return [];
				}
			},
			bg: {
				type: [String, Array],
				default: 'ui-BG-Main'
			},
			bgArray: {
				type: Array,
				default () {
					return ['ui-BG-Main', 'ui-BG-Main-1', 'ui-BG-Main-2', 'ui-BG-Main-3'];
				}
			},
			active: {
				type: Boolean,
				default: false
			},
			striped: {
				type: Boolean,
				default: false
			},

			radius: {
				type: Boolean,
				default: true
			},

			round: {
				type: Boolean,
				default: false
			},

			border: {
				type: Boolean,
				default: false
			},
			lg: {
				type: Boolean,
				default: false
			},
			sm: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: [String, Boolean],
				default: ''
			}
		},
		methods: {}
	};
</script>

<style lang="scss">
	.ui-progress {
		height: 1em;
		margin: 0.14286em 0;
		background-color: var(--ui-BG-4);
		display: inline-flex;
		align-items: center;
		width: 100%;
		font-size: 32rpx;

		&.lg {
			font-size: 40rpx;
		}

		&.sm {
			font-size: 24rpx;
			height: 0.7em;
			margin: 0.5em 0;
		}

		.ui-progress-bar {
			width: 0;
			height: 100%;
			align-items: center;
			display: flex;
			justify-items: flex-end;
			justify-content: space-around;
			font-size: 20rpx;
			color: var(--white);
			transition: width 0.6s ease;
			position: relative;
			z-index: 1;

			&:first-child {
				border-top-left-radius: inherit;
				border-bottom-left-radius: inherit;
			}

			&:last-child {
				border-top-right-radius: inherit;
				border-bottom-right-radius: inherit;
			}
		}

		.ui-progress-text {
			align-items: center;
			display: flex;
			font-size: 0.75em;
			position: relative;
			z-index: 2;
			text-indent: 10rpx;
			flex: 1;
			justify-content: center;
		}

		&.text-progress {
			padding-right: 60rpx;
		}

		&.striped .ui-progress-bar {
			background-image: linear-gradient(45deg,
					rgba(255, 255, 255, 0.15) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, 0.15) 50%,
					rgba(255, 255, 255, 0.15) 75%,
					transparent 75%,
					transparent);
			background-size: 72rpx 72rpx;
		}

		&.active view {
			animation: progress-stripes 2s linear infinite;
		}
	}

	@keyframes progress-stripes {
		from {
			background-position: 72rpx 0;
		}

		to {
			background-position: 0 0;
		}
	}
</style>
