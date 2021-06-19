<template>
	<view>
		<view class="ui-title" :class="[align, tpl, bg, { line: inLine }, depth > 0 ? 'heading-' + depth : '']">
			<view class="anchor" :id="title"></view>
			<view class="action" :class="[hasLine ? 'hasLine' : '', hasDot ? 'hasDot' : '']">
				<block v-if="isIcon">
					<view class="ui-TC-Main uicon-titles" v-if="depth < 3"></view>
					<view class="ui-TC-Main uicon-title" v-if="depth == 3"></view>
					<view class="ui-TC-Main uicon-title icon-sm" v-if="depth > 3"></view>
				</block>
				<slot name="icon"></slot>
				<view class="action-title" :class="[text]" v-if="title != ''" >
					{{ title }}
					<slot></slot>
					<view class="action-line" :class="[line]" v-if="hasLine">
						<view></view>
						<view></view>
					</view>
					<view class="action-dot" :class="[dot]" v-if="hasDot">
						<view></view>
						<view></view>
					</view>
				</view>
				<view class="action-desc" :class="[desc]" v-if="desc != ''">{{ subTitle }}</view>
			</view>
			<view class="more"><slot name="more"></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'uiTitle',
	data() {
		return { 
		};
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		depth: {
			type: [Number, String],
			default: 0
		},
		subTitle: {
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'bg-none'
		},
		text: {
			type: String,
			default: 'text-a'
		},
		desc: {
			type: String,
			default: 'text-c'
		},
		dot: {
			type: String,
			default: 'ui-BG-Main'
		},
		line: {
			type: String,
			default: 'ui-BG-Main'
		},
		isIcon: {
			type: Boolean,
			default: false
		},
		hasDot: {
			type: Boolean,
			default: false
		},
		hasLine: {
			type: Boolean,
			default: false
		},
		align: {
			type: String,
			default: 'left'
		},
		tpl: {
			type: String,
			default: 'default'
		},
		inLine: {
			type: Boolean,
			default: false
		}
	},
	watch: { 
	},
	created() {},
	mounted() { 
	},
	methods: {}
};
</script>

<style lang="scss">
	ui-title {
		display: block;
	}
	
	.ui-title {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx;
		.anchor {
			pointer-events: none;
			position: absolute;
			top: -60px;
		}
		&.line {
			padding: 0 30rpx;
		}
		[class*='uicon-'] {
			margin-left: -10rpx;
			margin-right: 10rpx;
		}
		.action {
			display: flex;
			align-items: center;
			&.hasLine {
				position: relative;
				z-index: 2;
				.action-line {
					position: absolute;
					width: 68%;
					height: 0.5em;
					bottom: 0;
					z-index: -1;
					opacity: 0.7;
				}
			}
			&.hasDot {
				position: relative;
				margin-left: 10rpx;
				z-index: 2;
				.action-dot {
					position: absolute;
					width: 1.2em;
					height: 1.2em;
					border-radius: 50%;
					top: -0.3em;
					z-index: -1;
					margin-left: -0.5em;
					opacity: 0.7;
				}
			}
			.action-title {
				font-weight: bold;
			}
			.action-desc {
				margin-left: 10rpx;
				text-transform: Capitalize;
			}
		}
		&.center {
			justify-content: center;
			letter-spacing: 5rpx;
			.hasLine {
				.action-line {
					left: 0;
					right: 0;
					margin: auto;
				}
			}
		}
		&.stack {
			.action {
				position: relative;
				&.hasLine {
					.action-line {
						width: 100%;
					}
				}
				.action-title {
					position: relative;
					z-index: 2;
					top: 10rpx;
				}
				.action-desc {
					position: absolute;
					z-index: 1;
					left: 30rpx;
					margin: 0;
					font-size: 60rpx;
					font-weight: bold;
					opacity: 0.3;
					top: -10rpx;
				}
			}
			&.center {
				position: relative;
				z-index: 1;
				.action {
					position: initial;
				}
				.action-desc {
					top: 10rpx;
					left: 0;
					right: 0;
					margin: auto;
					text-align: center;
				}
			}
		}
		&.center-column {
			justify-content: center;
			letter-spacing: 5rpx;
			.action {
				flex-direction: column;
				.action-desc {
					font-size: 24rpx;
					margin: 0;
				}
				&.hasDot {
					position: relative;
					.action-dot {
						height: 0px;
						width: 100%;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						margin: auto;
						view {
							height: 1px;
							background: inherit;
							width: 100rpx;
							position: absolute;
							top: 0;
							bottom: 0;
							margin: auto;
							&:first-child {
								left: -500rpx;
								right: 0;
								transform: rotate(180deg);
							}
							&:last-child {
								left: 0;
								right: -500rpx;
							}
							&::after {
								content: '';
								width: 4px;
								height: 12px;
								border-radius: 20px;
								background: inherit;
								display: block;
								position: absolute;
								top: -5px;
								left: -10px;
								transform: rotate(30deg);
							}
							&::before {
								content: '';
								width: 4px;
								height: 20px;
								border-radius: 20px;
								background: inherit;
								display: block;
								position: absolute;
								top: -10px;
								left: -20px;
								transform: rotate(30deg);
							}
						}
					}
				}
				&.hasLine {
					position: relative;
					.action-line {
						height: 0px;
						width: 100%;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						margin: auto;
						view {
							height: 1px;
							background: inherit;
							width: 160rpx;
							position: absolute;
							top: 0;
							bottom: 0;
							margin: auto;
							&:first-child {
								left: -480rpx;
								right: 0;
								transform: rotate(180deg);
							}
							&:last-child {
								left: 0;
								right: -480rpx;
							}
							&::after {
								content: '';
								width: 100%;
								height: 100%;
								background: linear-gradient(to left, var(--ui-BG), rgba(255, 255, 255, 0));
								display: block;
								position: absolute;
							}
						}
					}
				}
			}
		}
	}
	[class*='heading-'].ui-title {
		padding: 0;
	}
	.heading-1 {
		margin: 60rpx 0 30rpx;
		font-size: #{map-get($fontsize, xxl)}rpx !important;
	}
	
	.heading-2 {
		margin: 40rpx 0 20rpx;
		font-size: #{map-get($fontsize, xl)}rpx !important;
	}
	
	.heading-3 {
		margin: 30rpx 0 10rpx;
		font-size: #{map-get($fontsize, lg)}rpx !important;
	}
	
	.heading-4 {
		margin: 20rpx 0 10rpx;
		font-size: #{map-get($fontsize, df)}rpx !important;
	}
	
	.heading-5 {
		margin: 10rpx 0 10rpx;
		font-size: #{map-get($fontsize, sm)}rpx !important;
	}
	
	.heading-6 {
		font-size: #{map-get($fontsize, xs)}rpx !important;
	}
	
</style>
