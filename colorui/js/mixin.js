export default {
	data() {
		let _data = {
			_uid: this._uid, //vue实例id
			sys_navBar: this.$store.getters.sys_navBar,
			sys_scrollTop: 0, //实例所在页面滚动值
			sys_atPage: true, //实例是否在页面里显示
			sys_atHome: false, //实例是否在首页
			sys_layer: 0, //实例层级
			sys_homePage: '/pages/index/index', //首页路径
		};
		let componentData = {
			bgClass: this.$util.setColor(this.bg, true),
			bgCss: this.$util.setColor(this.bg, false),
			textClass: this.$util.setColor(this.text, true),
			textCss: this.$util.setColor(this.text, false),
			curTextClass: this.$util.setColor(this.curtext, true),
			curTextCss: this.$util.setColor(this.curtext, false),
		};

		if (this._uid != this.$root._uid) {
			_data = Object.assign(componentData, _data);
		}
		return _data;
	},

	props: {
		bg: {
			type: String,
			default: 'box-bg'
		},
		text: {
			type: String,
			default: 'text-c'
		},
		curbg: {
			type: String,
			default: 'bg-main-a'
		},
		curtext: {
			type: String,
			default: 'text-main-a'
		}
	},
	watch: {
		bg(val) {
			this.bgClass = this.$util.setColor(val, true);
			this.bgCss = this.$util.setColor(val, false);
		},
		text(val) {
			this.textClass = this.$util.setColor(val, true);
			this.textCss = this.$util.setColor(val, false);
		},
		curbg(val) {
			this.curBgClass = this.$util.setColor(val, true);
			this.curBgCss = this.$util.setColor(val, false);
		},
		curtext(val) {
			this.curTextClass = this.$util.setColor(val, true);
			this.curTextCss = this.$util.setColor(val, false);
		},
	},
	computed: {
		sys_theme() {
			return this.$store.state.colorui.sys_theme;
		},
		sys_mode() {
			return this.$store.state.colorui.sys_mode;
		},
		sys_main() {
			return this.$store.state.colorui.sys_main;
		},
		sys_info() {
			return this.$store.state.colorui.sys_info;
		},
		sys_statusBar() {
			return this.$store.state.colorui.sys_statusBar;
		},
		sys_capsule() {
			return this.$store.getters.sys_capsule;
		}
	},
	created() {
		if (this._uid != this.$root._uid) {
			this._onShow();
		}
		if (this.$parent) {
			this.sys_layer = (this.$parent.sys_layer ? this.$parent.sys_layer : 0) + 1
		}

	},
	onLoad() {
		uni.onWindowResize((res) => {
			this.sys_navBar = this.$store.getters.sys_navBar;
		})
	},
	onShow() {
		uni.$emit('_onShow_' + this._uid);
	},
	mounted() {
		uni.$on('_onShow_' + this.$root._uid, () => {
			this._onShow();
		})
		uni.$on('_onHide_' + this.$root._uid, () => {
			this._onHide();
		})
		uni.$on('_onResize_' + this.$root._uid, () => {
	
		})
		// #ifdef H5
		this.sys_atHome = window.history.length <= 2;
		// #endif
		// #ifndef H5
		let pages = getCurrentPages();
		this.sys_atHome = pages.length == 1;
		// #endif
	
	},
	onHide() {
		uni.$emit('_onHide_' + this._uid);
	},
	destroyed() {
		uni.$off('_onShow_' + this._uid);
		uni.$off('_onHide_' + this._uid);
	},
	onPageScroll(e) {
		this.sys_scrollTop = e.scrollTop;
		uni.$emit('_scrollTop_' + this._uid, e.scrollTop)
		if (e.scrollTop < 0) {
			return false
		}
	
	},
	onShareAppMessage() {
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		});
	},
	onShareTimeline() {
		return {
			title: 'Colorui组件库',
			query: {}
		};
	},
	methods: {
		_onShow() {
			this.sys_atPage = true;
			// console.log('component: ' + this._uid + ' onShow in '+ this.$root._uid);
		},
		_onHide() {
			this.sys_atPage = false;
			// console.log('component: ' + this._uid + ' onHide in '+ this.$root._uid);
		},
		_backPage() {
			if (this.sys_atHome) {
				this._toHome();
			} else {
				// #ifdef H5
				window.history.back();
				// #endif

				// #ifndef H5
				uni.navigateBack({
					delta: 1
				});

				// #endif
			}
		},
		_toHome() {
			uni.reLaunch({
				url: this.sys_homePage
			});
		}
	}
}
