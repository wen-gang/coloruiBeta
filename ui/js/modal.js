 import Vue from 'vue'
 import store from '@/ui/store'
 const modal = {
    show(name) {
        store.commit('setTarget', name);
    }, 
	dialog(dialog) {
		store.commit('setDialog', dialog); 
	},
	tips(title,duration=1500) {
		store.commit('setToast', {title:title,duration:duration}); 
	},
	toast(toast) {
		store.commit('setToast', toast); 
	},
	success(title='成功',duration=1500) {
		store.commit('setToast', {icon:'cicon-check',title:title,duration:duration}); 
	},
	error(title='错误',duration=1500) {
		store.commit('setToast', {icon:'cicon-warn',title:title,duration:duration}); 
	},
	loading(title='加载中') {
		store.commit('setToast', {icon:'cicon-loading',title:title,isLoading:true}); 
	},
	hideloading() {
		store.commit('setToast', {title:'',isLoading:false}); 
	},
}

Vue.prototype.$Modal = modal 
Vue.prototype.$Tips = modal.tips
Vue.prototype.$Toast = modal.toast
Vue.prototype.$Success = modal.success
Vue.prototype.$Error = modal.error
Vue.prototype.$Loading = modal.loading
Vue.prototype.$HideLoading = modal.hideloading
export default modal
