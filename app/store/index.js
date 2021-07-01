export default {
	state: {
		isTheme: false, // 是否开启多主题（true:会读缓存，能设置对应的主题)
		themeAuto: false, // 跟随系统
		theme: 'light', // 设置默认主题
		main: 'blue', // 设置默认强调色
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
		leftTop:0,
		nav: [{
				title: '基础',
				subnav: [{
						icon: 'uicon-set',
						name: 'system',
						title: '系统'
					},
					{
						icon: 'uicon-paint',
						name: 'theme',
						title: '主题'
					},
					{
						icon: 'uicon-topbar',
						name: 'navbar',
						title: '导航栏'
					},
					{
						icon: 'uicon-palette',
						name: 'background',
						title: '背景'
					},
					{
						icon: 'uicon-Aa',
						name: 'text',
						title: '文本'
					},
					{
						icon: 'uicon-magic',
						name: 'icon',
						title: '图标'
					},
					{
						icon: 'uicon-darkmode-o',
						name: 'shadow',
						title: '阴影'
					},
					{
						icon: 'uicon-box',
						name: 'border',
						title: '边框'
					}
				]
			},
			{
				title: '视图',
				subnav: [{
						icon: 'uicon-avatar',
						name: 'avatar',
						title: '头像'
					},
					{
						icon: 'uicon-Tt',
						name: 'title',
						title: '标题'
					},
					{
						icon: 'uicon-tag',
						name: 'tag',
						title: '标签'
					},
					{
						icon: 'uicon-ellipse',
						name: 'button',
						title: '按钮'
					},
					{
						icon: 'uicon-pic',
						name: 'image',
						title: '图片'
					},
					{
						icon: 'uicon-code-box',
						name: 'code',
						title: '代码'
					},
					{
						icon: 'uicon-progress',
						name: 'progress',
						title: '进度条'
					},
					{
						icon: 'uicon-loader-fill',
						name: 'loading',
						title: '加载'
					}
				]
			},
			{
				title: '布局',
				subnav: [{
						icon: 'uicon-view-agenda',
						name: 'flex',
						title: '容器'
					},
					{
						icon: 'uicon-view-agenda',
						name: 'menu',
						title: '菜单'
					},
					{
						icon: 'uicon-dashboard',
						name: 'fixed',
						title: '浮动'
					},
					{
						icon: 'uicon-card',
						name: 'card',
						title: '卡片'
					},
					{
						icon: 'uicon-view-list',
						name: 'list',
						title: '列表'
					},
					{
						icon: 'uicon-grid',
						name: 'grid',
						title: '栅栏'
					},
					{
						icon: 'uicon-stock',
						name: 'timeline',
						title: '时间轴'
					},
					{
						icon: 'uicon-grid',
						name: 'table',
						title: '表格'
					}
				]
			},
			{
				title: '交互',
				subnav: [{
						icon: 'uicon-popover',
						name: 'popover',
						title: '气泡框'
					},
					{
						icon: 'uicon-stop',
						name: 'modal',
						title: '模态框'
					},
					{
						icon: 'uicon-subtitles',
						name: 'toast',
						title: '轻提示'
					},
					{
						icon: 'uicon-view-quilt',
						name: 'drawer',
						title: '抽屉'
					},
					{
						icon: 'uicon-view-day',
						name: 'collapse',
						title: '折叠面板'
					},
					{
						icon: 'uicon-view-array',
						name: 'tab',
						title: '选项卡'
					},
					{
						icon: 'uicon-view-carousel',
						name: 'swiper',
						title: '轮播图'
					},
					{
						icon: 'uicon-git-commit',
						name: 'steps',
						title: '步骤条'
					}
				]
			},
			{
				title: '表单',
				subnav: [{
						icon: 'uicon-input',
						name: 'input',
						title: '输入框'
					},
					{
						icon: 'uicon-radiobox',
						name: 'radio',
						title: '单选框'
					},
					{
						icon: 'uicon-checkbox',
						name: 'checkbox',
						title: '复选框'
					},
					{
						icon: 'uicon-toggle',
						name: 'switch',
						title: '开关'
					},
					{
						icon: 'uicon-view-headline',
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
		getTabbar: state => {
			return state.tabbar
		},
		getNav: state => {
			return state.nav
		},
		getLeftTop: state => {
			return state.leftTop
		},
		
	},
	mutations: {
		setLeftTop(state, data) {
			if (data != 0) {
				state.leftTop = data;
				uni.setStorageSync('leftTop', data);
			}
		},
	},
	actions: {}
}
