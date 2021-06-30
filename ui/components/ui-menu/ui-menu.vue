<template>
	<view class="ui-menu" :class="[ui,bg]">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'UiMenu',
	data() {
		return {
			 
		};
	},
	props: {
		ui:{
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'ui-BG'
		},
		border: {
			type: [Boolean, String],
			default: false
		},
		smBorder: {
			type: [Boolean, String],
			default: false
		},
		shadow: {
			type: [Boolean, String],
			default: false
		},
		radius: {
			type: [Boolean, String],
			default: false
		},
	},
	created() {},
	computed: {
		 
	},
	watch: {},
	methods: {
	 
	}
};
</script>

<style lang="scss">
.ui-menu {
	 
}
</style>
