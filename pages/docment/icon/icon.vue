<template>
	<cu-sys :loading="loading" title="图标" doc>
		<view class="cu-container">
<!-- 		<cu-fixed sticky>
			<view class="p-3">
				<cu-input>
					<cu-btn>搜索</cu-btn>
				</cu-input>
			</view>
		</cu-fixed> -->
		<view class="cu-icon-list cu-grid cu-cols-2 cu-cols-sm-3 cu-cols-md-4 cu-cols-lg-6 cu-cols-xl-8 cu-cols-xxl-10">
			<view v-for="(item, index) in list" :key="index" class="cu-item">
				<view class="py-4  border radius box-bg" style="height: 100%;" @tap="copy(item.name)">
					<view class="text-cut mt-2 icon-xxl p-4">
						<rich-text :nodes="'&#x' + item.content + ';'" class="cui-" :selectable="true"></rich-text>
					</view>
					<view class="text-cut mt-2 text-xs text-grey">{{ item.name | icon }}</view>
				</view>
			</view>
		</view>
		</view>
	</cu-sys>
</template>

<script>
	export default {
		data() {
			return {
				loading:false,
				grid: true,
				list: [],
				tagList: [{
					title: '箭头',
					name: 'arrow'
				}],
				page: 0
			}
		},
		created() {
			// this.list = icons;
			this.loading = true;
			this.getMaterialIcon(0);
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
				this.$util.copyText(unescape(text.replace(/&#x/g, '%u').replace(/;/g, '')))
			}
		}
	}
</script>

<style lang="scss">
	.cu-icon-list {
		.cu-item {
			padding: 30rpx;
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
