<template>
	<view class="ui-steps" :class="[{ 'steps-arrow': arrow }, { 'steps-number': number }, { 'steps-column': column },ui]">
		<view class="ui-step" :class="index > cur ? '' : curStyle" v-for="(item, index) in info" :key="index">
			<view class="ui-steps-num" :data-index="index + 1" v-if="number" :class="[{ 'ui-steps-err': index + 1 == err }]"></view>
			<view class="ui-steps-icon" :class="index > cur ? '_icon-title' : item.icon" v-else></view>
			<view class="ui-steps-text">
				<view class="ui-steps-title">
					{{ item.title }}
				</view>
				<view class="ui-steps-desc" v-if="item.desc&&column">
					{{ item.desc }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UiSteps',
	data() {
		return {};
	},
	props: {
		direction: {
			type: String,
			default: 'row'
		},
		ui: {
			type: String,
			default: ''
		},
		arrow: {
			type: Boolean,
			default: false
		},
		number: {
			type: Boolean,
			default: false
		},
		column: {
			type: Boolean,
			default: false
		},
		cur: {
			type: Number,
			default: 0
		},
		curStyle: {
			type: String,
			default: 'ui-TC-Main'
		},
		err: {
			type: Number,
			default: 0
		},
		info: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {}
};
</script>

<style lang="scss">
	/* ==================
	          步骤条
	 ==================== */
	
	.ui-steps {
		display: flex;
		width: 100%;
		.ui-step {
			flex: 1;
			text-align: center;
			position: relative;
			min-width: 100rpx;
			.ui-steps-icon,
			.ui-steps-num {
				display: block;
				font-size: 40rpx;
				line-height: 80rpx;
			}
			&:not([class*='text-']) {
				color: #8799a3;
			}
	
			&::before,
			&::after {
				content: '';
				display: block;
				position: absolute;
				height: 0px;
				width: calc(100% - 80rpx);
				border-bottom: 1px solid #ccc;
				left: calc(0px - (100% - 80rpx) / 2);
				top: 40rpx;
				z-index: 0;
			}
			&::after {
				border-bottom: 1px solid currentColor;
				width: 0px;
				transition: all 0.3s ease-in-out 0s;
			}
			&[class*='text-']::after {
				width: calc(100% - 80rpx);
				color: currentColor  !important;
			}
	
			&:first-child::before,
			&:first-child::after {
				display: none;
			}
		}
		&.steps-scroll {
			display: block;
			white-space: nowrap;
			.ui-step {
				display: inline-block;
			}
		}
	
		&.steps-number {
			.ui-step {
				.ui-steps-num {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					line-height: 40rpx;
					margin: 20rpx auto;
					font-size: 24rpx;
					border: 1px solid currentColor;
					position: relative;
					overflow: hidden;
	
					&::before,
					&::after {
						content: attr(data-index);
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						margin: auto;
						transition: all 0.3s ease-in-out 0s;
						transform: translateY(0rpx);
					}
	
					&::after {
						transform: translateY(40rpx);
						color: #ffffff;
						transition: all 0.3s ease-in-out 0s;
					}
				}
	
				&[class*='ui-TC-'] .ui-steps-num {
					background-color: currentColor;
					&::before {
						transform: translateY(-40rpx);
						color: #ffffff;
					}
					&::after {
						content: '\e69f';
						font-family: 'ui';
						color: #ffffff;
						transform: translateY(0rpx);
					}
					&.ui-steps-err::after {
						content: '\e6ed';
					}
				}
			}
		}
	
		&.steps-column {
			flex-direction: column;
			.ui-step {
				display: flex;
				flex: initial;
				height: 60px;
				.ui-steps-text{
					padding-top: 10px;
					text-align: left;
					padding-left: 10px;
					.ui-steps-title{
						font-size: 16px;
					}
					.ui-steps-desc{
						font-size: 12px;
						opacity: .7;
					}
				}
				.ui-steps-num{
					margin: 20rpx 0;
				}
				&::before,
				&::after {
					width: 0px;
					height: 30px;
					border-left: 1px solid #ccc;
					top: -25px;
					left: 10px;
					z-index: 0;
				}
				&::after {
					border-left: 1px solid currentColor;
					height: 0px;
					transition: all 0.3s ease-in-out 0s;
				}
				&[class*='text-']::after {
					height: 30px;
					color: currentColor  !important;
				}
			}
		}
	
		&.steps-arrow {
			.ui-step {
				&::before,
				&::after {
					width: calc(100% - 80rpx);
					content: '\e605';
					font-family: 'ui';
					height: 30rpx;
					border-bottom-width: 0px;
					line-height: 30rpx;
					top: 0;
					bottom: 0;
					margin: auto;
					color: #ccc;
					font-size: 40rpx;
				}
			}
		}
	}
	
</style>
