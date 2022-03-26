import {
	mapState
} from 'vuex';
export default {
	data() {
		return {
			//图片地址
			oss: 'https://oss.colorui.org/cos'
		};
	},
	computed: {
		...mapState({
		}),
	},

	props: {

	},
	onLoad() {
		 
	},
	onShareTimeline() {
		return {
			title: 'ui组件库',
			query: {}
		};
	},
	onShareAppMessage() {
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		});
	},
	created() {

	}
}
