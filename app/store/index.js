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
		]
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
		
	},
	mutations: {
		
	},
	actions: {}
}
