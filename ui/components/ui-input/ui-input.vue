<template>
	<view class="ui-form-input" :class="[{ disabled: isDisabled }]">
		<block v-if="type == 'textarea'">
			<textarea
				class="ui-textarea-wrapper"
				:disabled="isDisabled"
				:id="_uid"
				:name="name"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:value="curValue"
				@focus="_focus"
				@blur="_blur"
				@input="_input"
				:class="[{ focus: focus }, ui,{'show-tag':showtag}]"
				type="textarea"
				:auto-height="autoheight"
				:cursor-spacing="100"
			></textarea>
			<view class="ui-tag ui-textarea-tag" v-if="showtag">{{curValue.length}} / {{maxlength}}</view>
		</block>
		<block v-else>
			<input
				class="ui-input-wrapper"
				:disabled="isDisabled"
				:id="_uid"
				type="text"
				:name="name"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:value="curValue"
				@focus="_focus"
				@blur="_blur"
				@input="_input"
				:class="[{ focus: focus }, ui]"
				v-if="isVisible"
				:cursor-spacing="18"
			/>
			<input
				class="ui-input-wrapper"
				:disabled="isDisabled"
				:id="_uid"
				:type="type"
				:name="name"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:value="curValue"
				@focus="_focus"
				@blur="_blur"
				@input="_input"
				:class="[{ focus: focus }, ui]"
				:cursor-spacing="18"
				v-else
			/>
			<text class="ui-input-icon _icon-round-close" v-if="clear && curValue" @click="_clear"></text>
			<view class="ui-input-icon ui-input-visible" v-if="type == 'password'" @click="_toggleVisible">
				<text class="cicon-eye" v-if="isVisible"></text>
				<text class="cicon-eye-off" v-else></text>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	name: 'UiInput',
	data() {
		return {
			isVisible: false,
			focus: false,
			curValue: this.value,
			tips: false
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
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
		name: {
			type: String,
			default: ''
		},
		ui: {
			type: String,
			default: ''
		},
		clear: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		showtag: {
			type: Boolean,
			default: false
		},
		autoheight: {
			type: Boolean,
			default: false
		},
		autofocus: {
			type: Boolean,
			default: false
		}
	},
	created() {},
	watch: {
		value(val) {
			this._setCurValue(val);
		}
	},

	computed: {
		isDisabled() {
			this.Group = this._getGroup();
			// 判断是否存在 ui-Group 组件
			if (this.Group) {
				return this.Group.disabled;
			}
			return false;
		}
	},
	methods: {
		/**
		 * 获取父元素实例
		 */
		_getGroup(name = 'UiFormGroup') {
			let parent = this.$parent;
			let parentName = parent.$options.name;
			while (parentName !== name) {
				parent = parent.$parent;
				if (!parent) return false;
				parentName = parent.$options.name;
			}
			return parent;
		},
		_focus() {
			this.focus = true;
		},
		_blur() {
			this.focus = false;
		},
		_input(e) {
			let value = e.detail.value;
			this.$emit('input', value);
			this._setCurValue(value);
		},
		_setCurValue(value) {
			if (value === this.curValue) return;
			this.curValue = value;
		},
		_toggleVisible() {
			console.log('_toggleVisible');
			this.isVisible = !this.isVisible; 
		}
	}
};
</script>

<style lang="scss">
.ui-form-input {
	position: relative;
	display: inline-flex;
	width: 100%;
	border-radius: inherit;
	align-items: center;
	.ui-input-wrapper,.ui-textarea-wrapper {
		border-radius: inherit;
		color: var(--ui-TC-1);
		padding: 0.8em 0;
		font-size: 28rpx;
		width: 100%;
		/* #ifdef H5 */
		background-color: transparent;
		border: none;
		/* #endif */
		&:focus-visible {
			outline: none;
			outline-style: none;
		}
	}
	.ui-input-wrapper {
		display: flex;
		align-items: center;
	}
	.ui-textarea-wrapper {
		min-height: 3.2em;
		line-height: 1.4em;
	}
	.ui-textarea-wrapper.show-tag {
		min-height: 5.6em;
		padding-bottom: 2.4em;
	}
	.ui-textarea-tag{
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.ui-input-visible {
		font-size: 16px;
		text-align: center;
	}
	.ui-input-icon {
		width: 2em;
		height: 2.6em;
		line-height: 2.6em;
		font-size: 28rpx;
		text-align: center;  
		right: 0;
		top: 0;
		z-index: 3;
		padding-left: .6em;
	}
	.tips-text {
		height: 1em;
		margin-top: 0.3em;
	}
}
</style>
