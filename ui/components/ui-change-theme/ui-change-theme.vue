<template>
	<view class="">
		<view class="ui-menu sm-border" :class="[ui]">
			<!-- #ifndef APP-PLUS -->
			<view class="ui-menu-item" @tap="setTheme(sys_theme == 'auto' ? 'light' : 'auto')">
				<view class="ui-menu-item-content">跟随系统</view>
				<view class="action">
					<ui-switch :checked="sys_theme == 'auto'"></ui-switch>
				</view>
			</view>
			<!-- #endif -->

			<view class="ui-menu-item" v-if="sys_theme != 'auto'">
				<view class="flex flex-center py-5 text-center flex-sub">
					<view class="pr-5">
						<view class="mobile-phone border" @tap="setTheme('light')"
							:class="{ cur: sys_theme == 'light' }">
							<view class="ui-BG-Main radius"></view>
							<view class="bg-gray radius"></view>
							<view class="bg-gray radius"></view>
							<view class="borders border-top mt-5 mx-4 border-dark-6"></view>
						</view>
						<view>浅色</view>
					</view>
					<view class="pl-5">
						<view class="mobile-phone border dark" @tap="setTheme('dark')"
							:class="{ cur: sys_theme == 'dark' }">
							<view class="ui-BG-Main radius"></view>
							<view class="bg-dark-4 radius"></view>
							<view class="bg-dark-4 radius"></view>
							<view class="borders border-top mt-5 mx-4 border-white"></view>
						</view>
						<view>深色</view>
					</view>
				</view>

			</view>
			<view class="ui-menu-item">
				<view class="ui-menu-item-content">强调色</view>
				<view class="action" @tap="$Modal.show('ColorPicker')">
					<ui-radio :bg="`bg-${sys_main} shadow-${sys_main} shadow-sm`"></ui-radio>
				</view>
			</view>
		</view>

		<ui-modal name="ColorPicker">
			<view class="ui-grid ui-cols-6 p-3">
				<view class="text-center ui-item py-2 my-2" v-for="(item, index) in color" :key="index"
					@tap="chooseColor(item)">
					<ui-radio :value="sys_main" :label="item" :bg="`bg-${item} shadow-${item} shadow-sm`"
						:unbg="`bg-${item} shadow-${item} shadow-sm`"></ui-radio>
				</view>
			</view>
		</ui-modal>
	</view>
</template>

<script>
	let _this = null;
	export default {
		name: 'UiChangeTheme',
		data() {
			return {
				color: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown',
					'grey'
				]
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
		},
		watch: {},
		created() {
			_this = this;
		},
		methods: {
			setTheme(val) {
				this.$store.commit('setTheme', val);
			},
			chooseColor(val) {
				this.$store.commit('setMain', val);
			}
		}
	};
</script>

<style lang="scss">
	.mobile-phone {
		width: 170rpx;
		height: 305rpx;
		border-radius: 10px;
		padding: 10rpx 15rpx;
		background-color: #ffffff;
		margin-bottom: 10px;

		&:after {
			display: none;
		}

		&.cur:after {
			display: block;
			border: 10rpx solid var(--ui-BG-Main) !important;
			border-radius: 20px;
		}

		.ui-BG-Main {
			height: 100rpx;
			margin-top: 10px;
			background-color: rgba(122, 122, 122, 0.5) !important;
		}

		&.cur .ui-BG-Main {
			background-color: var(--ui-BG-Main) !important;
		}

		.bg-gray,
		.bg-dark-4 {
			height: 40rpx;
			margin-top: 10rpx;
		}

		&.dark {
			background-color: #232323;
		}
	}
</style>
