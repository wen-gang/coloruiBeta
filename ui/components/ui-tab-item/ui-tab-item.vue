<template>
	<view :id="'tab-' + index" class="ui-tab-item" :class="[{'cur':cur},tpl]">
		<view class="ui-tab-icon" :class="data.icon" v-if="data.icon"></view>
		<view class="ui-tab-text" :class="[cur?curColor:'']">
			{{ data.name ? data.name : data }}
		</view>		
		<view class="ui-tag badge ml-2" v-if="data.tag!=null">{{ data.tag }}</view>
	</view>
</template>

<script>
export default {
	name: 'UiTabItem',
	data() {
		return {};
	},
	props: {
		data: {
			type: [Object, String],
			default() {
				return {};
			}
		},
		index: {
			type: Number,
			default: 0
		}
	},
	watch: {},
	created() {},
	mounted() {
		uni.onWindowResize(res => {
			this._computedQuery();
		});
	},
	computed: {
		cur() {
			return this._getParent('UiTab').curValue==this.index
		},
		tpl() {
			return this._getParent('UiTab').tpl
		},
		curColor() {
			return this._getParent('UiTab').curColor
		},
	},
	created() {
		let parent = this._getParent('UiTab')
	},
	methods: {
		// 获取子节点的位置宽度等信息
		_computedQuery() {
			uni.createSelectorQuery()
				.in(this)
				.select('#tab-' + this.index)
				.boundingClientRect(data => {
					if (data != null) {
						// 传递到父组件进行计算
						this.$emit('up', this.index, data);
					} else {
						console.log('tab-item data error');
					}
				})
				.exec();
		}
	}
};
</script>

<style lang="scss">
.ui-tab-item {
	display: inline-flex;
	align-items: center;
	padding: 0 1em;
	min-height: 1.5em;
	line-height: 1.5em;
	position: relative;
	z-index: 1;
	opacity: .6;
	transition: opacity 0.3s;
	.ui-tab-icon{
		margin: 0 .25em;
		font-size: 120%;
	}
	&.cur {
		opacity: 1;
	}
	&.btn{
		.ui-tab-text{
			transform: scale(.9);
			transition: color 0.3s;
		}
	}
}
</style>
