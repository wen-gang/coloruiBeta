<template>
	<ui-sys title="图标">
		<view class="ui-container">
			<ui-title title="系统图标" depth="2" isIcon></ui-title>
			<view class="paragraph">Colorui自带的图标,不可移除。
				<ui-code>._icon-{name}</ui-code></view> 
			<view class="blockquote">
				你也可以按照<ui-code>@/app/scss/icon</ui-code>
				中的
				<ui-code>coloricon</ui-code>模板。
				引入自己的图标库。
			</view> 
			
			<view class="ui-icon-list ui-grid ui-cols-4 mt-3">
				<view class="ui-item" v-for="(item, index) in list" :key="index">
					<view class="py-4 border radius ui-BG" style="height: 100%;" @tap="copy(`_icon-${item}`)">
						<view class="text-cut mt-2 icon-xxl p-4 ui-TC"><text :class="[`_icon-${item}`]"></text></view>
						<view class="text-cut mt-2 text-xs text-grey">{{ item }}</view>
					</view>
				</view>
			</view>
			
			
			<ui-menu class="mt-4 radius border">
				<ui-menu-item icon="cicon-apps" title="扩展图标库" @click.native="_to('/pages/document/iconfont')"></ui-menu-item>
			</ui-menu>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			grid: true,
			list: [
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
		this.loading = true;
	},
	methods: {
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
