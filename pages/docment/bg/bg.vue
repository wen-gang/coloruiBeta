<template>
	<cu-sys :loading="loading" doc title="背景">
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				容器的背景表现,class控制。一些组件包含了通用属性
				<cu-code>bg</cu-code>
				也是用的这些类。
			</view>

			<!-- 基础背景色 -->
			<cu-title title="基础背景色" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>.bg-{color}</cu-code>
				基础的背景颜色。
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-8 box-bg radius p-2" v-if="demo">
				<view class="p-3 cu-item" v-for="(item, index) in color" :key="index">
					<view :class="'bg-' + item.name" class="radius p-4 item">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm flex-bar">
							<text class="text-ABC">#{{ item.value }}</text>
							<text>.bg-{{ item.name }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 淡色背景 -->
			<cu-title title="淡色背景" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>.bg-{color}-light</cu-code>
				更浅的颜色。为适应暗色主题,注意有透明度！
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-8 box-bg radius p-2" v-if="demo">
				<view class="p-3 cu-item" v-for="(item, index) in color" :key="'light-'+index">
					<view :class="'bg-' + item.name + '-light'" class="radius p-4 item">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm flex-bar">
							<text>.bg-{{ item.name }}-light</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 渐变背景色 -->
			<cu-title title="渐变背景色" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-title title="过渡渐变色" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-{color}-{color}</cu-code>
				支持所有基础色到基础色的渐变,组合较多,你可以在
				<cu-code>@/colorui/scss/_var.scss</cu-code>
				中配置
				<cu-code>$enable-gradients</cu-code>
				为
				<cu-code>false</cu-code>
				来关闭渐变背景的编译。
			</view>
			<view class="cu-grid cu-cols-12 cu-cols-md-12 cu-cols-lg-12 cu-cols-xl-12 cu-cols-xxl-12 box-bg radius p-2" v-if="demo">
				<block v-for="(item, index) in color" :key="'gradients-'+index">
					<view class="p-2 cu-item" v-for="(itemsub, indexsub) in color" :key="'gradientssub-'+indexsub" v-if="item.name != itemsub.name && index < 6">
						<view :class="'bg-' + item.name + '-' + itemsub.name" class="p-4 item radius"></view>
					</view>
				</block>
			</view>

			<view class="paragraph p-3">
				<cu-title title="特殊的渐变背景色" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-{color}-gradient</cu-code>
				精心调整的色值，更加自然的过渡色。
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-8 box-bg radius p-2" v-if="demo">
				<view class="p-3 cu-item" v-for="(item, index) in color" :key="'gradients-'+index">
					<view :class="'bg-' + item.name + '-gradient'" class="radius p-4 item">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm">
							<text>.bg-{{ item.name }}-gradient</text>
						</view>
					</view>
				</view>
			</view>
			<view class="paragraph p-3">
				<cu-title title="云彩" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-{color}-thin</cu-code>
				带有一定色彩的浅色渐变背景。
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-8 bg-dark-3 radius p-2" v-if="demo">
				<view class="p-3 cu-item" v-for="(item, index) in color" :key="'thin-'+index">
					<view :class="'bg-' + item.name + '-thin'" class="radius p-4 item">
						<view class="text-xl pb-3">{{ item.desc }}</view>
						<view class="text-sm">
							<text>.bg-{{ item.name }}-thin</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 灰度背景色 -->
			<cu-title title="灰度背景色" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-title title="浅色灰度值" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-{gray}</cu-code>
				<cu-code>#aaaaaa</cu-code>
				~
				<cu-code>#ffffff</cu-code>
				的浅色灰度值
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-7 bg-dark-3 radius p-2" v-if="demo">
				<view class="p-2 cu-item" v-for="(item, index) in gray" :key="'gray-'+index">
					<view :class="'bg-' + item.name" class="radius p-3 item">{{ item.name }}</view>
				</view>
			</view>

			<view class="paragraph mt-3">
				<cu-title title="深色灰度值" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-{dark}</cu-code>
				<cu-code>#999999</cu-code>
				~
				<cu-code>#000000</cu-code>
				的深色灰度值
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-2 cu-cols-lg-2 cu-cols-xl-4 cu-cols-xxl-7 bg-white radius p-2 mt-3" v-if="demo">
				<view class="p-2 cu-item" v-for="(item, index) in dark" :key="'dark-'+index">
					<view :class="'bg-' + item.name" class="radius p-3 item">{{ item.name }}</view>
				</view>
			</view>

			<!-- 主题背景色 -->
			<cu-title title="主题背景色" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-title title="主题主色背景" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.bg-main-{themeColor}</cu-code>
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-2 cu-cols-md-4 box-bg radius p-2" v-if="demo">
				<view class="p-2 cu-item" v-for="(item, index) in themeColor" :key="'theme-'+index">
					<view :class="'main-' + item.name + '-bg'" class="radius p-3 item">{{ item.name }}</view>
				</view>
			</view>
			<view class="paragraph">
				<cu-title title="主题层级背景" depth="3" class="ml-3"  isIcon toc></cu-title>
				<cu-code>.{level}-bg</cu-code>
				<cu-code>.{level}-bg-sub</cu-code>
			</view>
			<view class="cu-grid cu-cols-1 cu-cols-sm-3 radius px-2" v-if="demo">
				<view class="px-2 cu-item" v-for="(item, index) in level" :key="'level-'+index">
					<view :class="item + '-bg'" class="radius p-3 item border">{{ item }}</view>
				</view>
				<view class="px-2 cu-item mt-4" v-for="(item, index) in level" :key="'levels-'+index">
					<view :class="item + '-bg-sub'" class="radius p-3 item border">{{ item }}</view>
				</view>
			</view>

			<!-- 背景遮罩 -->
			<cu-title title="背景遮罩" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>.bg-mask-{opacity}</cu-code>
				占用after伪元素的遮罩层
			</view>
			<view class="box-bg flex text-center text-sm">
				<view class="flex-sub py-5 bg-mask-80 text-white"><text>80%</text></view>
				<view class="flex-sub py-5 bg-mask-50 text-white"><text>50%</text></view>
				<view class="flex-sub py-5 bg-mask"><text>默认40%</text></view>
				<view class="flex-sub py-5 bg-mask-20"><text>20%</text></view>
				<view class="flex-sub py-5">无</view>
			</view>
			<view class="box-bg flex text-center text-white text-sm mt-3 p-3">
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
			<cu-title title="背景图片" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>.bg-img</cu-code>
				自适应背景图片
			</view>
			<view class="bg-img bg-mask flex-bar radius" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'); height: 220px;">
				<view class="p-5 text-white">
					<view class="text-xxl text-bold">钢铁之翼</view>
					<view class="text-lg">Only the guilty need fear me.</view>
				</view>
			</view>
			<!-- 模糊背景 -->
			<cu-title title="模糊背景" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>.bg-filter</cu-code>
				高斯模糊背景。
				<cu-code text="text-red">
					<text class="cui-info mr-1"></text>
					存在兼容性！ios设备和安卓10以上才支持。
				</cu-code>
			</view>

			<view class="text-center mt-3 radius">
				<view class="bg-img pt-5 radius my-4" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
					<view class="mt-5 p-4 bg-filter radius-bottom"><view>.bg-filter</view></view>
				</view>
				<view class="bg-img pt-5 radius my-4" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
					<view class="mt-5 p-4 box-bg radius-bottom"><view>.bg-filter 不兼容时</view></view>
				</view>
			</view>
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
