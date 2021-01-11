<template>
	<view :id="'nav-' + index" class="item" @tap="ClickItem(index, item)" :class="[{cur:cur,'cu-btn':tpl=='btnGroup'||tpl=='btn'}]">
		<view class="flex-between cu-nav-item-content" :class="[cur ? textCur : text, hover, item.align == 'left' ? 'flex-row-' : 'flex-row-reverse']"
		 @click="itemOut" @mouseleave="itemOut" @mouseover="itemHover">
			<view :class="item.icon"></view>
			<view>{{ item.name?item.name:item }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hover: ''
			};
		},
		props: {
			index: {
				type: Number,
				default: 0
			},
			item: {
				type: [Object, String],
				default () {
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
			cur(val) {
				this.itemOut();
			}
		},
		created() {
			this.itemOut();
			uni.onWindowResize(res => {
				this.computedQuery();
			});
		},
		mounted() {
			this.$nextTick(() => {
				this.computedQuery();
			})
		},
		methods: {
			computedQuery() {
				uni.createSelectorQuery().in(this).select('#nav-' + this.index).boundingClientRect(data => {
					if (data != null) {
						// console.log('nav-item data: ', data);
						this.$emit('loaditem', this.index, data);
					} else {
						console.log('nav-item data error');
					}
				}).exec();
			},
			ClickItem(index, info) {
				this.$emit('ClickItem', index, info);
			},
			itemHover() {
				this.hover = this.textCur;
			},
			itemOut() {
				this.hover = '';
			}
		}
	};
</script>

<style lang="scss">

</style>
