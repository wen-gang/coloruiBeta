<template>
	<view class="ui-form-group">
		<div class="ui-form-title">{{title}}</div>
		<view class="ui-form-input">
			<input
			 :id="_uid"
			 :type="type"
			 :placeholder="placeholder"
			 :value="curValue" 
			 @focus="_focus"
			 @blur="_blur"
			 @input="_input" :class="[{ focus: focus },size]"/>
			 <text class="icon cui-round-close"  v-if="clear && curValue" @tap="_clear"></text>
			 
		</view>
		<view class="tips-text"><text v-if="tips">{{ placeholder }}</text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			focus: false,
			curValue: this.value,
			tips:false
		};
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		title: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
		clear: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: false
		},
	},
	created() {
	},
	watch: {
		value(val) {
			this.setCurValue(val);
		}
	},
	methods: {
		_focus() {
			this.focus = true;
		},
		_blur() {
			this.focus = false;
		},
		_input(e) {
			let value = e.detail.value;
			this.$emit('input', value);
			this.setCurValue(value);
		},
		setCurValue(value) {
			if (value === this.curValue) return;
			this.curValue = value;
		}
	}
};
</script>

<style lang="scss">
	.ui-form-group {
		display: flex;
		width: 100%; 
		.ui-form-title{
			width: 3em;
		}
		.ui-form-input {
			position: relative;
			display: inline-block;
			width: 100%;
			border-radius: inherit;
			display: flex;
			input {
				padding: 0 20rpx;
				flex: 1;
				font-size: 28rpx;
				height: 72rpx;
				border-radius: inherit;
		
				&:after {
					position: absolute;
					content: '';
					width: 100%;
					height: 100%;
					box-shadow: 0 0 0 1px var(--border-color);
					top: 0;
					left: 0;
					border-radius: inherit;
					pointer-events: none;
				}
				&:hover::after,
				&.focus::after {
					box-shadow: 0 0 0 1px var(--primary);
				}
				&::before {
					position: absolute;
					content: '';
					width: calc(100% + 10px);
					height: calc(100% + 10px);
					box-shadow: 0 0 0 3px var(--primary);
					top: 0;
					left: -5px;
					right: 0;
					bottom: 0;
					margin: auto;
					border-radius: inherit;
					pointer-events: none;
					opacity: 0;
					transition: $transition-base-out;
				}
				&.focus::before {
					width: calc(100% + 0px);
					height: calc(100% + 0px);
					left: 0px;
					opacity: 0.3;
					transition: $transition-base;
				}
		
				&.sm {
					font-size: 24rpx;
					height: 60rpx;
				}
				&.lg {
					font-size: 32rpx;
					height: 84rpx;
				}
			}
			.icon {
				width: 72rpx;
				height: 72rpx;
				line-height: 72rpx;
				font-size: 28rpx;
				text-align: center;
				color: #808695;
				position: absolute;
				right: 0;
				top: 0;
				z-index: 3;
			}
			.tips-text {
				height: 1em;
				margin-top: 0.3em;
			}
		}
		
	}

</style>
