import Vue from 'vue'
import Vuex from 'vuex'
import colorui from '@/colorui/js/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		info: null,
		leftTop: uni.getStorageSync('leftTop') ? uni.getStorageSync('leftTop') : 0,
		tabbar: [{
				icon: '/static/tab_icon/docment.png',
				curIcon: '/static/tab_icon/docment_cur.png',
				name: '文档',
				url: '/pages/docment/home/home',
				type: 'switchTab'
			},
			{
				icon: '/static/tab_icon/tpl.png',
				curIcon: '/static/tab_icon/tpl_cur.png',
				name: '模板',
				tag: 'hot',
				url: '/pages/template/home/home',
				type: 'switchTab'
			},
			{
				icon: '/static/tab_icon/comment.png',
				curIcon: '/static/tab_icon/comment_cur.png',
				name: '社区',
				url: '/pages/community/home/home',
				type: 'switchTab'
			},
			{
				icon: '/static/tab_icon/find.png',
				curIcon: '/static/tab_icon/find_cur.png',
				name: '发现',
				url: '/pages/find/home/home',
				type: 'switchTab'
			},
			{
				icon: '/static/tab_icon/my.png',
				curIcon: '/static/tab_icon/my_cur.png',
				name: '我的',
				url: '/pages/my/home/home',
				type: 'switchTab'
			}
		],
		nav: [{
				title: '使用之前',
				subnav: [{
						url: '/pages/docment/introduce/introduce',
						title: '开始使用'
					}, {
						url: '/pages/docment/introduce/scss',
						title: '了解SCSS'
					},
					{
						url: '/pages/docment/introduce/vuex',
						title: '了解Vuex'
					},
					{
						url: '/pages/docment/introduce/util',
						title: 'util.js的介绍'
					},
					{
						url: '/pages/docment/introduce/mixin',
						title: '全局混入mixin'
					},
					{
						url: '/pages/docment/introduce/rpx',
						title: 'rpx与px的转换'
					},
					{
						url: '/pages/docment/introduce/colors',
						title: '颜色表'
					}
				]
			},
			{
				title: '基础',
				subnav: [{
						url: '/pages/docment/sys/sys',
						icon: 'cui-set',
						name: 'system',
						title: '系统'
					},
					{
						url: '/pages/docment/theme/theme',
						icon: 'cui-paint',
						name: 'theme',
						title: '主题'
					},
					{
						url: '/pages/docment/navbar/navbar',
						icon: 'cui-topbar',
						name: 'navbar',
						title: '导航栏'
					},
					{
						url: '/pages/docment/bg/bg',
						icon: 'cui-palette',
						name: 'background',
						title: '背景'
					},
					{
						url: '/pages/docment/text/text',
						icon: 'cui-Aa',
						name: 'text',
						title: '文本'
					},
					{
						url: '/pages/docment/icon/icon',
						icon: 'cui-magic',
						name: 'icon',
						title: '图标'
					},
					{
						url: '/pages/docment/shadow/shadow',
						icon: 'cui-darkmode-o',
						name: 'shadow',
						title: '阴影'
					},
					{
						url: '/pages/docment/border/border',
						icon: 'cui-box',
						name: 'border',
						title: '边框'
					}
				]
			},
			{
				title: '视图',
				subnav: [{
						url: '/pages/docment/avatar/avatar',
						icon: 'cui-avatar',
						name: 'avatar',
						title: '头像'
					},
					{
						url: '/pages/docment/title/title',
						icon: 'cui-Tt',
						name: 'title',
						title: '标题'
					},
					{
						url: '/pages/docment/tag/tag',
						icon: 'cui-tag',
						name: 'tag',
						title: '标签'
					},
					{
						url: '/pages/docment/button/button',
						icon: 'cui-ellipse',
						name: 'button',
						title: '按钮'
					},
					{
						url: '/pages/docment/image/image',
						icon: 'cui-pic',
						name: 'image',
						title: '图片'
					},
					{
						url: '/pages/docment/code/code',
						icon: 'cui-code-box',
						name: 'code',
						title: '代码'
					},
					{
						url: '/pages/docment/progress/progress',
						icon: 'cui-progress',
						name: 'progress',
						title: '进度条'
					},
					{
						url: '/pages/docment/loading/loading',
						icon: 'cui-loader-fill',
						name: 'loading',
						title: '加载'
					}
				]
			},
			{
				title: '布局',
				subnav: [{
						url: '/pages/docment/flex/flex',
						icon: 'cui-view-agenda',
						name: 'flex',
						title: '容器'
					},
					{
						url: '/pages/docment/fixed/fixed',
						icon: 'cui-dashboard',
						name: 'fixed',
						title: '浮动'
					},
					{
						url: '/pages/docment/card/card',
						icon: 'cui-card',
						name: 'card',
						title: '卡片'
					},
					{
						url: '/pages/docment/list/list',
						icon: 'cui-view-list',
						name: 'list',
						title: '列表'
					},
					{
						url: '/pages/docment/grid/grid',
						icon: 'cui-grid',
						name: 'grid',
						title: '栅栏'
					},
					{
						url: '/pages/docment/timeline/timeline',
						icon: 'cui-stock',
						name: 'timeline',
						title: '时间轴'
					},
					{
						url: '/pages/docment/table/table',
						icon: 'cui-grid',
						name: 'table',
						title: '表格'
					}
				]
			},
			{
				title: '交互',
				subnav: [{
						url: '/pages/docment/popover/popover',
						icon: 'cui-popover',
						name: 'popover',
						title: '气泡框'
					},
					{
						url: '/pages/docment/modal/modal',
						icon: 'cui-stop',
						name: 'modal',
						title: '模态框'
					},
					{
						url: '/pages/docment/toast/toast',
						icon: 'cui-subtitles',
						name: 'toast',
						title: '轻提示'
					},
					{
						url: '/pages/docment/drawer/drawer',
						icon: 'cui-view-quilt',
						name: 'drawer',
						title: '抽屉'
					},
					{
						url: '/pages/docment/collapse/collapse',
						icon: 'cui-view-day',
						name: 'collapse',
						title: '折叠面板'
					},
					{
						url: '/pages/docment/tab/tab',
						icon: 'cui-view-array',
						name: 'tab',
						title: '选项卡'
					},
					{
						url: '/pages/docment/swiper/swiper',
						icon: 'cui-view-carousel',
						name: 'swiper',
						title: '轮播图'
					},
					{
						url: '/pages/docment/steps/steps',
						icon: 'cui-git-commit',
						name: 'steps',
						title: '步骤条'
					},
					{
						url: '/pages/docment/refresh/refresh',
						icon: 'cui-loop',
						name: 'refresh',
						title: '下拉刷新'
					},
					{
						url: '/pages/docment/emoji/emoji',
						icon: 'cui-emoji',
						name: 'emoji',
						title: '表情输入'
					}
				]
			},
			{
				title: '表单',
				subnav: [{
						url: '/pages/docment/input/input',
						icon: 'cui-input',
						name: 'input',
						title: '输入框'
					},
					{
						url: '/pages/docment/radio/radio',
						icon: 'cui-radiobox',
						name: 'radio',
						title: '单选框'
					},
					{
						url: '/pages/docment/checkbox/checkbox',
						icon: 'cui-checkbox',
						name: 'checkbox',
						title: '复选框'
					},
					{
						url: '/pages/docment/switch/switch',
						icon: 'cui-toggle',
						name: 'switch',
						title: '开关'
					},
					{
						url: '/pages/docment/picker/picker',
						icon: 'cui-view-headline',
						name: 'picker',
						title: '普通选择器'
					},
					{
						url: '/pages/docment/colorpicker/colorpicker',
						icon: 'cui-sip',
						name: 'colorpicker',
						title: '颜色选择器'
					}
				]
			},
			{
				title: '扩展',
				subnav: [{
						url: '/pages/docment/markdown/markdown',
						icon: 'cui-file-text',
						name: 'markdown',
						title: 'MarkDown'
					},
					{
						url: '/pages/docment/indexlist/indexlist',
						icon: 'cui-sort-order',
						name: 'indexlist',
						title: '索引列表'
					},
					{
						url: '/pages/docment/tabindex/tabindex',
						icon: 'cui-terminal',
						name: 'tabindex',
						title: '双向导航'
					},
					{
						url: '/pages/docment/chekin/chekin',
						icon: 'cui-event-list',
						name: 'chekin',
						title: '酒店日历'
					}
				]
			}
		],
		color: [{
				name: 'yellow',
				value: 'fbbd08'
			},
			{
				name: 'orange',
				value: 'f37b1d'
			},
			{
				name: 'red',
				value: 'e54d42'
			},
			{
				name: 'pink',
				value: 'e03997'
			},
			{
				name: 'mauve',
				value: 'b745cb'
			},
			{
				name: 'purple',
				value: '905ddf'
			},
			{
				name: 'blue',
				value: '0081ff'
			},
			{
				name: 'cyan',
				value: '1cbbb4'
			},
			{
				name: 'green',
				value: '3eb93b'
			},
			{
				name: 'olive',
				value: '8dc63f'
			},
			{
				name: 'grey',
				value: '8799a3'
			},
			{
				name: 'brown',
				value: 'a5673f'
			}
		]
	},
	mutations: {
		setInfo(state, data) {
			state.info = data;
		},
		setLeftTop(state, data) {
			if (data != 0) {
				state.leftTop = data;
				uni.setStorageSync('leftTop', data);
			}
		},
	},

	actions: {},
	modules: {
		colorui
	}
})
