import Vue from 'vue'
import App from './App'
import ui from './ui'
//挂载云空间口令--start
const uniClient = uniCloud.init({
	provider: 'aliyun',
	spaceId: '5e8b7a75-3f07-4a3b-a5ae-9f376b90166a',
	clientSecret: 'y1GmB4haXDt7hGlHvuSbNA=='
})
Vue.prototype.$api = uniClient;
//挂载云空间口令--end
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
