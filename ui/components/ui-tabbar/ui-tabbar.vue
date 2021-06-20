<template>
	<ui-fixed bottom @getHeight="tabbarheight" :bg="bg" :placeholder="true" :index="1000" shadow="lg">
		<view class="ui-tabbar-box">
			<view class="ui-tabbar">
				<block class="" v-for="(item, index) in tabbar" :key="index">
					<view class="tabbar-item" :class="[index == cur ? curText : text, item.type, { cur: index == cur }]" @tap="clickItem(item)">
						<view class="tabbar-icon" :class="item.center ? `center border shadow-${sys_main}` : ''">
							<text :class="index == cur ? item.curIcon : item.icon" v-if="item.icon.indexOf(icon) != -1"></text>
							<image :src="index == cur ? item.curIcon : item.icon" mode="aspectFill" v-else></image>
						</view>
						<view class="tabbar-text uicon-">{{ item.title }}</view>
					</view>
				</block>
				<slot></slot>
			</view>
		</view>
	</ui-fixed>
</template>

<script>
export default {
	name: 'uiTabbar',
	data() {
		return {
			cur: 0
		};
	},
	props: {
		tpl: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: 'uicon'
		},
		bg: {
			type: String,
			default: 'bg-blur'
		},
		shadow: {
			type: [Boolean, String],
			default: false
		},
		curText: {
			type: String,
			default: 'ui-TC-Main'
		},
		text: {
			type: String,
			default: 'text-c'
		},
	},
	watch: {},
	computed: {
		tabbar() {
			return this.$store.getters.getTabbar;
		}
	},
	created() {
		uni.hideTabBar();
	},
	methods: {
		_onShow() {
			let page = getCurrentPages();
			let url = page[page.length - 1].route
			this.tabbar.map((item,index)=>{
				if(item.url == '/'+url){
					this.cur = index
				}
			})
		},
		clickItem(item) {
			if (item.type == 'tab') {
				this.changeTab(item.url);
			}
			if (item.type == 'nav') {
				this.navTo(item.url);
			}
		},
		changeTab(url) {
			uni.switchTab({
				url: url,
				fail(res) {
					console.log(res);
				}
			});
		},
		navTo(url) {
			uni.navigateTo({
				url: url,
				fail(res) {
					console.log(res);
				}
			});
		},
		tabbarheight(val) {
			uni.setStorageSync('tabbar', val);
		}
	}
};
</script>

<style lang="scss">
.ui-tabbar-box {
	.ui-tabbar {
		padding: 10rpx;
		display: flex;

		.tabbar-item {
			text-align: center;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: relative;
			z-index: 10;

			.tabbar-icon {
				height: 60rpx;
				width: 60rpx;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 45rpx;

				// background-color: #f1f1f1;
				image {
					width: 50rpx;
					height: 50rpx;
				}

				&.center {
					background-color: var(--ui-BG-Main);
					border-radius: 50%;
					color: #ffffff;
					font-size: 32rpx;
					transform: scale(1.3) translateY(-6px);
				}

				.badge {
					top: 0;
				}
			}

			.ui-btn {
				margin-top: -10px;
				margin-bottom: 5px;
				position: relative;
			}

			.tabbar-text {
				font-size: 24rpx;
				color: var(--ui-TC-2);
			}

			&.cur .tabbar-text {
				color: var(--ui-TC-Main);
			}
		}
	}
}
</style>
