<template>
	<view class="cu-from-group">
		<view class="cu-from-input">
			<input
			 :id="id"
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
			id: '',
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
		}
	},
	created() {
		this.id = this.$util.getUuid();
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

<style></style>
