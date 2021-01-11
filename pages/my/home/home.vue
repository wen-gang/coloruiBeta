<template>
	<cu-sys bg="bg-none">
		<app-nav opacity opacityChange status="light" :back="false" fixed shadow>
			<block slot="left">
				<match-media :max-width="768"><cu-title title="Colorui组件库" class="ml-3" v-if="sys_scrollTop > sys_navBar / 2"></cu-title></match-media>
			</block>
		</app-nav>
		 
		<match-media :max-width="768"><cu-tabbar :cur="4" shadow></cu-tabbar></match-media>
	</cu-sys>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
		};
	},
	onLoad() {
	 
	},
	methods: {}
};
</script>

<style lang="scss">
 
</style>
