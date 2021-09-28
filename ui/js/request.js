import Vue from 'vue'
import store from '@/ui/store'

function request(url, data = {}, method = "GET") {
	return new Promise(function(resolve, reject) {
		let header = {
			"Accept": "application/json",
		};
		if (uni.getStorageSync("token")) {
			header['Authorization'] = 'Bearer ' + uni.getStorageSync("token")
		} 
		uni.request({
			url: store.getters.getDomain+ store.getters.getApiPath + url,
			data: data,
			method: method,
			header: header,
			success(res) {
				if (res.statusCode == 200) {
					if (res.data.code == 401) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						setTimeout(() => {
							uni.removeStorageSync('token');
							store.commit('setLogin', false);
							uni.reLaunch({
								url: '/pages/login/login'
							});
						}, 1500)
					}
					if (res.data.code == 200) {
						resolve(res.data);
					} else {
						reject(res.data)
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						uni.hideLoading();
					}
				} else {
					if (res.statusCode == 401) {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
						setTimeout(() => {
							uni.removeStorageSync('token');
							store.commit('setLogin', false);
							uni.reLaunch({
								url: '/pages/login/login'
							});
						}, 1500)
					} else {
						reject(res.data)
						uni.showToast({
							title: 'Network Error',
							icon: 'none'
						})
						uni.hideLoading();
					}
				}
			},
			fail(err) {
				console.log(err)
				reject(err)
			}
		})
	});
}

Vue.prototype.$request = request
export default request
