<template>
	<view class="inline-block">
		<view class="ui-color-picker border" :class="[inputValue, shape, inputValue == 'bg-white' ? 'line' : '', (cur + ' cur')]" @tap="Modal = 'ColorPicker'"></view>
		<ui-modal title="拾色器" name="ColorPicker" :cur.sync="Modal">
			<view class="ui-grid ui-cols-8 padding bg-white line-top">
				<view class="text-center padding-tb-xs" v-for="(item, index) in color" :key="index" @tap="chooseColor(item)">
					<view class="ui-color-picker" :class="[item, shape, inputValue == item ? (cur + ' cur') : '']"></view>
				</view>
			</view>
			<view class="ui-grid ui-cols-5 padding-sm bg-white line-top">
				<view class="text-center padding-tb-xs" v-for="(item, index) in basic" :key="index" @tap="chooseColor(item)">
					<view class="ui-color-picker" :class="[item, shape, inputValue == item ? (cur + ' cur') : '', item == 'bg-white' ? 'line' : '']"></view>
				</view>
			</view>
		</ui-modal>
	</view>
</template>

<script>
export default {
	name: 'UiColorPicker',
	data() {
		return {
			inputValue: '',
			Modal: '',
			color: [
				'red',
				'orange',
				'yellow',
				'olive',
				'green',
				'cyan',
				'blue',
				'purple',
				'mauve',
				'pink',
				'brown',
				'grey',
			],
			basic: ['bg-white', 'bg-gray', 'bg-darkGray', 'bg-black', 'bg-dark']
		};
	},
	props: {
		value: {
			type: String,
			default: 'bg-white'
		},
		shape: {
			type: String,
			default: 'radius'
		},
		cur: {
			type: String,
			default: ''
		}
	},
	created() {
		this.inputValue = this.value;
	},
	watch: {
		value(val) {
			this.inputValue = val;
		},
		inputValue(val) {
			this.$emit('update:value', val);
		}
	},
	methods: {
		chooseColor(name) {
			this.inputValue = name;
			this.Modal = '';
		}
	}
};
</script>

<style lang="scss">
	.ui-color-picker{
		width: 1em;
		height: 1em;
	}
</style>
