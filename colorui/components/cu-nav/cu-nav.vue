<template>
	<view>
		<scroll-view scroll-x class="cu-nav" :class="[align, tpl]" scroll-with-animation :scroll-left="scrollLeft">
			<nav-item
			    :tpl="tpl"
				:text="text"
				:textCur="textCur"
				:cur="index == NavCur"
				v-for="(item, index) in nav"
				:key="index"
				:item="item"
				:index="index"
				@ClickItem="ClickItem"
				@loaditem="OnloadItem"
			></nav-item>
			<view class="nav-dot" :class="dot" :style="[{ left: dotLeft == 0 ? 'none' : dotLeft + 'px' }]"></view>
		</scroll-view>
	</view>
</template>

<script>
/**
 * Nav 导航栏
 * @description 导航栏组件(选项卡组件)
 * @property {Array} nav 数据源，格式为 ['xxx','xxx','xxx'] 或者 [{name:'xxx',tag:'xxx',icon:'xxx'},{name:'xxx',tag:'xxx',icon:'xxx'}]
 * 		name:标题文字,
 * 		tag:标签内容,
 * 		icon:图标类名[cui-],
 * 		align:图标位置[left|right]
 * @property {Boolean} isChange 是否在页面处理更改 默认为false [true:组件内完成更改，组件外可以用.sync来更改当前页面data的cur|false:页面内利用changeNav来完成更改]
 * @property {Number} cur 当前选项
 * @property {String} align 导航内容对齐方式
 * @property {String} tpl 导航模板
 * @property {String} dot 下标的类名 大部分情况是用'bg-xxx'来控制颜色
 * @event {Function} changeNav 点击后触发的事件
 * @example <cu-nav :nav="['xxx','xxx','xxx']" :cur.sync="navCur" dot="bg-blue"></cu-nav></view>
 * @example <cu-nav :nav="['xxx','xxx','xxx']" :cur="navCur" dot="bg-blue" :isChange="true" @change="NavChange"></cu-nav></view>
 */
import navItem from '@/colorui/components/cu-nav/cu-nav-item.vue';
export default {
	name: 'cuNav',
	components: {
		navItem
	},
	data() {
		return {
			NavCur: 0,
			NavList: [],
			scrollLeft: 0,
			dotLeft: 0
		};
	},
	props: {
		isChange: {
			type: Boolean,
			default: false
		},
		nav: {
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
			this.NavCur = index;
		},
		NavCur(index) {
			this.$emit('update:cur', index);
			this.computedDot();
			this.computedScroll();
		}
	},
	created() {
		this.NavCur = this.cur;
		uni.onWindowResize((res) => {
		   this.NavCur = this.cur;
		})
	},
	methods: {
		ClickItem(index, info) {
			if (this.isChange) {
				this.$emit('change', index, info);
			} else {
				this.NavCur = index;
			}
		},
		OnloadItem(index, e) {
			let list = this.NavList;
			list[index] = e;
			this.NavList = list;
			if (index == this.NavCur) {
				this.computedDot();
			}
		},
		computedDot() {
			let i = 0;
			let left = 0;
			let list = this.NavList;
			for (i in list) {
				if (i == this.NavCur) {
					left = left + list[i].width / 2;
					break;
				}
				left = left + list[i].width;
			}
			this.dotLeft = left;
		},
		computedScroll() {
			let i = 0;
			let left = 0;
			let list = this.NavList;
			for (i in list) {
				if (i == this.NavCur && i != 0) {
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

</style>
