<template>	
		<view class="ui-avatar-stack" :class="[ui,{reverse:reverse}]"><slot></slot></view>
</template>

<script>
export default {
	name: 'UiAvatarStack',
	data() {
		return {};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		reverse: {
			type: Boolean,
			default: false
		}
	},
	methods: {}
};
</script>

<style lang="scss">
.ui-avatar-stack {
	display: inline-block;
	&.reverse {
		direction: rtl;
		unicode-bidi: bidi-override;
	}
}

</style>
