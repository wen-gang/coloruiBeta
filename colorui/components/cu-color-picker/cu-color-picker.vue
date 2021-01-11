<template>
	<view class="inline-block">
		<view class="cu-color-picker" :class="[inputValue, shape, inputValue == 'bg-white' ? 'line' : '', (cur + ' cur')]" @tap="Modal = 'ColorPicker'"></view>
		<cu-modal title="拾色器" name="ColorPicker" :cur.sync="Modal">
			<view class="grid col-8 padding bg-white line-top">
				<view class="text-center padding-tb-xs" v-for="(item, index) in color" :key="index" @tap="chooseColor(item)">
					<view class="cu-color-picker" :class="[item, shape, inputValue == item ? (cur + ' cur') : '']"></view>
				</view>
			</view>
			<view class="grid col-5 padding-sm bg-white line-top">
				<view class="text-center padding-tb-xs" v-for="(item, index) in basic" :key="index" @tap="chooseColor(item)">
					<view class="cu-color-picker" :class="[item, shape, inputValue == item ? (cur + ' cur') : '', item == 'bg-white' ? 'line' : '']"></view>
				</view>
			</view>
		</cu-modal>
	</view>
</template>

<script>
export default {
	name: 'cuColorPicker',
	data() {
		return {
			inputValue: '',
			Modal: '',
			color: [
				'bg-red',
				'bg-orange',
				'bg-yellow',
				'bg-olive',
				'bg-green',
				'bg-cyan',
				'bg-blue',
				'bg-purple',
				'bg-mauve',
				'bg-pink',
				'bg-brown',
				'bg-grey',
				'bg-red-light',
				'bg-orange-light',
				'bg-yellow-light',
				'bg-olive-light',
				'bg-green-light',
				'bg-cyan-light',
				'bg-blue-light',
				'bg-purple-light',
				'bg-mauve-light',
				'bg-pink-light',
				'bg-brown-light',
				'bg-grey-light',
				'bg-red-gradient',
				'bg-orange-gradient',
				'bg-yellow-gradient',
				'bg-olive-gradient',
				'bg-green-gradient',
				'bg-cyan-gradient',
				'bg-blue-gradient',
				'bg-purple-gradient',
				'bg-mauve-gradient',
				'bg-pink-gradient',
				'bg-brown-gradient',
				'bg-grey-gradient',
				'bg-red-gradient-light',
				'bg-orange-gradient-light',
				'bg-yellow-gradient-light',
				'bg-olive-gradient-light',
				'bg-green-gradient-light',
				'bg-cyan-gradient-light',
				'bg-blue-gradient-light',
				'bg-purple-gradient-light',
				'bg-mauve-gradient-light',
				'bg-pink-gradient-light',
				'bg-brown-gradient-light',
				'bg-grey-gradient-light'
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

<style></style>
