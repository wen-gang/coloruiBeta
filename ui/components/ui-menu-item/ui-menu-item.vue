<template>
	<view class="ui-menu-item" :class="[{ arrow: arrow }]">
		<view class="ui-menu-item-icon">
			<template v-if="slots.icon">
				<slot name="icon"></slot>
			</template>
			<template v-else>
				<view :class="icon"></view>
			</template>
		</view>
		<view class="ui-menu-item-content">
			<view class="ui-menu-item-title">
				{{ title }}
			</view>
			<view class="ui-menu-item-action" v-if="slots.action">
				<slot name="action"></slot>
			</view>
		</view>
		<view class="ui-menu-item-arrow"><view class="cicon-forward"></view></view>
	</view>
</template>

<script>
export default {
	name: 'uiMenuItem',
	data() {
		return {
			slots: {}
		};
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		arrow: {
			type: [Boolean, String],
			default: false
		}
	},
	created() {},
	computed: {},

	mounted() {
		this.slots = this.$scopedSlots;
	},
	watch: {},
	methods: {}
};
</script>

<style lang="scss">

</style>
