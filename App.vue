<script>
export default {
	onLaunch() {
		// console.log('APP onLaunch: ');
	},
	onShow() {
		// console.log('App Show')
	},
	onHide() {
		// console.log('App Hide')
	},
	onThemeChange(e) {
		this.$store.commit('setMode', e.theme);
	}
};
</script>

<style lang="scss">
@import '@/colorui/scss/colorui';
</style>
