<template>
	<view :id="'tab-' + index" class="ui-tab-item" @tap="ClickItem(index, item)" :class="[{ cur: cur, 'ui-btn': tpl == 'btnGroup' || tpl == 'btn' }]">
		<view class="flex-between ui-tab-item-content" :class="[cur ? textCur : text, item.align == 'left' ? 'flex-row-' : 'flex-row-reverse']">
			<view :class="item.icon"></view>
			<view>
				{{ item.name ? item.name : item }}
				<text class="text-normal ml-2" v-if="item.tag">{{ item.tag }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'TabItem',
	data() {
		return {};
	},
	props: {
		tab: {
			type: Array,
			default() {
				return [];
			}
		},
		index: {
			type: Number,
			default: 0
		},
		item: {
			type: [Object, String],
			default() {
				return {};
			}
		},
		cur: {
			type: Boolean,
			default: false
		},
		tpl: {
			type: String,
			default: 'default'
		},
		text: {
			type: String,
			default: ''
		},
		textCur: {
			type: String,
			default: ''
		}
	},
	watch: {
		cur(val) {}
	},
	created() {
		uni.onWindowResize(res => {
			this._computedQuery();
		});
	},
	mounted() {
		this.$nextTick(function() {
			this._computedQuery();
		});
	},
	updated() {
		this.$nextTick(function() {
			this._computedQuery();
		});
	},
	methods: {
		_computedQuery() {
			uni.createSelectorQuery()
				.in(this)
				.select('#tab-' + this.index)
				.boundingClientRect(data => {
					if (data != null) {
						this.$emit('loaditem', this.index, data);
					} else {
						console.log('tab-item data error');
					}
				})
				.exec();
		},
		ClickItem(index, info) {
			this.$emit('ClickItem', index, info);
		}
	}
};
</script>

<style lang="scss">
.ui-tab-item {
	display: inline-flex;
	vertical-align: middle;
	padding: 0 20rpx;
	min-height: 4em;
	line-height: 4em;
	&.cur {
		color: var(--ui-TC-Main);
	}
	.ui-tab-item-content:hover {
		cursor: pointer;
	}
	&.dot{
		.tab-dot {
			position: absolute;
			bottom:3px;
			// border-radius: 12rpx;
			height: 4px;
			min-width: 2em;
			margin-left: -1em;
			transition: 0.3s;
			background-color: var(--ui-TC-Main);
		}
	}
}
</style>
