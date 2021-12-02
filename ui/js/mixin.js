import Vue from 'vue'
import {
	mapState
} from 'vuex';
const mixin = {
	data() {
		return {
			_uid: this._uid, //vue实例id
			sys_scrollTop: 0, //实例所在页面滚动值
			sys_atPage: true, //实例是否在页面里显示
			sys_layer: 0, //实例层级
			slots:{}
		};
	},
	watch: {

	},
	computed: {
		...mapState({
			sys_theme: state => state.sys_theme,
			sys_main: state => state.sys_main,
			sys_info: state => state.sys_info,
			sys_text: state => state.sys_text,
			sys_statusBar: state => state.sys_statusBar,
			sys_homePath: state => state.app.homePath
		}),
		sys_navBar() {
			return this.$store.getters.sys_navBar
		},
		sys_capsule() {
			return this.$store.getters.sys_capsule
		},
		sys_isFirstPage() {
			//实例是否为路由栈的第一个页面
			let pages = getCurrentPages(); 
			return pages.length == 1
		},
		isPc(){
			return uni.getSystemInfoSync().windowWidth > 750
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
		
		
	},
	onShow() {
		uni.$emit('_onShow_' + this._uid);
	},
	onReachBottom() {
		uni.$emit('_onReachBottom_' + this._uid);
	},
	mounted() {
		uni.$on('_onShow_' + this.$root._uid, () => {
			this._onShow();
		})
		uni.$on('_onHide_' + this.$root._uid, () => {
			this._onHide();
		})
		uni.$on('_onReachBottom_' + this.$root._uid, () => {
			this._onReachBottom();
		})
        this.slots=this.$scopedSlots
	},
	onReady() {
		this._h5SetScrollTop();
		// // #ifdef H5
		// this.sys_isFirstPage = window.history.length <= 1;
		// // #endif
		// // #ifndef H5
		// // #endif
		
	},
	onShow() {
		this._h5SetScrollTop();
	},
	onHide() {
		uni.$emit('_onHide_' + this._uid);
	},
	destroyed() {
		uni.$off('_onShow_' + this._uid);
		uni.$off('_onHide_' + this._uid);
		this.sys_atPage = false;
	},
	onPageScroll(e) {
		this.sys_scrollTop = e.scrollTop;
		uni.$emit('_scrollTop_' + this._uid, e.scrollTop)
		if (e.scrollTop < 0) {
			return false
		}
	},
	methods: {
		_h5SetScrollTop(){
			this.$nextTick(function() {
				// #ifdef H5
				// 刷新后保持导航栏位置x
				let top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
				this.sys_scrollTop = top;
				uni.$emit('_scrollTop_' + this.$root._uid, top);
				// #endif
				uni.$emit('_hideLoading_' + this.$root._uid, false);
			});
		},
		_onShow() {
			this.sys_atPage = true;
			// console.log('component: ' + this._uid + ' onShow in '+ this.$root._uid);
		},
		_onReachBottom() {},
		_onHide() {
			this.sys_atPage = false;
			// console.log('component: ' + this._uid + ' onHide in '+ this.$root._uid);
		},
		_backPage() {
			if (this.sys_isFirstPage) {
				this._toHome();
			} else {
				// #ifdef H5
				window.history.back();
				// #endif

				// #ifndef H5
				uni.navigateBack({
					delta: 1,
					fail(res) {
						console.log(res);
					}
				});

				// #endif
			}
		},
		_toHome() {
			uni.switchTab({
				url: this.sys_homePath,
				fail(res) {
					console.log(res);
				}
			});
		},
		_has(data,str) {
			 return data.indexOf(str) != -1
		},
		_to(url, type = '') {
			switch (type) {
				case 'switchTab':
					uni.switchTab({
						url: url,
						fail(res) {
							console.log(res);
						}
					});
					break;
				case 'reLaunch': 
					uni.reLaunch({
						url: url,
						success(res) {
							console.log(res);
						},
						fail(res) {
							console.log(res);
						}
					});
					break;
				case 'redirectTo':
					uni.redirectTo({
						url: url,
						fail(res) {
							console.log(res);
						}
					});
					break;
				default:
					uni.navigateTo({
						url: url,
						fail(res) {
							console.log(res);
						}
					})
					break;
			}
		},
		_getParent(name) {
			let parent = this.$parent;
			if (parent) {
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (parent) {
						parentName = parent.$options.name;
					} else {
						return null;
					}
				}
				return parent;
			}
			return null;
		},
	}
}

export default mixin
Vue.mixin(mixin)
