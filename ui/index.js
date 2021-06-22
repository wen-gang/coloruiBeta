import Vue from 'vue'
import store from '@/ui/store'
import modal from '@/ui/js/modal.js'
import util from '@/ui/js/util.js'
import mixin from '@/ui/js/mixin.js'
import app from "@/app/index.js"
if (uni.getStorageSync("VUE_APP_NAME") != process.env.VUE_APP_NAME) {
	uni.clearStorage();
	uni.setStorageSync('VUE_APP_NAME', process.env.VUE_APP_NAME);
}

/*分析主题*/
var theme = uni.getStorageSync("sys_theme");
var main = uni.getStorageSync("sys_main");

if (!theme) {
	theme = store.getters.getCustomTheme;
}
if (!main) {
	main = store.getters.getCustomMain;
}
store.commit('setTheme', theme);
store.commit('setMain', main);
