<template>
	<view class="cu-tag" :class="[bgClass, { badge: badge }]" :style="[{ background: bgCss }]">
		<text :class="textClass" :style="[{ color: textCss }]">{{ value }}</text>
	</view>
</template>

<script>
export default {
	name: 'cuTag',
	data() {
		return {};
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		badge: {
			type: Boolean,
			default: false
		},
		bg: {
			type: String,
			default: 'bg-red'
		},
		text: {
			type: String,
			default: 'text-white'
		}
	},
	created() {},
	watch: {},
	methods: {}
};
</script>

<style lang="scss"></style>
