<template>
	<view class="cu-shadow-box">
		<view class="cu-shadow-content">
			<slot name="content"></slot>
		</view>
		<view class="cu-shadow-bg" :class="[sys_mode]" :style="[{opacity: opacity}]">
			<view class="cu-shadow-content">
				<slot name="copy"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			opacity: {
				//状态栏颜色 可以选择light dark/其他字符串视为黑色
				type: String,
				default: '.3'
			},
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.cu-shadow-box {
		position: relative;

		.cu-shadow-content {
			position: relative;
			z-index: 2;
		}

		.cu-shadow-bg {
			position: absolute;
			z-index: 1;
			pointer-events: none;
			top: 10px;
			left: 10px;
			width: 100%;
			height: 100%;

			&.light {
				filter: brightness(90%) blur(10px);
				-webkit-filter: brightness(90%) blur(10px);
			}

			&.dark {
				filter: brightness(90%) blur(5px);
				-webkit-filter: brightness(90%) blur(5px);
			}
		}
	}
</style>
