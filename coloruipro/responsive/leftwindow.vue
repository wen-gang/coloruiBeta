<template>
	<view class="" :style="{ height: 'calc(100vh - ' + sys_navBar + 'px)' }" v-if="windowLaunch && isLogin">
		<ui-fixed :index="10" :width="sys_left ? 260 : 60" noNav :val="sys_navBar">
			<ui-scroll scrolly class="page-left nav-bg" :style="{ height: 'calc(100vh - ' + sys_navBar + 'px)' }" :width="sys_left ? 260 : 60">
				<view class="nav-box" :class="{ sys_left: !sys_left }">
					<block v-for="(nav, navindex) in navlist" :key="navindex">
						<view class="nav-li" :class="[{ cur: nav.rule_name == sys_title }, nav.rule_path ? 'url' : 'sub']" @tap="clickNav(nav.rule_path, navindex)">
							<view class="">
								<text :class="['icon-lg', nav.rule_icon, { 'mr-3': sys_left }]" v-if="nav.rule_icon"></text>
								<text v-if="sys_left">{{ nav.rule_name }}</text>
							</view>
							<view class="cu-btn icon sm url-btn" v-if="sys_left && nav.rule_path"><text class="cui-angle"></text></view>
							<view class="cu-btn icon nav-bg-sub sm" v-if="!nav.rule_path"><text class="text-xxl" :class="nav.collapse ? 'cui-drop-up' : 'cui-drop-down'"></text></view>
						</view>
						<view class="nav-ul" :class="nav.collapse ? 'show' : 'hide'" v-if="nav.subnav">
							<navigator
								v-for="(item, index) in nav.subnav"
								:key="index"
								:url="item.rule_path"
								class="nav-li"
								:class="{ cur: item.rule_name == sys_title }"
								:id="item.rule_name + 'title'"
							>
								<view class="">
									<a href="javascript:void(0);" :title="item.rule_name"><text :class="['icon-lg', item.rule_icon, { 'mr-3': sys_left }]" v-if="item.rule_icon"></text></a>
									<text v-if="sys_left">{{ item.rule_name }}</text>
								</view>
								<view class="cu-btn icon sm url-btn" v-if="sys_left"><text class="cui-angle"></text></view>
							</navigator>
						</view>
					</block>
				</view>
			</ui-scroll>
		</ui-fixed>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			navlist: [],
			windowLaunch: false
		};
	},
	computed: {
		...mapState(['nav', 'sys_left', 'sys_title'])
	},
	watch: {
		sys_title() {
			this.setNavTitle();
		}
	},
	created() {
		this.setNavTitle();
		uni.$on('windowLaunch', data => {
			this.windowLaunch = data;
		});
	},
	mounted() {
		// #ifdef H5
		document.getElementsByTagName('uni-left-window')[0].className = this.sys_left ? 'show' : 'hide';
		// #endif
	},
	methods: {
		setNavTitle() {
			let nav = this.nav;
			nav.map(item => {
				item.collapse = false;
				if (item.subnav) {
					let result = item.subnav.some(subitem => {
						if (subitem.rule_name == this.sys_title) {
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
	.nav-li {
		position: relative;
		box-sizing: border-box;
		margin: 10px 10px 0;
		border-radius: 5px;
		padding: 10px 15px;
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
			// background-color: var(--main-b);
			// color: var(--main-e);
			// transform: scale(1.03);
			box-shadow: inset 0 0 100px 100px rgba(125, 125, 125, 0.2);
		}
		&.sub {
			margin: 10px 0px 0;
			padding: 15px 25px;
			border-radius: 0px;
			&:first-child {
				margin-top: 0px;
			}
		}
	}
	.nav-ul {
		overflow: hidden;
		background-color: var(--nav-bg-dark);
		.nav-li {
			width: calc(100% - 20px);
		}
		&.hide {
			max-height: 0vh;
			& + .sub {
				margin-top: 1px;
			}
		}
		&.show {
			max-height: 100vh;
			padding-bottom: 10px;
			& + .sub {
				margin-top: 0px;
			}
		}
	}
}
.sys_left.nav-box {
	.nav-li {
		justify-content: center;
		width: 40px;
		height: 40px;
		font-size: 18px;
		border-radius: 100px;
		&.sub {
			margin: 10px;
			padding: 15px;
			.cu-btn {
				position: absolute;
				transform: scale(0.8);
				// right: 26px;
				right: -14px;
				background: none !important;
			}
		}
	}
	.nav-ul {
		.nav-li {
			&.show {
				& + .sub {
					margin-top: 10px;
				}
			}
		}
	}
}
</style>
