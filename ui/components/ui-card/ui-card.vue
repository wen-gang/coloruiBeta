<template>
	<view
		class="ui-card" :class="[ui]" >
		<view class="ui-card-main" :class="[imgUi]" v-if="img" :style="[{ height: imgHeight }, { paddingTop: imgHeight ? 0 : '50%' }]">
			<ui-img :src="img" class="ui-card-image" :style="[{position:imgHeight=='auto'?'relative':'absolute'}]"></ui-img>
			<view class="text-cut text-lg text-bold ui-card-fixedTitle bg-mask-bottom" v-if="title && fixedTitle">
				<view class="">
					<text v-if="!slots.title">{{ title }}</text>
					<slot name="title"></slot>
				</view>
			</view>
			<view class="ui-card-tag" v-if="slots.tag">
				<slot name="tag"></slot>
			</view>
		</view>
		<view class="ui-card-content">
			<view class="text-cut text-lg text-bold ui-card-title" v-if="title && !fixedTitle">
				<text v-if="!slots.title">{{ title }}</text>
				<slot name="title"></slot>
			</view>
			<view class="ui-TC-3 mt-2 text-linecut-2 ui-card-desc" v-if="desc">{{ desc }}</view>
			<view class="ui-card-other"><slot></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UiCard',
	data() {
		return { 
		};
	},
	props: {
		img: {
			type: String
		},
		imgHeight: {
			type: String
		},
		title: {
			type: String
		},
		fixedTitle: {
			type: Boolean,
			default: false
		},
		desc: {
			type: String
		}, 
		ui: {
			type: String
		}, 
		imgUi: {
			type: String
		}, 
	},
	methods: {
		_getParent() {
			let parent = this.$parent;
			if (parent) {
				let parentName = parent.$options.name;
				while (parentName !== 'UiCard') {
					parent = parent.$parent;
					if (parent) {
						parentName = parent.$options.name;
					} else {
						return null;
					}
				}
				return parent;
			}
			return null;
		}
	}
};
</script>

<style lang="scss">
.ui-card {
	position: relative;
	background-color: var(--ui-BG);
	overflow: hidden;
	margin: 2em 0;
	.ui-card-title {
		padding: 0.5em 1em 0;
	}
	.ui-card-desc {
		padding: 0.5em 1em 0;
		height: 3.7em;
		line-height: 1.6;
	}
	.ui-card-main {
		width: 100%;
		position: relative;
		.ui-card-tag{
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
			z-index: 2;
			border-radius: inherit;
		}
		.ui-card-fixedTitle {
			padding: 1.5em 1em 1em;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			z-index: 2;
			&::before{
				opacity: .6;
			}
		}
		.ui-card-image {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 1;
		}
	}
	.ui-card-other {
		padding: 0.5em 1em;
	}
	.ui-card-other:first-child {
		padding: 0;
	}
}
</style>
