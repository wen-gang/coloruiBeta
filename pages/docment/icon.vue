<template>
	<ui-sys title="图标">
		<view class="ui-container">
			<!-- 	<ui-fixed sticky>
				<view class="p-3">
					<ui-input><ui-btn>搜索</ui-btn></ui-input>
				</view>
			</ui-fixed> -->
			<view class="ui-icon-list ui-grid ui-cols-4 mt-3">
				<view class="ui-item" v-for="(item, index) in iconlist" :key="index">
					<view class="py-4 border radius ui-BG" style="height: 100%;">
						<view class="text-cut mt-2 icon-xxl p-4 ui-TC"><text :class="[`cicon-${item}`]"></text></view>
						<view class="text-cut mt-2 text-xs text-grey">{{ item }}</view>
					</view>
				</view>
			</view>
			<!-- 			<view class="ui-icon-list ui-grid ui-cols-2 ui-cols-sm-3 ui-cols-md-4 ui-cols-lg-6 ui-cols-xl-8 ui-cols-xxl-10">
				<view v-for="(item, index) in list" :key="index" class="ui-item">
					<view class="py-4 border radius ui-BG" style="height: 100%;" @tap="copy(item.name)">
						<view class="text-cut mt-2 icon-xxl p-4 ui-TC">
							<rich-text :nodes="'&#x' + item.content + ';'" class="uicon-" :selectable="true"></rich-text>
						</view>
						<view class="text-cut mt-2 text-xs text-grey">{{ item.name | icon }}</view>
					</view>
				</view>
			</view> -->
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			grid: true,
			list: [],
			iconlist: [
				'home',
				'home-o',
				'search',
				'arrow',
				'checkbox',
				'checkbox-o',
				'box',
				'round',
				'check',
				'check-round',
				'check-round-o',
				'more',
				'close',
				'close-round',
				'close-round-o',
				'edit',
				'info',
				'info-o',
				'warn',
				'warn-o',
				'waiting',
				'waiting-o',
				'delete',
				'delete-o',
				'add',
				'add-round',
				'add-round-o',
				'title',
				'move',
				'move-round',
				'move-round-o',
				'titles',
				'copy',
				'copy-o',
				'loading',
				'loader',
				'back',
				'forward',
				'drop-down',
				'drop-up',
			],
			tagList: [
				{
					title: '箭头',
					name: 'arrow'
				}
			],
			page: 0
		};
	},
	created() {
		// this.list = icons;
		this.loading = true;
		// this.getMaterialIcon(0);
	},
	methods: {
		getMaterialIcon(page) {
			this.$api
				.callFunction({
					name: 'getMaterialIcon',
					data: {
						page: page
					}
				})
				.then(res => {
					this.list = this.list.concat(res.result.data);
					if (res.result.data.length == 100) {
						this.getMaterialIcon(page + 1);
					}
					this.loading = false;
					console.log(page);
				})
				.catch(err => {
					console.log(err.errMsg);
					this.loading = false;
				});
		},
		copy(text) {
			this.$util.copyText(unescape(text.replace(/&#x/g, '%u').replace(/;/g, '')));
		}
	}
};
</script>

<style lang="scss">
.ui-icon-list {
	.ui-item {
		padding: 10rpx;
		position: relative;
		overflow: hidden;
		transition: $transition-base;
		text-align: center;
		border-radius: $radius;

		.copy-layer {
			position: absolute;
			// background-color: #FFFFFF;
			left: 0;
			bottom: 0;
			width: 100%;
			display: flex;
			// flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			opacity: 0;
			transition: $transition-base;
			padding-bottom: 0rpx;

			view {
				flex: 1;
				text-align: center;
			}
		}
	}
}
</style>
