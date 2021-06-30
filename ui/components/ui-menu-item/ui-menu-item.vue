<template>
	<view class="ui-menu-item" :class="[{ 'arrow': arrow },{'first-item':isFirstChild},ui]">
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
	name: 'UiMenuItem',
	data() {
		return {
			slots: {}
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
			this.Menu = this.getMenu()
			// 判断是否存在 ui-Menu 组件
			if(this.Menu){ 
				if (!this.Menu.firstChildAppend) {
					this.Menu.firstChildAppend = true;
					return true;
				}
			}
			
			return false
		}
	},

	mounted() {
		this.slots = this.$scopedSlots;
	},
	watch: {},
	methods: {
		/**
		 * 获取父元素实例
		 */
		getMenu(name = 'UiMenu') {
			let parent = this.$parent;
			let parentName = parent.$options.name;
			while (parentName !== name) {
				parent = parent.$parent;
				if (!parent) return false
				parentName = parent.$options.name;
			}
			return parent;
		},
	}
};
</script>

<style lang="scss">

</style>
