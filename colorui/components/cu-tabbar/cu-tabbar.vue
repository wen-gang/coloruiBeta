<template>
	<cu-fixed bottom @getHeight="tabbarheight" :bg="bg">
		<view class="cu-tabbar-box">
			<view class="cu-tabbar">
				<block class="" v-for="(item, index) in tabbarlist" :key="index">
					<view
						class="tabbar-item"
						:class="[index == curr ? curTextClass : textClass, item.type, { cur: index == curr }]"
						:style="[{ color: index == curr ? curTextCss : textCss }]"
						@tap="changeTab(item, index)"
					>
						<view class="tabbar-icon">
							<text :class="index == curr ? item.curIcon : item.icon" v-if="item.icon.indexOf(icon) != -1"></text>
							<image :src="index == curr ? item.curIcon : item.icon" mode="aspectFill" v-else></image>
							<cu-tag :value="item.tag" v-if="item.tag" badge></cu-tag>
						</view>
						<view class="tabbar-text">{{ item.name }}</view>
					</view>
				</block>
				<slot></slot>
			</view>
		</view>
	</cu-fixed>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'cuTabbar',
	data() {
		return {
			curr: 0,
			tabbarlist: []
		};
	},
	props: {
		info: {
			type: Array,
			default() {
				return [];
			}
		},
		tpl: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: 'cui'
		},
		cur: {
			type: [String, Number],
			default: 0
		}
	},
	computed: {
		...mapState(['tabbar'])
	},
	watch: {
		cur(val) {
			this.curr = val;
		}
	},
	beforeCreate() {
		uni.hideTabBar();
	},
	created() {
		if (this.info.length > 0) {
			this.tabbarlist = this.info;
		} else {
			this.tabbarlist = this.tabbar;
		}
		this.curr = this.cur;
	},
	methods: {
		changeTab(item, index) {
			console.log(item.type);
			switch (item.type) {
				case 'navigateTo':
					uni.navigateTo({
						url: item.url,
						fail: res => {
							console.log(res);
						}
					});
					break;
				case 'reLaunch':
					uni.reLaunch({
						url: item.url,
						fail: res => {
							console.log(res);
						}
					});
					break;
				case 'switchTab':
					uni.switchTab({
						url: item.url,
						fail: res => {
							console.log(res);
						}
					});
					break;
				default:
					this.$emit('update:cur', index);
					this.curr = index;
			}
		},

		tabbarheight(val) {
			uni.setStorageSync('tabbar', val);
		}
	}
};
</script>

<style lang="scss"></style>
