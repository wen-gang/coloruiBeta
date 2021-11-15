export default {
	state: {
		isTheme: false, // 是否开启多主题（true:会读缓存，能设置对应的主题)
		themeAuto: false, // 跟随系统
		theme: 'light', // 设置默认主题
		main: 'blue', // 设置默认强调色
		text: 1, // 设置默认字号等级(0-4)
		domain: 'https://color-ui.com',
		apiPath: '/api/',
		homePath: '/pages/document/home', // 设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
		tabbar: [{
				title: '文档',
				icon: '/static/tab_icon/document.png',
				curIcon: '/static/tab_icon/document_cur.png',
				url: '/pages/document/home',
				type: 'tab'
			},
			{
				title: '模板',
				icon: '/static/tab_icon/tpl.png',
				curIcon: '/static/tab_icon/tpl_cur.png',
				url: '/pages/template/home',
				type: 'tab'
			},
			{
				title: '社区',
				icon: '/static/tab_icon/comment.png',
				curIcon: '/static/tab_icon/comment_cur.png',
				url: '/pages/community/home',
				type: 'tab'
			},
			{
				title: '发现',
				icon: '/static/tab_icon/find.png',
				curIcon: '/static/tab_icon/find_cur.png',
				url: '/pages/find/home',
				type: 'tab'
			},
			{
				title: '我的',
				icon: '/static/tab_icon/my.png',
				curIcon: '/static/tab_icon/my_cur.png',
				url: '/pages/my/home',
				type: 'tab'
			},
		],
		nav: [{
				title: '基础',
				subnav: [{
						icon: 'cicon-set',
						name: 'system',
						title: '系统'
					},
					{
						icon: 'cicon-paint',
						name: 'theme',
						title: '主题'
					},
					{
						icon: 'cicon-topbar',
						name: 'navbar',
						title: '导航栏'
					},
					{
						icon: 'cicon-palette',
						name: 'background',
						title: '背景'
					},
					{
						icon: 'cicon-Aa',
						name: 'text',
						title: '文本'
					},
					{
						icon: 'cicon-magic',
						name: 'icon',
						title: '图标'
					},
					{
						icon: 'cicon-DarkMode',
						name: 'shadow',
						title: '阴影'
					},
					{
						icon: 'cicon-box',
						name: 'border',
						title: '边框'
					}
				]
			},
			{
				title: '视图',
				subnav: [{
						icon: 'cicon-avatar',
						name: 'avatar',
						title: '头像'
					},
					{
						icon: 'cicon-Tt',
						name: 'title',
						title: '标题'
					},
					{
						icon: 'cicon-tag',
						name: 'tag',
						title: '标签'
					},
					{
						icon: 'cicon-ellipse',
						name: 'button',
						title: '按钮'
					},
					{
						icon: 'cicon-pic',
						name: 'image',
						title: '图片'
					},
					{
						icon: 'cicon-code-box',
						name: 'code',
						title: '代码'
					},
					{
						icon: 'cicon-progress',
						name: 'progress',
						title: '进度条'
					},
					{
						icon: 'cicon-loader-fill',
						name: 'loading',
						title: '加载'
					}
				]
			},
			{
				title: '布局',
				subnav: [{
						icon: 'cicon-view-agenda',
						name: 'flex',
						title: '容器'
					},
					{
						icon: 'cicon-view-agenda',
						name: 'menu',
						title: '菜单'
					},
					{
						icon: 'cicon-dashboard',
						name: 'fixed',
						title: '浮动'
					},
					{
						icon: 'cicon-card',
						name: 'card',
						title: '卡片'
					},
					{
						icon: 'cicon-view-list',
						name: 'list',
						title: '列表'
					},
					{
						icon: 'cicon-grid',
						name: 'grid',
						title: '栅栏'
					},
					{
						icon: 'cicon-stock',
						name: 'timeline',
						title: '时间轴'
					},
					{
						icon: 'cicon-grid',
						name: 'table',
						title: '表格'
					}
				]
			},
			{
				title: '交互',
				subnav: [{
						icon: 'cicon-popover',
						name: 'popover',
						title: '气泡框'
					},
					{
						icon: 'cicon-stop',
						name: 'modal',
						title: '模态框'
					},
					{
						icon: 'cicon-subtitles',
						name: 'toast',
						title: '轻提示'
					},
					{
						icon: 'cicon-view-quilt',
						name: 'drawer',
						title: '抽屉'
					},
					{
						icon: 'cicon-view-day',
						name: 'collapse',
						title: '折叠面板'
					},
					{
						icon: 'cicon-view-array',
						name: 'tab',
						title: '选项卡'
					},
					{
						icon: 'cicon-view-carousel',
						name: 'swiper',
						title: '轮播图'
					},
					{
						icon: 'cicon-git-commit',
						name: 'steps',
						title: '步骤条'
					}
				]
			},
			{
				title: '表单',
				subnav: [{
						icon: 'cicon-input',
						name: 'input',
						title: '输入框'
					},
					{
						icon: 'cicon-radiobox',
						name: 'radio',
						title: '单选框'
					},
					{
						icon: 'cicon-checkbox',
						name: 'checkbox',
						title: '复选框'
					},
					{
						icon: 'cicon-toggle',
						name: 'switch',
						title: '开关'
					},
					{
						icon: 'cicon-view-headline',
						name: 'picker',
						title: '选择器'
					}
				]
			}
		],
	},
	getters: {
		getCustomTheme: state => {
			return state.theme
		},
		getCustomMain: state => {
			return state.main
		},
		getCustomText: state => {
			return state.text
		},
		getTabbar: state => {
			return state.tabbar
		},
		getNav: state => {
			return state.nav
		},
		getDomain: state => {
			return state.domain
		},
		getApiPath: state => {
			return state.apiPath
		},
	},
	mutations: {
		 
	},
	actions: {}
}
