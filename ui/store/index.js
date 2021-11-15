import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/app/store'
import modal from '@/ui/store/modal.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		sys_theme: uni.getStorageSync('sys_theme') ? uni.getStorageSync('sys_theme') : app.state.theme, // light dark
		sys_main: uni.getStorageSync('sys_main') ? uni.getStorageSync('sys_main') : app.state.main, // color
		sys_text: 1,
		sys_info: uni.getSystemInfoSync(),
		sys_statusBar: uni.getSystemInfoSync().statusBarHeight,
	},
	getters: {
		sys_capsule() {
			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				console.log('getMenuButtonBoundingClientRect error');
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				};
			}
			return capsule;
			// #endif
			// #endif

			// #ifndef MP
			return {
				bottom: 56,
				height: 32,
				left: 278,
				right: 365,
				top: 24,
				width: 87
			};
			// #endif
		},
		sys_navBar() {
			// #ifndef MP
			return uni.getSystemInfoSync().statusBarHeight + 50;
			// #endif

			// #ifdef MP
			// #ifndef MP-ALIPAY
			let capsule = uni.getMenuButtonBoundingClientRect();
			if (!capsule) {
				console.log('getMenuButtonBoundingClientRect error');
				capsule = {
					bottom: 56,
					height: 32,
					left: 278,
					right: 365,
					top: 24,
					width: 87
				};
			}
			return capsule.bottom + capsule.top - uni.getSystemInfoSync().statusBarHeight;
			// #endif
			// #endif

			// #ifdef MP-ALIPAY
			return uni.getSystemInfoSync().statusBarHeight + uni.getSystemInfoSync().titleBarHeight;
			// #endif
		}
	},
	mutations: {
		//设置主题
		setTheme(state, data) {
			uni.setStorageSync('sys_theme', data);
			state.sys_theme = data;
			// #ifdef H5
			document.getElementsByTagName('html')[0].className =
				`theme-${state.sys_theme} main-${state.sys_main}`;
			// #endif
			
			if (data == 'auto') {
				// #ifdef MP
				this.commit('setStatusStyle',uni.getSystemInfoSync().theme == 'light' ? 'dark' : 'light');
				// #endif
			} else {
				this.commit('setStatusStyle',data == 'light' ? 'dark' : 'light');
			}
		},
		setText(state, data) {
			uni.setStorageSync('sys_text', data);
			state.sys_text = data;
		},
		setStatusStyle(state, status) {
			// console.log('theme=>',uni.getSystemInfoSync().theme,'status=>',status);
			// #ifdef H5
			return false
			// #endif 
			if (status == 'light') {
				// #ifndef MP-ALIPAY
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#000000',
					animation: {
						duration: 200,
						timingFunc: 'easeIn'
					}
				});
				// #endif
			
				// #ifdef APP-PLUS
				plus.navigator.setStatusBarStyle('light');
				// #endif
			
				// #ifdef MP-ALIPAY
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#000000'
				});
				// #endif
			} else {
				// #ifndef MP-ALIPAY
				uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: '#ffffff',
					animation: {
						duration: 200,
						timingFunc: 'easeIn'
					}
				});
				// #endif
			
				// #ifdef APP-PLUS
				plus.navigator.setStatusBarStyle('dark');
				// #endif
			
				// #ifdef MP-ALIPAY
				uni.setNavigationBarColor({
					frontColor: '#000000'
					backgroundColor: '#ffffff'
				});
				// #endif
			}
		},
		//设置主颜色
		setMain(state, data) {
			uni.setStorageSync('sys_main', data);
			state.sys_main = data;
			// #ifdef H5
			document.getElementsByTagName('html')[0].className =
				`theme-${state.sys_theme} main-${state.sys_main}`;
			// #endif
		},
	},
	actions: { 
	},
	modules: {
		app,
		modal
	}
})


Vue.prototype.$store = store
export default store;
