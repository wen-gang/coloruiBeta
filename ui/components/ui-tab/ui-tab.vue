<template>
	<view>
		<scroll-view scroll-x class="ui-tab" :class="[align, tpl]" scroll-with-animation :scroll-left="scrollLeft">
			<tab-item
				:tpl="tpl"
				:text="text"
				:textCur="textCur"
				:cur="index == TabCur"
				v-for="(item, index) in tab"
				:key="index"
				:item="item"
				:index="index"
				:tab="tab"
				@ClickItem="ClickItem"
				@loaditem="OnloadItem"
			></tab-item>
			<view class="tab-dot" :class="dot" :style="[{ left: dotLeft == 0 ? 'none' : dotLeft + 'px' }]"></view>
		</scroll-view>
	</view>
</template>

<script>
/**
 * Tab 导航栏
 * @description 导航栏组件(选项卡组件)
 * @property {Array} tab 数据源，格式为 ['xxx','xxx','xxx'] 或者 [{name:'xxx',tag:'xxx',icon:'xxx'},{name:'xxx',tag:'xxx',icon:'xxx'}]
 * 		name:标题文字,
 * 		tag:标签内容,
 * 		icon:图标类名[cui-],
 * 		align:图标位置[left|right]
 * @property {Boolean} isChange 是否在页面处理更改 默认为false [true:组件内完成更改，组件外可以用.sync来更改当前页面data的cur|false:页面内利用changeTab来完成更改]
 * @property {Number} cur 当前选项
 * @property {String} align 导航内容对齐方式
 * @property {String} tpl 导航模板
 * @property {String} dot 下标的类名 大部分情况是用'bg-xxx'来控制颜色
 * @event {Function} changeTab 点击后触发的事件
 * @example <ui-tab :tab="['xxx','xxx','xxx']" :cur.sync="tabCur" dot="bg-blue"></ui-tab></view>
 * @example <ui-tab :tab="['xxx','xxx','xxx']" :cur="tabCur" dot="bg-blue" :isChange="true" @change="TabChange"></ui-tab></view>
 */
import tabItem from '@/ui/components/ui-tab/ui-tab-item.vue';
export default {
	name: 'UiTab',
	components: {
		tabItem
	},
	data() {
		return {
			TabCur: 0,
			TabList: [],
			scrollLeft: 0,
			dotLeft: 0
		};
	},
	props: {
		isChange: {
			type: Boolean,
			default: false
		},
		tab: {
			type: Array,
			default() {
				return [];
			}
		},
		cur: {
			type: Number,
			default: 0
		},
		dot: {
			type: String,
			default: ''
		},
		align: {
			type: String,
			default: 'left'
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
		cur(index) {
			this.TabCur = index;
		},
		TabCur(index) {
			this.$emit('update:cur', index);
			this.computedDot();
			this.computedScroll();
		}
	},
	created() {
		this.TabCur = this.cur;
		uni.onWindowResize(res => {
			this.TabCur = this.cur;
		});
	},
	methods: {
		ClickItem(index, info) {
			if (this.isChange) {
				this.$emit('change', index, info);
			} else {
				this.TabCur = index;
			}
		},
		OnloadItem(index, e) {
			let list = this.TabList;
			list[index] = e;
			this.TabList = list;
			// console.log(index, e)
			if (index == this.TabCur) {
				this.computedDot();
			}
		},
		computedDot() {
			let i = 0;
			let left = 0;
			let list = this.TabList;
			for (i in list) {
				if (i == this.TabCur) {
					left = left + list[i].width / 2;
					break;
				}
				left = left + list[i].width;
			}
			this.dotLeft = left;
		},
		computedScroll() {
			if(this.TabCur == 0 || this.TabCur == this.TabList.length - 1){
				return false
			}
			let i = 0;
			let left = 0;
			let list = this.TabList;
			for (i in list) {
				if (i == this.TabCur && i != 0) {
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
		white-space: nowrap;
		position: relative;
		width: 100vw;
		
		&.dot{
			.tab-dot {
				position: absolute;
				bottom:3px;
				// border-radius: 12rpx;
				height: 4px;
				min-width: 2em;
				margin-left: -1em;
				transition: 0.3s;
				background-color: var(--ui-BG-Main);
			}
		}
		&.flex{
			.uni-scroll-view-content{
				display: flex;
			}
			.item {
				flex: 1;
				text-align: center;
			}
		}
		&.btnGroup{
			.item {
				 
			}
		}
	}
	
</style>
