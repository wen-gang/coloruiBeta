<template>
	<view class="ui-switch" :class="[{disabled:disabled},ui]">
		<view class="ui-switch-wrapper" @tap="clickSwitch">
			<view class="ui-switch-input" :class="[{ 'ui-switch-input-checked': tempChecked }, tempChecked ? bg : '', text, size]"></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UiSwitch',
	data() {
		return {
			tempChecked: false
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'ui-BG-Main'
		},
		text: {
			type: String,
			default: ''
		},
		checked: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'sm'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	created() {
		this.tempChecked = this.checked;
	},
	watch: {
		checked(val) {
			this.tempChecked = val;
		}
	},
	mounted() {},
	methods: {
		clickSwitch() {
			this.tempChecked = !this.tempChecked;
			this.$emit('change', this.tempChecked);
		}
	}
};
</script>

<style lang="scss">
.ui-switch {
	display: inline-block;
	cursor: pointer;
	.ui-switch-wrapper {
		display: inline-flex;
		align-items: center;
		vertical-align: middle;
	}
	.ui-switch-input {
		appearance: none;
		position: relative;
		width: 47px;
		height: 26px;
		outline: 0;
		border-radius: 16px;
		box-sizing: border-box;
		background-color: rgba(119,119,119,.3);
		transition: background-color 0.1s, border 0.1s;
		&:after {
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 200px;
			transition: transform 0.3s;
			width: 20px;
			height: 20px;
			margin: 3px;
			background-color: #fff;
		}
		&.ui-switch-input-checked {
			&:after {
				transform: translateX(21px);
			}
		}
	}
	&.disabled {
		cursor: not-allowed;
		.ui-switch-input {
			opacity: 0.7;
		}
	}
}
</style>
