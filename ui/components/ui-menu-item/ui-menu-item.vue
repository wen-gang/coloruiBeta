<template>
	<view class="ui-menu-item" :class="[{ 'arrow': arrow },{'first-item':isFirstChild},ui]">
		<view class="ui-menu-item-icon" v-if="slots.icon||icon!=''">
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
		<view class="ui-menu-item-arrow" v-if="arrow"><view class="_icon-forward"></view></view>
	</view>
</template>

<script>
export default {
	name: 'UiMenuItem',
	data() {
		return { 
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
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
	computed: {
		isFirstChild(){
			let parent = this._getParent('UiMenu')
			// 判断是否存在 ui-Menu 组件
			if(parent){ 
				if (!parent.firstChildAppend) {
					parent.firstChildAppend = true;
					return true;
				}
			}
			return false
		}
	}, 
	watch: {},
	methods: { 
	}
};
</script>

<style lang="scss">

</style>
