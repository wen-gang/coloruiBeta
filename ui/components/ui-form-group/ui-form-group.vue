<template>
	<view class="ui-form-group" :class="[{ 'first-item': isFirstChild }, { disabled: disabled }, ui]">
		<view class="ui-form-title" :style="[{ width: `${titleWidth + 1.4}em`}]" :class="[{'self-start':titleTop}]">
			<text v-if="icon" class="ui-form-icon" :class="[icon,{'pl-2':title.length==0}]"></text>
			{{ title }}
			<text class="ui-form-required" v-if="required">*</text>
		</view>
		<view class="ui-form-content" :class="[contentui]"><slot></slot></view>
		<view class="ui-form-action" v-if="slots.action"><slot name="action"></slot></view>
	</view>
</template>

<script>
export default {
	name: 'UiFormGroup',
	data() {
		return {
			slots: {}
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		contentui: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		titleTop: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		}
	},
	computed: {
		isFirstChild() {
			this.Form = this._getParent(name = 'UiForm');
			// 判断是否存在 ui-Form 组件
			if (this.Form) {
				if (!this.Form.firstChildAppend) {
					this.Form.firstChildAppend = true;
					return true;
				}
			}
			return false;
		},
		titleWidth() {
			if (this.Form) {
				this.Form = this._getParent(name = 'UiForm');
				return this.Form.titleWidth;
			} else {
				return this.title.length + (this.icon?1.2:0)
			}			
		}
	},
	methods: { 
	}
};
</script>

<style lang="scss">
.ui-form-group {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative; 
	padding: .5em 30rpx;
	&.disabled {
		.ui-form-title,
		.ui-form-content,
		.ui-form-action {
			pointer-events: none;
		}
	}
	.ui-form-title {
		text-align: justify;
		font-size: 1.1em;
		position: relative;
		padding-left: 0;
		display: flex;
		align-items: center;
		&.self-start{
			min-height: 2.6572em;
			align-self: flex-start;
		}
		.ui-form-icon {
			margin: 0 0.28572em 0 0;
			transform: scale(1.2);
		}
		.ui-form-required {
			position: relative;
			color: $red;
			font-size: 20px;
			top: -0.4em;
			right: 0em;
		}
	}
	.ui-form-content {
		flex: 1;
		// background-color: var(--ui-BG-1);
		// padding: 0 1em;
		border-radius: $radius;
		display: flex;
		align-items: center;
		min-height: 3em;
	}
	.ui-form-action {
		margin-left: 1em;
	}
	&::after {
		content: ' ';
		width: 200%;
		left: 0rpx;
		position: absolute;
		top: 0;
		box-sizing: border-box;
		height: 200%;
		border-top: 1px solid var(--ui-Border);
		border-radius: inherit;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
	}
	&.first-item::after {
		display: none;
	}
}
</style>
