<template>
	<view class="nav-box">
		<block v-for="(nav, navindex) in navlist" :key="navindex">
			<view class="flex-bar py-2 pl-4"><cu-title :title="nav.title" isIcon depth="2"></cu-title></view>
			<view class="nav-ul" v-if="nav.subnav">
				<navigator
					v-for="(item, index) in nav.subnav"
					:key="index"
					:url="item.url"
					class="nav-li"
					:class="item.title == title ? 'bg-' + sys_main + '-gradient' : ''"
					:id="'nav-' + item.title"
				>
					<view class="ml-3 mr-2" v-if="item.icon"><text :class="['icon-lg', item.icon]"></text></view>
					<view class="flex-sub ml-3">{{ item.title }}</view>
					<view class="cu-btn icon sm"><text class="cui-angle"></text></view>
				</navigator>
			</view>
		</block>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			navlist: []
		};
	},
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	computed: {
		...mapState(['nav'])
	},
	created() {
		let nav = this.nav;
		nav.map(item => {
			item.collapse = true;
			if (item.subnav) {
				let result = item.subnav.some(subitem => {
					if (subitem.title == this.title) {
						return true;
					}
				});
				if (result) {
					item.collapse = true;
				}
			}
		});
		this.navlist = nav;
	},
	methods: {
		clickNav(url, index) {
			if (url) {
				uni.preloadPage({
					url: url,
					success: () => {
						uni.navigateTo({
							url: url
						});
					}
				});
			} else {
				this.toggleNav(index);
			}
		},
		toggleNav(index) {
			let item = this.navlist[index];
			item.collapse = !item.collapse;
			this.$set(this.navlist, index, item);
		}
	}
};
</script>

<style lang="scss">
.nav-box {
	padding-top: 1px;
	.nav-ul {
		overflow: hidden;
		.nav-li {
			width: calc(100% - 20px);
			position: relative;
			box-sizing: border-box;
			margin: 10px;
			border-radius: 5px;
			padding: 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			transition: width 0.2s;
			cursor: pointer;
			white-space: nowrap;
			&.cur {
				background-color: var(--main-a);
				color: var(--main-e);
			}
			&:hover {
				box-shadow: inset 0 0 100px 100px rgba(125, 125, 125, 0.2);
			}
		}
	}
}
</style>
