import Vue from 'vue'
import App from './App'
import ui from './ui'
//挂载云空间口令--start
const uniClient = uniCloud.init({
	provider: 'aliyun',
	spaceId: 'f2b44127-8c25-4d80-b2dd-cbd9e4eba0ca',
	clientSecret: 'T3g/MnLf57eLTAJQezFVmA=='
})
Vue.prototype.$api = uniClient;
//挂载云空间口令--end
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
