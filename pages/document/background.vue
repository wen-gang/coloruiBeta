<template>
	<ui-sys title="背景">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">
				容器的背景表现,class控制。一些组件包含了通用属性
				<ui-code>bg</ui-code>
				也是用的这些类。
			</view>

			<!-- 基础背景色 -->
			<ui-title title="基础背景色" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>.bg-{color}</ui-code>
				基础的背景颜色。
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8 ui-BG radius p-2" v-if="demo">
				<view class="p-3 ui-item" v-for="(item, index) in color" :key="index">
					<view :class="'bg-' + item.name" class="radius p-4 item" @tap="copy(`bg-${item.name}`)">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm flex-bar">
							<text class="text-ABC">#{{ item.value }}</text>
							<text>.bg-{{ item.name }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 淡色背景 -->
			<ui-title title="淡色背景" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>.bg-{color}-thin</ui-code>
				更浅的颜色。为适应暗色主题,注意有透明度！
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8 radius" v-if="demo">
				<view class="p-3 ui-item" v-for="(item, index) in color" :key="$util.getUuid()">
					<view :class="'bg-' + item.name + '-thin'" class="radius p-4 item" @tap="copy(`bg-${item.name}-thin`)">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm flex-bar">
							<text>.bg-{{ item.name }}-thin</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 渐变背景色 -->
			<ui-title title="渐变背景色" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-title title="过渡渐变色" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.bg-{color}-{color}</ui-code>
				支持所有基础色到基础色的渐变。
			</view>
			<ui-menu ui="radius border"><ui-menu-item icon="cicon-paint" title="浏览全部背景色" @click.native="_to('/pages/demo/background')"></ui-menu-item></ui-menu>

			<view class="paragraph p-3">
				<ui-title title="特殊的渐变背景色" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.bg-{color}-gradient</ui-code>
				精心调整的色值，更加自然的过渡色。
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8" v-if="demo">
				<view class="p-3 ui-item" v-for="(item, index) in color" :key="$util.getUuid()">
					<view :class="'bg-' + item.name + '-gradient'" class="radius p-4 item" @tap="copy(`bg-${item.name}-gradient`)">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm">
							<text>.bg-{{ item.name }}-gradient</text>
						</view>
					</view>
				</view>
			</view>
			<view class="paragraph p-3">
				<ui-title title="高亮色" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.bg-{color}-light</ui-code>
				带有一定色彩的高亮背景。在深浅主题下保持一致。
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-8 radius" v-if="demo">
				<view class="p-3 ui-item" v-for="(item, index) in color" :key="$util.getUuid()">
					<view :class="'bg-' + item.name + '-light'" class="radius p-4 item" @tap="copy(`bg-${item.name}-light`)">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm">
							<text>.bg-{{ item.name }}-light</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 灰度背景色 -->
			<ui-title title="灰度背景色" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-title title="浅色灰度值" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.bg-{gray}</ui-code>
				<ui-code>#aaaaaa</ui-code>
				~
				<ui-code>#ffffff</ui-code>
				的浅色灰度值
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-7 bg-dark-3 radius p-2" v-if="demo">
				<view class="p-2 ui-item" v-for="(item, index) in gray" :key="$util.getUuid()">
					<view :class="'bg-' + item.name" class="radius p-3 item" @tap="copy(`bg-${item.name}`)">{{ item.name }}</view>
				</view>
			</view>

			<view class="paragraph mt-3">
				<ui-title title="深色灰度值" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.bg-{dark}</ui-code>
				<ui-code>#999999</ui-code>
				~
				<ui-code>#000000</ui-code>
				的深色灰度值
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-2 ui-cols-lg-2 ui-cols-xl-4 ui-cols-xxl-7 bg-white radius p-2 mt-3" v-if="demo">
				<view class="p-2 ui-item" v-for="(item, index) in dark" :key="$util.getUuid()">
					<view :class="'bg-' + item.name" class="radius p-3 item" @tap="copy(`bg-${item.name}`)">{{ item.name }}</view>
				</view>
			</view>

			<!-- 主题背景色 -->
			<ui-title title="主题背景色" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-title title="主题主色背景" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.ui-BG-Main-{No}</ui-code>
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-2 ui-cols-md-4 ui-BG radius p-2" v-if="demo">
				<view class="p-2 ui-item" v-for="(item, index) in themeColor" :key="$util.getUuid()">
					<view :class="'ui-BG-Main-' + (index + 1)" class="radius p-3 item" @tap="copy(`ui-BG-Main-${(index + 1)}`)">{{ item.name }}</view>
				</view>
			</view>
			<view class="paragraph">
				<ui-title title="主题层级背景" depth="3" class="ml-3" isIcon></ui-title>
				<ui-code>.{level}-bg</ui-code>
				<ui-code>.{level}-bg-sub</ui-code>
			</view>
			<view class="ui-grid ui-cols-1 ui-cols-sm-3 radius px-2" v-if="demo">
				<view class="px-2 ui-item" v-for="(item, index) in level" :key="$util.getUuid()">
					<view :class="item + '-bg'" class="radius p-3 item border" @tap="copy(`${item}-bg`)">{{ item }}</view>
				</view>
				<view class="px-2 ui-item mt-4" v-for="(item, index) in level" :key="$util.getUuid()">
					<view :class="item + '-bg-sub'" class="radius p-3 item border" @tap="copy(`${item}-bg-sub`)">{{ item }}</view>
				</view>
			</view>

			<!-- 背景遮罩 -->
			<ui-title title="背景遮罩" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>.bg-mask-{opacity}</ui-code>
				占用after伪元素的遮罩层
			</view>
			<view class="ui-BG flex text-center text-sm">
				<view class="flex-sub py-5 bg-mask-80 text-white"><text>80%</text></view>
				<view class="flex-sub py-5 bg-mask-50 text-white"><text>50%</text></view>
				<view class="flex-sub py-5 bg-mask"><text>默认40%</text></view>
				<view class="flex-sub py-5 bg-mask-20"><text>20%</text></view>
				<view class="flex-sub py-5">无</view>
			</view>
			<view class="ui-BG flex text-center text-white text-sm mt-3 p-3">
				<view class="flex-sub bg-img pt-4 radius m-2 pb-5 bg-mask-top" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
					<text>顶部</text>
				</view>
				<view
					class="flex-sub bg-img pt-5 pb-4 radius m-2 bg-mask-bottom"
					style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');"
				>
					<text>底部</text>
				</view>
			</view>
			<!-- 背景图片 -->
			<ui-title title="背景图片" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>.bg-img</ui-code>
				自适应背景图片
			</view>
			<view class="bg-img bg-mask flex-bar radius" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'); height: 220px;">
				<view class="p-5 text-white">
					<view class="text-xxl text-bold">钢铁之翼</view>
					<view class="text-lg">Only the guilty need fear me.</view>
				</view>
			</view>
			<!-- 模糊背景 -->
			<ui-title title="模糊背景" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>.bg-blur</ui-code>
				高斯模糊背景。
				<ui-code text="text-red">
					<text class="cui-info mr-1"></text>
					存在兼容性！ios设备和安卓10以上才支持。
				</ui-code>
			</view>

			<view class="text-center mt-3 radius">
				<view class="bg-img pt-5 radius my-4" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
					<view class="mt-5 p-4 bg-blur radius-bottom"><view>.bg-blur</view></view>
				</view>
				<view class="bg-img pt-5 radius my-4" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
					<view class="mt-5 p-4 ui-BG radius-bottom"><view>.bg-blur 不兼容时</view></view>
				</view>
			</view>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			demo: true,
			loading: true,
			isShow: false,
			color: [
				{ name: 'yellow', value: 'fbbd08', desc: '明黄' },
				{ name: 'orange', value: 'f37b1d', desc: '橘橙' },
				{ name: 'red', value: 'e54d42', desc: '嫣红' },
				{ name: 'pink', value: 'e03997', desc: '桃粉' },
				{ name: 'mauve', value: 'b745cb', desc: '木槿' },
				{ name: 'purple', value: '905ddf', desc: '姹紫' },
				{ name: 'blue', value: '0081ff', desc: '海蓝' },
				{ name: 'cyan', value: '1cbbb4', desc: '天青' },
				{ name: 'green', value: '3eb93b', desc: '森绿' },
				{ name: 'olive', value: '8dc63f', desc: '橄榄' },
				{ name: 'grey', value: '8799a3', desc: '玄灰' },
				{ name: 'brown', value: 'a5673f', desc: '棕褐' }
			],
			themeColor: [{ name: 'a', value: '0081ff' }, { name: 'b', value: '2ca5f9' }, { name: 'c', value: '2ccbf9' }, { name: 'd', value: 'b2d4fe' }],
			level: ['page', 'box', 'menu'],
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
		// this.loading = false;
	},
	methods: {
		setColor(color) {
			this.curColor = color;
		},
		copy(text) {
			this.$util.copyText(unescape(text.replace(/&#x/g, '%u').replace(/;/g, '')));
		}
	}
};
</script>

<style></style>
