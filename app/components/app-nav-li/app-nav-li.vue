<template>
	<view class="doc-card">
		<navigator :url="`/pages/document/${data.name}`" class="flex radius doc-card-navigator" :class="['bg-' + colorname + '-gradient']">
			<view class="flex-sub p-4 doc-text">
				<view class="doc-title">{{ data.title }}</view>
				<view class="text-lg text-Abc text-lighter doc-name">{{ data.name }}</view>
			</view>
			<view class="mt-2 mr-1 pt-4 pr-4 pl-2 doc-icon"><text class="icon-xl text-xl" :class="[data.icon]"></text></view>
			<view class="doc-dot doc-dot1" :class="['bg-' + colorname + '-gradient']"></view>
			<view class="doc-dot doc-dot2" :class="['bg-' + colorname + '-gradient']"></view>
			<view class="doc-dot doc-dot3" :class="['bg-' + colorname + '-gradient']"></view>
		</navigator>
		<view class="doc-bg" :class="['bg-' + colorname]" v-if="data.icon"></view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			colorname: '',
			color: []
		};
	},
	props: {
		data: {
			type: [Array, Object],
			default() {
				return [];
			}
		}
	},
	created() {
		let colorlist = this.color;
		this.colorname =this.$util.getColor();
	}
};
</script>

//
<style lang="scss">
// .nav-li {
// 	width: calc(100% / 3 - 20px);
// 	display: flex;
// 	flex-direction: column;
// 	padding: 10px;
// 	text-align: center;
// 	.nav-icon {
// 		border-radius: 10rpx;
// 		background: var(--ui-BG);
// 		padding-bottom: 100%;
// 		position: relative;
// 		font-size: 25px;
// 		&::before {
// 			@include flex-center;
// 			@include position-center;
// 		}
// 	}
// 	.nav-text {
// 		padding: 10px 0;
// 	}
// }
// @media screen and (min-width: 1025px) {
// 	.nav-ul {
// 		.nav-li {
// 			width: calc(100% / 9 - 66px);
// 		}
// 	}
// }
//
</style>
<style lang="scss">
.doc-card {
	position: relative;
	.doc-card-navigator {
		position: relative;
		z-index: 2;
		overflow: hidden;
	}
	.doc-bg {
		position: relative;
		z-index: 2;
		text-shadow: 2px 3px 5px rgba(0,0,0,.1);
	}
	.doc-title {
		position: relative;
		display: inline-block;
		padding-bottom: 20rpx;
		font-size: 34rpx;
		&::after {
			content: '';
			position: absolute;
			width: calc(100% + 20rpx);
			height: 2px;
			background-color: currentColor;
			left: 0;
			bottom: 0;
		}
	}
	.doc-name {
		position: relative;
		display: block;
		padding-top: 20rpx;
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			background-color: currentColor;
			left: 0;
			top: 0;
		}
	}
	.doc-text{
		position: relative;
		z-index: 2;
		padding-right: 50px !important;
	}
	.doc-icon{
		position: absolute;
		z-index: 2;
		right: 0;
	}
	.doc-dot {
		position: absolute;
		z-index: 1;
		border-radius: 50%;
		transition: all 0.6s cubic-bezier(.08,.82,.17,1);
		opacity: .3;
		&.doc-dot1 {
			width: 400rpx;
			height: 400rpx;
			left: 0;
			top: auto;
			right: auto;
			bottom: -300rpx;
			filter: hue-rotate(30deg)  brightness(160%);
		}
		&.doc-dot2 {
			left: -40px;
			top: auto;
			right: auto;
			bottom: -20rpx;
			width: 300rpx;
			height: 300rpx;
			filter: brightness(80%);
		}
		&.doc-dot3 {
			top: -120rpx;
			right: -120rpx;
			opacity: 0.6;
			width: 240rpx;
			height: 240rpx;
			filter: brightness(120%);
		}
	}
	.doc-bg {
		position: absolute;
		z-index: 0;
		width: calc(100% - 40rpx);
		height: 30rpx;
		bottom: -15rpx;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: 10rpx;
		// filter: blur(10px);
		opacity: 0.2;
	}

	&:hover {
		.doc-dot1 {
			transform: translateX(-100rpx) translatey(-360rpx);
			filter:  hue-rotate(-30deg) brightness(80%);
		}
		.doc-dot2 {
			transform: translateX(300rpx) translatey(0px);
			filter: brightness(120%);
		}
		.doc-dot3 {
			filter: brightness(80%);
			transform: translateX(-300rpx) translatey(240rpx);
		}
	}
}
</style>
