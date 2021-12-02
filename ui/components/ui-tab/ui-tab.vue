<template>
	<view class="ui-tab" ref="tab" :id="'tab-' + _uid" :class="[ui, tpl, bg, align, { 'ui-tab-inline': inline }, { 'ui-tab-scrolls': scroll }]">
		<block v-if="scroll">
			<view class="ui-tab-scroll-warp">
				<scroll-view
					scroll-x="true"
					class="ui-tab-scroll"
					:scroll-left="curValue > 1 ? tabNodeList[curValue - 1].left : 0"
					scroll-with-animation
					:style="{ width: `${content.width}px` }"
				>
					<ui-tab-item v-for="(item, index) in tab" :data="item" :index="index" :key="index" @up="_upitem" @click.native="_click(index, item)"></ui-tab-item>
					<view class="ui-tab-mark-warp" :class="[{ over: over }]" :style="[{ left: markLeft + 'px' }, { width: markWidth + 'px' }]">
						<view class="ui-tab-mark" :class="[mark, { 'ui-btn': tpl == 'btn' }]">
							<text v-if="tpl == 'btn'">{{ tab[curValue].name ? tab[curValue].name : tab[curValue] }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</block>
		<block v-else>
			<ui-tab-item v-for="(item, index) in tab" :data="item" :index="index" :key="index" @up="_upitem" @click.native="_click(index, item)"></ui-tab-item>
			<view class="ui-tab-mark-warp" :class="[{ over: over }]" :style="[{ left: markLeft + 'px' }, { width: markWidth + 'px' }]">
				<view class="ui-tab-mark" :class="[mark, { 'ui-btn': tpl == 'btn' }]">
					<text v-if="tpl == 'btn'">{{ tab[curValue].name ? tab[curValue].name : tab[curValue] }}</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
let _this = null;
export default {
	name: 'UiTab',
	data() {
		return {
			curValue: 0,
			tabNodeList: [],
			scrollLeft: 0,
			markLeft: 0,
			markWidth: 0,
			content: {
				width: 100
			},
			over: false
		};
	},
	props: {
		value: {
			type: Number,
			default: 0
		},
		ui: {
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'ui-BG'
		},
		tab: {
			type: Array,
			default() {
				return [];
			}
		},
		// line dot long
		tpl: {
			type: String,
			default: 'line'
		},
		mark: {
			type: String,
			default: ''
		},
		align: {
			type: String,
			default: ''
		},
		curColor: {
			type: String,
			default: 'ui-TC'
		},
		scroll: {
			type: Boolean,
			default: false
		},
		inline: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value: {
			handler(val) {
				if (val == this.curValue) return;
				this._setCurValue(val);
			},
			immediate: true
		}
	},
	created() {
		_this = this;
	},
	mounted() {
		this.$nextTick(function() {
			this._computedQuery();
		});
		uni.onWindowResize(res => {
			this._computedQuery();
		});
	},
	methods: {
		_computedQuery() {
			uni.createSelectorQuery()
				.in(this)
				.select('#tab-' + this._uid)
				.boundingClientRect(data => {
					if (data != null) {
						if (data.left == 0 && data.right == 0) {
							this._computedQuery();
						} else {
							this.content = data;
							this._computedChildQuery(this.$children);
							setTimeout(() => {
								this.over = true;
							}, 300);
						}
					} else {
						console.log('tab-' + this._uid + ' data error');
					}
				})
				.exec();
		},
		_computedChildQuery(array) {
			if (Array.isArray(array)) {
				array.forEach(child => {
					let childName = child.$options.name;
					if (childName == 'UiTabItem') {
						if (typeof child._computedQuery == 'function') {
							child._computedQuery();
						}
					} else if (child.$children) {
						this._computedChildQuery(child.$children);
					}
				});
			}
		},
		_setCurValue(value) {
			if (value == this.curValue) return;
			this.curValue = value;
			this._computedMark();
		},
		_click(index, item) {
			this._setCurValue(index);
			this.$emit('input', index);
			this.$emit('change', { index: index, data: item });
		},
		_upitem(index, e) {
			let list = this.tabNodeList;
			list[index] = e;
			if (index == this.curValue) {
				this._computedMark();
			}
		},
		_computedMark() {
			if (this.tabNodeList.length == 0) return;
			let left = 0;
			let list = this.tabNodeList;
			let cur = this.curValue;
			this.markLeft = list[cur].left - this.content.left;
			console.log(list[cur].left, this.content.left);
			this.markWidth = list[cur].width;
		},
		_computedScroll() {
			if (this.curValue == 0 || this.curValue == this.tabNodeList.length - 1) {
				return false;
			}
			let i = 0;
			let left = 0;
			let list = this.tabNodeList;
			for (i in list) {
				if (i == this.curValue && i != 0) {
					left = left - list[i - 1].width;
					break;
				}
				left = left + list[i].width;
			}
			this.scrollLeft = left;
		}
	}
};
</script>

<style lang="scss">
.ui-tab {
	position: relative;
	display: flex;
	height: 4em;
	align-items: center;
	&.ui-tab-scrolls {
		width: 100%;
		.ui-tab-scroll-warp {
			overflow: hidden;
			height: inherit;
			width: 100%;
			.ui-tab-scroll {
				position: relative;
				display: block;
				white-space: nowrap;
				overflow: auto;
				height: calc(4em + 17px);
				padding-bottom: 17px;
				line-height: 4em;
				width: 100% !important;
				.ui-tab-mark-warp {
					height: 4em;
				}
			}
		}
	}
	.ui-tab-mark-warp {
		color: inherit;
		position: absolute;
		top: 0;
		height: 100%;
		z-index: 0;
		&.over {
			transition: 0.3s;
		}
		.ui-tab-mark {
			color: var(--ui-BG-Main);
			height: 100%;
			&.ui-btn {
				text {
					opacity: 0;
				}
			}
		}
	}
	&.line {
		.ui-tab-mark {
			border-bottom: 2px solid currentColor;
		}
	}
	&.topline {
		.ui-tab-mark {
			border-top: 2px solid currentColor;
		}
	}
	&.dot {
		.ui-tab-mark::after {
			content: '';
			width: 0.5em;
			height: 0.5em;
			background-color: currentColor;
			border-radius: 50%;
			display: block;
			position: absolute;
			bottom: 0.3em;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	&.dot {
		.ui-tab-mark::after {
			content: '';
			width: 0.5em;
			height: 0.5em;
			background-color: currentColor;
			border-radius: 50%;
			display: block;
			position: absolute;
			bottom: 0.5em;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	&.long {
		.ui-tab-mark::after {
			content: '';
			width: 2em;
			height: 0.35em;
			background-color: currentColor;
			border-radius: 5em;
			display: block;
			position: absolute;
			bottom: 0.5em;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	&.trapezoid {
		.ui-tab-mark::after {
			content: '';
			width: calc(100% - 2em);
			height: 0.35em;
			background-color: currentColor;
			border-radius: 5em 5em 0 0;
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
	&.btn {
		.ui-tab-mark-warp {
			display: flex;
			align-items: center;
			justify-content: center;
			.ui-tab-mark.ui-btn {
				height: calc(100% - 1.6em);
				width: calc(100% - 0.6em);
			}
		}
		&.sm .ui-tab-mark.ui-btn {
			height: calc(100% - 2px);
			width: calc(100% - 2px);
			border-radius: #{$radius - 2};
		}
	}
	&.ui-tab-inline {
		display: inline-flex;
		height: 3.5em;
		&.ui-tab-scrolls {
			.ui-tab-scroll {
				height: calc(3.5em + 17px);
				line-height: 3.5em;
				.ui-tab-mark-warp {
					height: 3.5em;
				}
			}
		}
		&.btn {
			.ui-tab-mark-warp {
				.ui-tab-mark.ui-btn {
					height: calc(100% - 10px);
					width: calc(100% - 10px);
				}
			}
			
		}
	}
	
	&.sm {		
		height: 70rpx !important;
		
		&.ui-tab-inline{ 
			height: 70rpx;
			&.ui-tab-scrolls {
				.ui-tab-scroll {
					height: calc(70rpx + 17px);
					line-height: 70rpx;
					.ui-tab-mark-warp {
						height: 70rpx;
					}
				}
			}
			&.btn .ui-tab-mark.ui-btn {
				height: calc(100% - 2px);
				width: calc(100% - 2px);
				border-radius: #{$radius - 2};
			}
		}
	}
}
</style>
