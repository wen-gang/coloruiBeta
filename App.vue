<script>
	import store from '@/ui/store'
	export default {
		onLaunch: function() {
			uni.hideTabBar();
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onThemeChange: function (res){	
			if(store.state.sys_themeAuto){
				store.commit('setTheme', res.theme);
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/ui/scss/ui';
</style>
