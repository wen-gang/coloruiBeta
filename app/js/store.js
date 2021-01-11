import Vue from 'vue'
export default {
	state: {
		sys_theme: uni.getStorageSync('sys_theme') ? uni.getStorageSync('sys_theme') : 'light', // auto light dark
		sys_mode: uni.getStorageSync('sys_mode') ? uni.getStorageSync('sys_mode') : 'light', // light dark
		sys_main: uni.getStorageSync('sys_main') ? uni.getStorageSync('sys_main') : 'blue', // color
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
		},
		sys_navBar() {
			if (uni.getSystemInfoSync().statusBarHeight == 0) {
				if (uni.getSystemInfoSync().windowWidth > 1025) {
					return 70;
				} else {
					return 50;
				}
			} else {
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
		}
	},
	mutations: {
		//设置主题
		setTheme(state, data) {
			let mode = '';
			if (data == 'auto') {
				// #ifdef APP-PLUS
				mode = plus.navigator.getUiStyle();
				// #endif

				// #ifdef MP-WEIXIN
				mode = uni.getSystemInfoSync().theme;
				// #endif

			} else {
				mode = data.indexOf('light') == -1 ? 'dark' : 'light';
			}
			uni.setStorageSync('sys_theme', data);
			uni.setStorageSync('sys_mode', mode);
			state.sys_mode = mode;
			state.sys_theme = data;
		},
		//设置主题
		setMode(state, data) {
			if (state.sys_theme == 'auto') {
				state.sys_mode = data;
			}
		},
		//设置主颜色
		setMain(state, data) {
			uni.setStorageSync('sys_main', data);
			state.sys_main = data;
		},
	},
	actions: {

	}
}
