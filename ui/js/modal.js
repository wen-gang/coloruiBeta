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
	success(title,duration=1500) {
		store.commit('setToast', {icon:'uicon-check',title:title,duration:duration}); 
	},
}

Vue.prototype.$Modal = modal 
Vue.prototype.$Tips = modal.tips
Vue.prototype.$Toast = modal.toast
Vue.prototype.$Success = modal.success
Vue.prototype.$Error = modal.error
Vue.prototype.$loading = modal.loading
export default modal