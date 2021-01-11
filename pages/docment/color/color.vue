<template>
	<cu-sys :loading="loading">
		<app-nav backtext="背景" shadow></app-nav>
		<view class="px-4">
			<!-- 简介 -->
			<cu-title title="简介" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">背景</view>
		</view>
		<demo-btn :demo.sync="demo"></demo-btn>
	</cu-sys>
</template>

<script>
export default {
	data() {
		return {
			demo: true,
			loading: true,
			isShow: false,
			color: [
				{ name: 'yellow', value: 'fbbd08',desc:'明黄' },
				{ name: 'orange', value: 'f37b1d' ,desc:'橘橙'},
				{ name: 'red', value: 'e54d42' ,desc:'嫣红'},
				{ name: 'pink', value: 'e03997' ,desc:'桃粉'},
				{ name: 'mauve', value: '9c26b0' ,desc:'木槿'},
				{ name: 'purple', value: '6739b6' ,desc:'姹紫'},
				{ name: 'blue', value: '0081ff' ,desc:'海蓝'},
				{ name: 'cyan', value: '1cbbb4' ,desc:'天青'},
				{ name: 'teal', value: '20c997' ,desc:'茶绿'},
				{ name: 'green', value: '3eb93b' ,desc:'森绿'},
				{ name: 'olive', value: '8dc63f' ,desc:'橄榄'},
				{ name: 'grey', value: '8799a3' ,desc:'玄灰'},
				{ name: 'brown', value: 'a5673f' ,desc:'棕褐' }
			],
			themeColor: [
				{ name: 'a', value: '0081ff' },
				{ name: 'b', value: '2ca5f9' },
				{ name: 'c', value: '2ccbf9' },
				{ name: 'd', value: 'b2d4fe' },
				{ name: 'e', value: 'ffffff' }
			],
			gray: [
				{ name: 'white', value: 'ffffff' },
				{ name: 'gray-f', value: 'f8f9fa' },
				{ name: 'gray-e', value: 'eeeeee' },
				{ name: 'gray-d', value: 'dddddd' },
				{ name: 'gray-c', value: 'cccccc' },
				{ name: 'gray-b', value: 'bbbbbb' },
				{ name: 'gray-a', value: 'aaaaaa' }
			],
			dark: [
				{ name: 'dark-9', value: '999999' },
				{ name: 'dark-8', value: '888888' },
				{ name: 'dark-7', value: '777777' },
				{ name: 'dark-6', value: '666666' },
				{ name: 'dark-5', value: '555555' },
				{ name: 'dark-4', value: '444444' },
				{ name: 'dark-3', value: '333333' },
				{ name: 'dark-2', value: '222222' },
				{ name: 'dark-1', value: '111111' },
				{ name: 'black', value: '000000' }
			]
		};
	},
	onReady() {
		this.loading = false;
	},
	methods: {
		setColor(color) {
			this.curColor = color;
		}
	}
};
</script>

<style></style>
