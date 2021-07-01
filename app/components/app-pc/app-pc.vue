<template>
	<view class="colorui-head">
		<ui-navbar>
			<match-media :min-width="1025">
				<a href="/">
					<image src="https://oss.color-ui.com/web/u6d68.png" mode="widthFix" style="width: 150px;"
						class="mx-4"></image>
				</a>
			</match-media>
			<view class="" style="width: 380px;">
				<ui-tabbar noFixed></ui-tabbar>
			</view>
			<ui-popover :mask="true">
				<view class="px-4 mx-3"><text class="uicon-clothes icon-lg"></text></view>
				<block slot="content">
					<view class="" style="width: 380px;">
						<ui-change-theme ui="radius"></ui-change-theme>
					</view>
				</block>
			</ui-popover>
		</ui-navbar>
		<view class="colorui-content">
			<view class="colorui-left ui-BG-1 border-right">
				<app-scroll @appScroll="_scroll" :topVal="leftTop" :toid="'nav-' + title" scrolly class="page-left"
					:style="{ height: 'calc(100vh - ' + sys_navBar + 'px)' }" :width="left">
					<app-pc-left :title="title"></app-pc-left>
				</app-scroll>
			</view>
			<view class="colorui-main">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				color: ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey',
					'brown'
				]
			};
		},

		props: {
			left: {
				type: [String, Number],
				default: '260'
			},
			title: {
				type: String,
				default: ''
			},
			tabbar: {
				type: Boolean,
				default: false
			}
		},
		created() {
			uni.$on('_scrollTop_' + this.$root._uid, e => {
				this.sys_scrollTop = e;
			});
		},
		computed: {
			leftTop() {
				return this.$store.getters.getLeftTop;
			}
		},
		methods: {
			changeTheme(val) {
				this.$store.commit('setTheme', val);
			},
			changeMain(val) {
				this.$store.commit('setMain', val);
			},

			_scroll(val) {
				this.$store.commit('setLeftTop', val);
			}
		}
	}
</script>

<style lang="scss">
	.colorui-content {
		display: flex;

		.colorui-left {
			width: 260px;
		}

		.colorui-main {
			flex: 1;
		}
	}
</style>
