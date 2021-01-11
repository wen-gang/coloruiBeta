<template>
	<view class="cu-fixed">
		<view
			class="cu-fixed-box"
			:id="'fixed-' + _uid"
			:class="[{ fixed: fixed }]"
			:style="[{left:sticky?'auto':'0px', top: fixed && !bottom ? val + 'px' : 'auto', bottom: fixed && bottom ? val + 'px' : 'auto', zIndex: index + sys_layer }]"
		>
			<view :style="{ height: sys_navBar + 'px' }" v-if="!bottom && !noNav"></view>
			<view class="cu-fixed-content" :style="[{ zIndex: index + sys_layer}]"><slot /></view>
			<view style="height: calc(env(safe-area-inset-bottom) / 5 * 3);" v-if="bottom && !noSafe"></view>
			<view
				class="cu-fixed-bg"
				:class="[bgClass,{shadow:shadow},{'shadow-sm':shadow=='sm'},{'shadow-lg':shadow=='lg'}]"
				:style="[
					{ zIndex: index + sys_layer - 1 },
					bgClass == 'bg-img' ? { backgroundImage: 'url(' + img + ')' } : { backgroundColor: bgCss },
					opacity ? { opacity: opacityVal } : ''
				]"
			></view>
		</view>
		<view class="skeleton" :style="[{ height: height != 0 ? height + 'px' : content.height + 'px' ,width:width + 'px'}]" v-if="placeholder && fixed"></view>
	</view>
</template>

<script>
/* 
## Fixed
定位组件可以将内容固定在页面的具体位置，还可以根据滚动吸附在顶部或者底部

#### 属性说明

| 属性名 | 类型 | 默认值 | 描述 | 说明 |
|:-- | :--:| :--: | :-- | :-- |
| bottom | String | false |位置  |true:定位在顶部,false:定位在底部|
| val | Number | 0 |距离顶部/底部的值  | |
| noNav | Boolean | false |不计算导航栏  |true 不计算导航栏  false额外计算导航栏组件的高度|
| noSafe | Boolean | false |不计算底部安全区域 |false 不计算底部安全区域 true 额外计算安全区域高度|
| index | Number | 0 | 层级 |  |  |
| placeholder | Boolean | true | 浮动时是否占位 |  |  |
| sticky | Boolean | false | 滚动定位模式 |  |  |
| shadow | Boolean | false | 是否开启阴影 |  |  |

#### 示例
```
 <cu-fixed position="top">
 	content
 </cu-fixed>
```
 */
export default {
	name: 'cuFixed',
	data() {
		return {
			content: {},
			fixed: true
		};
	},
	props: {
		noNav: {
			type: Boolean,
			default: false
		},
		noSafe: {
			type: Boolean,
			default: false
		},
		bottom: {
			type: Boolean,
			default: false
		},
		bg: {
			type: String,
			default: 'bg-none'
		},
		val: {
			type: Number,
			default: 0
		},
		height: {
			type: [String,Number],
			default: 0
		},
		width: {
			type: [String,Number],
			default: 0
		},
		opacity: {
			type: Boolean,
			default: false
		},
		opacityVal: {
			type: Number,
			default: 0
		},
		index: {
			type: [Number, String],
			default: 0
		},
		placeholder: {
			type: [Boolean],
			default: true
		},
		sticky: {
			type: [Boolean],
			default: false
		},
		shadow: {
			type: [Boolean, String],
			default: false
		},
	},
	created() {
		if (this.sticky) {
			this.fixed = false;
		}
		uni.$on('_scrollTop_' + this.$root._uid, e => {
			this.sys_scrollTop = e;
		});
	},
	watch: {
		sys_scrollTop(newValue, oldValue) {
			if (this.sticky) {
				this.setFixed(newValue);
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			uni.createSelectorQuery()
				.in(this)
				.select('#fixed-' + this._uid)
				.boundingClientRect(data => {
					if (data != null) {
						if (this.height == 0) {
							this.content = data;
							this.$emit('getHeight', data.height);
							this.$emit('update:height', data.height);
						}
						if (this.sticky) {
							this.setFixed(this.sys_scrollTop);
						}
					} else {
						console.log('fixed-' + this._uid + ' data error');
					}
				})
				.exec();
		});
	},
	destroyed() {
		uni.$off('_scrollTop_' + this.$root._uid);
	},
	methods: {
		setFixed(value) {
			if (this.bottom) {
				this.fixed = value >= this.content.bottom - uni.getSystemInfoSync().windowHeight + this.content.height + this.val;
			} else {
				this.fixed = value >= this.content.top - this.val;
			}
		}}
};
</script>

<style lang="scss"></style>
