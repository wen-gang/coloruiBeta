<template>
	<ui-sys title="文本颜色">
		<view class="ui-container">
			<view class="ui-table table-border table-full ui-BG mt-4">
				<view class="ui-table-header">
					<view class="ui-table-tr ui-BG-1">
						<view class="ui-table-th" style="width: 200rpx;">类名</view>
						<view class="ui-table-th">说明</view>
					</view>
				</view>
				<view class="ui-table-body">
					<view class="ui-table-tr" v-for="(item, index) in color" :key="$util.getUuid()">
						<view class="ui-table-td">
							<view>.text-{{ item.name }}</view>
						</view>
						<view class="ui-table-td">
							<text class="cicon-ellipse mr-3" :class="'text-' + item.name"></text>
							#{{ item.value }}
						</view>
					</view>
					<view class="ui-table-tr" v-for="(item, index) in themeColor" :key="$util.getUuid()">
						<view class="ui-table-td">
							<view>.text-main-{{ item.name }}</view>
						</view>
						<view class="ui-table-td">
							<text class="cicon-ellipse mr-3" :class="'main-' + item.name + '-text'"></text>
							var(--text-main-{{ item.name }})
						</view>
					</view>
					<view class="ui-table-tr" v-for="(item, index) in themetext" :key="$util.getUuid()">
						<view class="ui-table-td">
							<view>.text-{{ item.name }}</view>
						</view>
						<view class="ui-table-td">
							<text class="cicon-ellipse mr-3" :class="'text-' + item.name"></text>
							var(--text-{{ item.name }})
						</view>
					</view>
					<view class="ui-table-tr bg-dark-3" v-for="(item, index) in gray" :key="$util.getUuid()">
						<view class="ui-table-td">
							<view>.text-{{ item.name }}</view>
						</view>
						<view class="ui-table-td">
							<text class="cicon-ellipse mr-3" :class="'text-' + item.name"></text>
							#{{ item.value }}
						</view>
					</view>
					<view class="ui-table-tr bg-white" v-for="(item, index) in dark" :key="$util.getUuid()">
						<view class="ui-table-td">
							<view>.text-{{ item.name }}</view>
						</view>
						<view class="ui-table-td">
							<text class="cicon-ellipse mr-3" :class="'text-' + item.name"></text>
							#{{ item.value }}
						</view>
					</view>
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
			pc: false,
			size: [
				{ class: 'text-xs', size: 10, info: '说明文本，标签文字或关注度低的文字', tag: '组件库' },
				{ class: 'text-sm', size: 12, info: '页面辅助信息，次级内容等', desc: '@weilanwl.com by:color-ui.com' },
				{ class: 'text-df', size: 14, info: '页面默认字号，用于摘要或阅读文本', desc: '专注视觉的小程序组件库' },
				{ class: 'text-lg', size: 16, info: '页面三级标题，首要层级显示内容', desc: 'ColorUI组件库' },
				{ class: 'text-xl', size: 18, info: '页面二级标题，用于结果页等单一信息页', desc: '您的订单已提交成功！' },
				{ class: 'text-xxl', size: 22, info: '页面一级标题,或者用于金额数字等信息', price: '80.00' },
				{ class: 'text-sl', size: 40, info: '用于较大图标、数字等较大显示', icon: 'text-red cicon-close-round' },
				{ class: 'text-xsl', size: 60, info: '用于超大图标、数字等特大显示', icon: 'text-green cicon-check-round' }
			],
			color: [
				{ name: 'yellow', value: 'fbbd08' },
				{ name: 'orange', value: 'f37b1d' },
				{ name: 'red', value: 'e54d42' },
				{ name: 'pink', value: 'e03997' },
				{ name: 'mauve', value: 'b745cb' },
				{ name: 'purple', value: '905ddf' },
				{ name: 'blue', value: '0081ff' },
				{ name: 'cyan', value: '1cbbb4' },
				{ name: 'teal', value: '20c997' },
				{ name: 'green', value: '3eb93b' },
				{ name: 'olive', value: '8dc63f' },
				{ name: 'grey', value: '8799a3' },
				{ name: 'brown', value: 'a5673f' }
			],
			themeColor: [
				{ name: 'a', value: '0081ff' },
				{ name: 'b', value: '2ca5f9' },
				{ name: 'c', value: '2ccbf9' },
				{ name: 'd', value: 'b2d4fe' },
				{ name: 'e', value: 'ffffff' }
			],
			themetext: [{ name: 'a', value: '' }, { name: 'b', value: '' }, { name: 'c', value: '' }, { name: 'd', value: '' }, { name: 'e', value: '' }],
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
			],
			longText:
				'发光的翅萤在暮色中翩翩起舞，身后留下夜光残影，但女孩重重地将它们从面前拍走，毫不在意这转瞬即逝的优雅。她双眼垂向地面，踢开一块石头，任其在盘错的树根间跳跃，毫不理会茂密华盖间透过的夕阳。紫夜貂的花瓣缓缓张开，向温润的暮色吐出微光的花粉，但匆匆路过的她却顺手将花茎扭断。',

			sorttext: '我的潜能无穷无尽。休想压住我。',

			code1: '<view class="... text-cut">...</view> ',
			code2:
				'<view class="... text-linecut">...</view> \n<view class="... text-linecut-3">...</view> \n<view class="... text-linecut" style="-webkit-line-clamp: 5;">...</view>',
			code3:
				'<view class="... text-left">...</view> \n<view class="... text-center">...</view> \n<view class="... text-right" >...</view> \n<view class="... text-justify" >...</view> \n<view class="... text-justify-line" >...</view>',
			util: [
				{ class: 'text-light', info: '细文本', desc: '《赛博朋克2077》' },
				{ class: 'text-lighter', info: '超细文本', desc: '《赛博朋克2077》' },
				{ class: 'text-normal', info: '默认粗细文本', desc: '《赛博朋克2077》' },
				{ class: 'text-bold', info: '加粗文本', desc: '《赛博朋克2077》' },
				{ class: 'text-bolder', info: '超粗文本', desc: '《赛博朋克2077》' },
				{ class: 'text-Abc', info: '首字母大写', desc: 'weilanwl' },
				{ class: 'text-ABC', info: '所有字母大写', desc: 'weilanwl' },
				{ class: 'text-del', info: '删除线', desc: 'weilanwl' },
				{ class: 'text-bottomline', info: '下划线', desc: 'weilanwl' },
				{ class: 'text-italic', info: '斜体', desc: 'weilanwl' },
				{ class: 'text-style-none', info: '清除所有样式', desc: 'weilanwl' },
				{ class: 'text-break', info: '单词自动换行', break: 'weilanwl' },
				{ class: 'text-nowrap', info: '不自动换行', nowrap: 'ABC to abc ' },
				{ class: 'text-price', info: '人民币价格文本', desc: '80.00' }
			]
		};
	},
	onReady() {},
	onLoad() {
		this.loading = false;
		this.pc = uni.getSystemInfoSync().windowWidth > 768;
	},
	methods: {}
};
</script>

<style></style>
